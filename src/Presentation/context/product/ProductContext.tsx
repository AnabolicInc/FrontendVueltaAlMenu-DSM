import React from "react";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Domain/entities/Product";
import { ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import * as ImagePicker from "expo-image-picker";
import { ProductCreateUseCase } from "../../../Domain/useCases/Product/ProductCreateUseCase";
import { UpdateFileUseCase } from "../../../Domain/useCases/File/UpdateFileUseCase";
import { SaveProductUseCase } from "../../../Domain/useCases/Product/SaveProductLocal";
import { ProductUpdateUseCase } from "../../../Domain/useCases/Product/ProductUpdateUseCase";
import { ProductDeleteUseCase } from "../../../Domain/useCases/Product/ProductDeleteUseCase";
import { ProductListByCategoryUseCase } from "../../../Domain/useCases/Product/ProductListByCategoryUseCase";
import { ProductListUseCase } from "../../../Domain/useCases/Product/ProductListAllUseCase";

export interface ProductContextProps {
    products: Product[];
    productsByCategory: Product[];
    getAllProductsByCategory(id: string): void;
    getAllProducts(): void;
    createProduct(product: Product, files?: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    updateProduct(id: string, name: string, description: string, price: number, quantity: number, files?: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    deleteProduct(id: string): Promise<ResponseAPIDelivery>;
    removeProduct(id: string): Promise<ResponseAPIDelivery>;
    updateFile(file: ImagePicker.ImagePickerAsset, collection: string, id: string): Promise<ResponseAPIDelivery>;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);
    

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
                dataProduct.images = images.map(image => image.data); // Suponiendo que `dataProduct.images` sea un arreglo
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
                dataProduct.images = images.map(image => image.data); // Suponiendo que `dataProduct.images` sea un arreglo
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

    return (
        <ProductContext.Provider
            value={{
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
        </ProductContext.Provider>
    );
}
