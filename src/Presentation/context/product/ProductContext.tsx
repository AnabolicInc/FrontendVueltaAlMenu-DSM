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
    getAllProducts(id: string);
    createProduct(product: Product): Promise<ResponseAPIDelivery>;
    updateProduct(id: string, name: string, description: string, price: number, quantity: number): Promise<ResponseAPIDelivery>;
    deleteProduct(id: string): Promise<ResponseAPIDelivery>;
    removeProduct(id: string): Promise<ResponseAPIDelivery>;
    updateFile(file: ImagePicker.ImageInfo, collection: string, id: string): Promise<ResponseAPIDelivery>;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProducts("");
    }, []);

    const getAllProducts = async (category_id: string) => {

        const response = await ProductListUseCase(category_id);

        setProducts(response.data)

    }

    const createProduct = async (product: Product, file?: ImagePicker.ImageInfo) => {
        const response = await ProductCreateUseCase(product);

        if (response.success){
			const dataProduct = response.data;              

            if (file !== undefined){
                const responseImage = await UpdateFileUseCase(file!, 'products', dataProduct.id);
                dataProduct.image = responseImage.data;
            }

			await SaveProductUseCase(dataProduct);
		    console.log(dataProduct);
            getAllProducts(dataProduct.category_id);
        }

        return response;
    }

    const updateProduct = async (id: string, name: string, description: string, price: number, quantity: number, file?: ImagePicker.ImageInfo) => {
        const response = await ProductUpdateUseCase(id,name,description, price, quantity);

        if (response.success){
            const dataProduct = response.data;
            
            if (file !== undefined){
                const responseImage = await UpdateFileUseCase(file!, 'categories', dataProduct.id);
                dataProduct.image = responseImage.data;
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