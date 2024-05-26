import { AxiosError } from "axios";
import { UserUpdateRepository } from "../../Domain/repositories/UserUpdateRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

/**
 * Class to implement the UserUpdateRepository interface
 */
export class UserUpdateRepositoryImpl implements UserUpdateRepository {
    async update (id: string, name: string, lastName: string, phone: string, session_token: string): Promise<ResponseAPIDelivery> {
        try{
            // Define the path of the request
            const path = `user/${id}`;           
            // Call the put method from the ApiDelivery class to send a userUpdate request to the server
            const {data} = await ApiDelivery.put<ResponseAPIDelivery>(path, {name, lastName, phone},{
                headers: {
                    'Authorization': `Bearer ${session_token}`
                }
            });
            // Return the response from the server
            return Promise.resolve(data);
        } catch (error) {
            // Handle any error that occurs during the request
            let e = (error as AxiosError);
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
            return Promise.reject(apiError);
        }
    }
}