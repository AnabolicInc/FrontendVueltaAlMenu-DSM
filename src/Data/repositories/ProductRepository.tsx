import { AxiosError } from "axios";
import { Product } from "../../Domain/entities/Product";
import { ProductRepository } from "../../Domain/repositories/ProductRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";
import * as ImagePicker from "expo-image-picker";

/**
 * Class to implement the ProductRepository interface
 */
export class ProductRepositoryImpl implements ProductRepository {


    //cambiar nombre a getAllProductsByCategory lo dijo dieGOD
    async getAllProductsByCategory(category_id: string): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.get<ResponseAPIDelivery>(`product/listProducts/${category_id}`);
            console.log('DATA: ', JSON.stringify(data));
            return Promise.resolve(data);
        } catch (error) {
            let e = (error as AxiosError);
            if (e.response) {
                console.log('ERROR: ', JSON.stringify(e.response.data));
                const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
                return Promise.reject(apiError);
            } else if (e.request) {
                console.log('Request made but no response received', e.request);
                return Promise.reject(new Error('Request made but no response received'));
            } else {
                console.log('Error', e.message);
                return Promise.reject(new Error('An error occurred while making the request'));
            }
        }
    }

    async getAllProducts(): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.get<ResponseAPIDelivery>(`product/listProducts/`);
            console.log('DATA: ', JSON.stringify(data));

            return Promise.resolve(data)
        } catch (error) {
            // Handle any error that occurs during the request
            let e = (error as AxiosError);
            if (e.response) {
                console.log('ERROR: ', JSON.stringify(e.response.data));
                const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
                return Promise.reject(apiError);
            } else if (e.request) {
                console.log('Request made but no response received', e.request);
                return Promise.reject(new Error('Request made but no response received'));
            } else {
                console.log('Error', e.message);
                return Promise.reject(new Error('An error occurred while making the request'));
            }
        }
    }

    async createProduct(product: Product): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>(`product/createProduct/${product.category_id}`, product);
    
            return Promise.resolve(data)
    
        } catch (error) {
            let e = (error as AxiosError);
            if (e.response) {
                console.log('ERROOOOOOOOOOR: ', JSON.stringify(e.response.data));
                const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
                return Promise.reject(apiError);
            } else if (e.request) {
                console.log('Request made but no response received', e.request);
                return Promise.reject(new Error('Request made but no response received'));
            } else {
                console.log('Error', e.message);
                return Promise.reject(new Error('An error occurred while making the request'));
            }
        }
    }
    


    async updateProduct(id: string, name: string, description: string, price: number, quantity: number): Promise<ResponseAPIDelivery> {
        try {
            const path = `product/updateProduct/${id}`;

            const { data } = await ApiDelivery.put<ResponseAPIDelivery>(path, { name, description, price, quantity });
            console.log('DATA: ', JSON.stringify(data));

            return Promise.resolve(data)

        } catch (error) {
            let e = (error as AxiosError);
            if (e.response) {
                console.log('ERROR: ', JSON.stringify(e.response.data));
                const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
                return Promise.reject(apiError);
            } else if (e.request) {
                console.log('Request made but no response received', e.request);
                return Promise.reject(new Error('Request made but no response received'));
            } else {
                console.log('Error', e.message);
                return Promise.reject(new Error('An error occurred while making the request'));
            }
        }
    }

    async deleteProduct(id: string): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.put<ResponseAPIDelivery>(`product/deleteProduct/${id}`);
            console.log('DATA: ', JSON.stringify(data));

            return Promise.resolve(data)

        } catch (error) {
            let e = (error as AxiosError);
            if (e.response) {
                console.log('ERROR: ', JSON.stringify(e.response.data));
                const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
                return Promise.reject(apiError);
            } else if (e.request) {
                console.log('Request made but no response received', e.request);
                return Promise.reject(new Error('Request made but no response received'));
            } else {
                console.log('Error', e.message);
                return Promise.reject(new Error('An error occurred while making the request'));
            }
        }
    }

    async removeProduct(id: string): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.delete<ResponseAPIDelivery>(`product/removeProduct/${id}`);
            console.log('DATA: ', JSON.stringify(data));

            return Promise.resolve(data)

        } catch (error) {
            let e = (error as AxiosError);
            if (e.response) {
                console.log('ERROR: ', JSON.stringify(e.response.data));
                const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
                return Promise.reject(apiError);
            } else if (e.request) {
                console.log('Request made but no response received', e.request);
                return Promise.reject(new Error('Request made but no response received'));
            } else {
                console.log('Error', e.message);
                return Promise.reject(new Error('An error occurred while making the request'));
            }
        }
    }


    async updateFile(file: ImagePicker.ImageInfo, collection: string, id: string): Promise<ResponseAPIDelivery> {
        try {
            const data = new FormData();
            data.append('file', {
                name: file.fileName,
                type: file.type,
                uri: file.uri
            } as any);

            const { data: response } = await ApiDelivery.post<ResponseAPIDelivery>(`product/updateFile/${collection}/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('DATA: ', JSON.stringify(response));

            return Promise.resolve(response)

        } catch (error) {
            let e = (error as AxiosError);
            if (e.response) {
                console.log('ERROR: ', JSON.stringify(e.response.data));
                const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
                return Promise.reject(apiError);
            } else if (e.request) {
                console.log('Request made but no response received', e.request);
                return Promise.reject(new Error('Request made but no response received'));
            } else {
                console.log('Error', e.message);
                return Promise.reject(new Error('An error occurred while making the request'));
            }
        }
    }

    
}