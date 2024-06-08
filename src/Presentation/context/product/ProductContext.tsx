import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Domain/entities/Product";
import { ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import * as ImagePicker from "expo-image-picker";
import { ProductListUseCase } from "../../../Domain/useCases/Product/ProductListUseCase";
import { ProductCreateUseCase } from "../../../Domain/useCases/Product/ProductCreateUseCase";
import { UpdateFileUseCase } from "../../../Domain/useCases/File/UpdateFileUseCase";
import { SaveProductUseCase } from "../../../Domain/useCases/Product/SaveProductLocal";
import { ProductUpdateUseCase } from "../../../Domain/useCases/Product/ProductUpdateUseCase";
import { ProductDeleteUseCase } from "../../../Domain/useCases/Product/ProductDeleteUseCase";

export interface ProductContextProps {
    products: Product[];
    refresh: boolean;
    getAllProducts(id: string): void;
    createProduct(product: Product, files?: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    updateProduct(id: string, name: string, description: string, price: number, quantity: number, files?: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    deleteProduct(id: string): Promise<ResponseAPIDelivery>;
    removeProduct(id: string): Promise<ResponseAPIDelivery>;
    updateFile(file: ImagePicker.ImagePickerAsset, collection: string, id: string): Promise<ResponseAPIDelivery>;
    addProduct(product: Product): void;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getAllProducts("");
    }, []);

    const getAllProducts = async (category_id: string) => {
        const response = await ProductListUseCase(category_id);
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
            getAllProducts(dataProduct.category_id);
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
            getAllProducts(dataProduct.category_id);
        }
        return response;
    }

    const deleteProduct = async (id: string) => {
        const response = await ProductDeleteUseCase(id);
        getAllProducts(id);
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
    const addProduct = (product: Product) => {
        setProducts(prevProducts => [...prevProducts, product]);
        setRefresh(prev => !prev); // Cambiar el estado de refresh
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                refresh, // Añadir refresh al contexto
                getAllProducts,
                createProduct,
                updateProduct,
                deleteProduct,
                removeProduct,
                updateFile,
                addProduct, // Añadir la función al contexto
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
