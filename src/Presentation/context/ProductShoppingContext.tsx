import React from "react";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../Domain/entities/Product";
import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import * as ImagePicker from "expo-image-picker";
import { ProductCreateUseCase } from "../../Domain/useCases/Product/ProductCreateUseCase";
import { UpdateFileUseCase } from "../../Domain/useCases/File/UpdateFileUseCase";
import { SaveProductUseCase } from "../../Domain/useCases/Product/SaveProductLocal";
import { ProductUpdateUseCase } from "../../Domain/useCases/Product/ProductUpdateUseCase";
import { ProductDeleteUseCase } from "../../Domain/useCases/Product/ProductDeleteUseCase";
import { ProductListByCategoryUseCase } from "../../Domain/useCases/Product/ProductListByCategoryUseCase";
import { ProductListUseCase } from "../../Domain/useCases/Product/ProductListAllUseCase";

export interface ProductShoppingContextProps {
    products: Product[];
    productsByCategory: Product[];
    getAllProductsByCategory(id: string): void;
    getAllProducts(): void;
    createProduct(product: Product, files?: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    updateProduct(id: string, name: string, description: string, price: number, quantity: number, files?: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    deleteProduct(id: string): Promise<ResponseAPIDelivery>;
    removeProduct(id: string): Promise<ResponseAPIDelivery>;
    updateFile(file: ImagePicker.ImagePickerAsset, collection: string, id: string): Promise<ResponseAPIDelivery>;
    shoppingCart: Product[];
    total: number;
    getShoppingCart(): Promise<void>;
    getTotal(): void;
    saveProductShoppingCart(product: Product): Promise<void>;
    removeProductShoppingCart(product: Product): Promise<void>;
    addItem(product: Product): void;
    subtracItem(product: Product): void;
}

export const ProductShoppingContext = createContext({} as ProductShoppingContextProps);

export const ProductShoppingProvider = ({ children }: any) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);
    const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getAllProductsByCategory("");
    }, []);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProductsByCategory = async (category_id: string) => {
        const response = await ProductListByCategoryUseCase(category_id);
        setProductsByCategory(response.data);
    }

    const getAllProducts = async () => {
        const response = await ProductListUseCase();
        setProducts(response.data);
    }

    const createProduct = async (product: Product, files?: ImagePicker.ImagePickerAsset[]) => {
        const response = await ProductCreateUseCase(product);
        if (response.success) {
            const dataProduct = response.data;
            if (files && files.length > 0) {
                const images = await Promise.all(
                    files.map(file => UpdateFileUseCase(file, 'images', dataProduct.id))
                );
                dataProduct.images = images.map(image => image.data);
            }
            await SaveProductUseCase(dataProduct);
            getAllProductsByCategory(dataProduct.category_id);
        }
        return response;
    }

    const updateProduct = async (id: string, name: string, description: string, price: number, quantity: number, files?: ImagePicker.ImagePickerAsset[]) => {
        const response = await ProductUpdateUseCase(id, name, description, price, quantity);
        if (response.success) {
            const dataProduct = response.data;
            if (files && files.length > 0) {
                const images = await Promise.all(
                    files.map(file => UpdateFileUseCase(file, 'categories', dataProduct.id))
                );
                dataProduct.images = images.map(image => image.data);
            }
            getAllProductsByCategory(dataProduct.category_id);
        }
        return response;
    }

    const deleteProduct = async (id: string) => {
        const response = await ProductDeleteUseCase(id);
        getAllProductsByCategory(id);
        return response;
    }

    const removeProduct = async (id: string) => {
        return new Promise((resolve, reject) => {
            resolve({} as ResponseAPIDelivery);
        });
    }

    const updateFile = async (file: ImagePicker.ImagePickerAsset, collection: string, id: string) => {
        return new Promise((resolve, reject) => {
            resolve({} as ResponseAPIDelivery);
        });
    }

    const getShoppingCart = async () => {
        return Promise.resolve();
    }

    const getTotal = async () => {
         
    }

    const saveProductShoppingCart = (product: Product) => {
        console.log('Product saved from shopping context');
        const index = shoppingCart.findIndex((p) => p.id === product.id);
        if (index === -1) {
            shoppingCart.push(product);
        } else {
            shoppingCart[index].quantity += product.quantity;
        }
        setShoppingCart([...shoppingCart]);
        return Promise.resolve();
    }

    const removeProductShoppingCart = (product: Product) => {
        const index = shoppingCart.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            shoppingCart.splice(index, 1);
        }
        setShoppingCart([...shoppingCart]);
        return Promise.resolve();
    }

    const addItem = (product: Product) => {
        const index = shoppingCart.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            shoppingCart[index].quantity += 1;
            setShoppingCart([...shoppingCart]);
        }
    }

    const subtracItem = (product: Product) => {
        const index = shoppingCart.findIndex((p) => p.id === product.id);
        if (index !== -1 && shoppingCart[index].quantity > 1) {
            shoppingCart[index].quantity -= 1;
            setShoppingCart([...shoppingCart]);
        }
    }

    return (
        <ProductShoppingContext.Provider
            value={{
                shoppingCart,
                total,
                getTotal,
                getShoppingCart,
                saveProductShoppingCart,
                removeProductShoppingCart,
                addItem,
                subtracItem,
                products,
                productsByCategory,
                getAllProducts,
                getAllProductsByCategory,
                createProduct,
                updateProduct,
                deleteProduct,
                removeProduct,
                updateFile
            }}
        >
            {children}
        </ProductShoppingContext.Provider>
    );
}
