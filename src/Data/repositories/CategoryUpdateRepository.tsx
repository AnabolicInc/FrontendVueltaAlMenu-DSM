import { AxiosError } from "axios";
import { CategoryUpdateRepository } from "../../Domain/repositories/CategoryUpdateRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";




export class CategoryUpdateRepositoryImpl implements CategoryUpdateRepository {
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