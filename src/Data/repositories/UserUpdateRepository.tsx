import { AxiosError } from "axios";
import { UserUpdateRepository } from "../../Domain/repositories/UserUpdateRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";




export class UserUpdateRepositoryImpl implements UserUpdateRepository {
    async update (id: string, name: string, lastName: string, phone: string, session_token: string): Promise<ResponseAPIDelivery> {
        //console.log('CHANGES FROM THE USER',id, name, lastName, phone, session_token);
        
        try{
            const path = `user/${id}`;
            //console.log('PATH', path);
            

            const {data} = await ApiDelivery.put<ResponseAPIDelivery>(path, {name, lastName, phone},{
                headers: {
                    'Authorization': `Bearer ${session_token}`
                }
            });

            return Promise.resolve(data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
            return Promise.reject(apiError);
        }
    }
}