import { AxiosError } from "axios";
import { ChangePasswordRepository } from "../../Domain/repositories/ChangePasswordRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

export class ChangePasswordRepositoryImpl implements ChangePasswordRepository {

    /**
     * Method to send a request to the server to update the password of a user
     * @param email is the email of the user
     * @param newPassword is the new password of the user
     * @param session_token is the token of the session to validate the user
     * @returns the response from the server
     */
    async update(email: string, newPassword: string, session_token: string): Promise<ResponseAPIDelivery> {
        console.log("Antes de ChangePasswordRepository.Update.try");
        try {
            // Define the path of the request
            const path = `user/new-password`;
            console.log("Actualmente en ChangePasswordRepository.Update.try");
            // Call the post method from the ApiDelivery class to send a updatePassword request to the server
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>(path, { email, newPassword}, {
                headers: {
                    'Authorization': `Bearer ${session_token}`
                }
            });
            // Return the response from the server
            return Promise.resolve(data);
        } catch (error) {
            // Handle any error that occurs during the request
            let e = error as AxiosError;
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError);
        }
    }
}
