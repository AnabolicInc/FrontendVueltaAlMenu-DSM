import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Domain/entities/Product";
import { ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import * as ImagePicker from "expo-image-picker";
import { ProductListUseCase } from "../../../Domain/useCases/Product/ProductListUseCase";



export interface ProductContextProps {
    products: Product[];
    getAllProducts();
    createProduct(product: Product): Promise<ResponseAPIDelivery>;
    updateProduct(product: Product): Promise<ResponseAPIDelivery>;
    deleteProduct(id: string): Promise<ResponseAPIDelivery>;
    removeProduct(id: string): Promise<ResponseAPIDelivery>;
    updateFile(file: ImagePicker.ImageInfo, collection: string, id: string): Promise<ResponseAPIDelivery>;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {

        const response = await ProductListUseCase();  
        
        setProducts(response.data)

    }



    const createProduct = async (product: Product) => {
        return new Promise((resolve, reject) => {
            resolve({} as ResponseAPIDelivery);
        });
    }

    const updateProduct = async (product: Product) => {
        return new Promise((resolve, reject) => {
            resolve({} as ResponseAPIDelivery);
        });
    }

    const deleteProduct = async (id: string) => {
        return new Promise((resolve, reject) => {
            resolve({} as ResponseAPIDelivery);
        });
    }

    const removeProduct = async (id: string) => {
        return new Promise((resolve, reject) => {
            resolve({} as ResponseAPIDelivery);
        });
    }

    const updateFile = async (file: ImagePicker.ImageInfo, collection: string, id: string) => {
        return new Promise((resolve, reject) => {
            resolve({} as ResponseAPIDelivery);
        });
    }


    return (


        <ProductContext.Provider
            value={{
                products,
                getAllProducts,
                createProduct,
                updateProduct,
                deleteProduct,
                removeProduct,
                updateFile
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}