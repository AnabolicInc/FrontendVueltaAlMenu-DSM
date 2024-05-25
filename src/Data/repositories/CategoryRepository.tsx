import { AxiosError } from "axios";
import { Category } from "../../Domain/entities/Category";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

export class CategoryRepositoryImpl implements CategoryRepository {

    async create(category: Category): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('category/createCategory', category);
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

    async list(): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.get<ResponseAPIDelivery>('category/listCategories');
            //console.log('DATA: ', JSON.stringify(data));
            
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
    
    async update (id: string, name: string, description: string): Promise<ResponseAPIDelivery> {
        //console.log('CHANGES FROM THE CATEGORY', name, description);
        
        try{
            const path = `category/updateCategory/${id}`;
            //console.log('PATH', path);
            

            const {data} = await ApiDelivery.put<ResponseAPIDelivery>(path, {name, description});

            return Promise.resolve(data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
            return Promise.reject(apiError);
        }
    }
    
    
}