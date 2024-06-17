import { Axios, AxiosError } from 'axios';
import { User } from '../../Domain/entities/User';
import { UserLocalRepository } from '../../Domain/repositories/UserLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseVerifyTokenApiDelivery } from '../sources/remote/api/models/ResponseVerifyTokenApiDelivery';

/**
 * Class to implement the UserLocalRepository interface
 */

export class UserLocalRepositoryImpl  implements UserLocalRepository {
    /**
     * Method to save a user in the local storage
     * @param user is the user to be saved
     */
    async save(user: User): Promise<void> {
        const {save} = LocalStorage();
        await save('user', JSON.stringify(user));
    }
    /**
     * Method to get the user from the local storage
     * @returns the user from the local storage
     */
    async getUser(): Promise<User>{
        const {getItem} = LocalStorage();
        const data = await getItem('user');
        const user: User = JSON.parse(data as any);
        // Return the user from the local storage
        return user;
    }
    /**
     * Method to remove the user from the local storage
     */
    async removeItem(): Promise<void>{
        const {removeItem} = LocalStorage();
        await removeItem('user');
    }
    /**
     * Method to send a request to the server to create a user
     * @param user is the user to be created
     * @returns the response from the server
     */
    async verifyToken(token: string): Promise<ResponseVerifyTokenApiDelivery>{
        try {
            // Call the get method from the ApiDelivery class to send a listCategories request to the server
            const {data} = await ApiDelivery.get<ResponseVerifyTokenApiDelivery>('auth/validate-token', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Return the response from the server
            return data;
        } catch (error) {
            // Handle any error that occurs during the request
            let e = (error as AxiosError);
            const apiError: ResponseVerifyTokenApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError);
        }
    }
}