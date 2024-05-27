import { AxiosError } from "axios";
import { Product } from "../../Domain/entities/Product";
import { ProductRepository } from "../../Domain/repositories/ProductRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";
import * as ImagePicker from "expo-image-picker";

export class ProductRepositoryImpl implements ProductRepository {

    async create(product: Product): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('product/createProduct', product);
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

    async listProducts(): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.get<ResponseAPIDelivery>('product/getAllProducts');
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

    async updateProduct(product: Product): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.put<ResponseAPIDelivery>('product/updateProduct', product);
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
            const { data } = await ApiDelivery.delete<ResponseAPIDelivery>(`product/deleteProduct/${id}`);
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