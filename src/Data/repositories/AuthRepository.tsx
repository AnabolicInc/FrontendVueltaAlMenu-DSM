import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

/**
 * Class to implement the AuthRepository interface
 */
export class AuthRepositoryImpl implements AuthRepository {

    /**
     * Method to send a request to the server to register a user
     * @param user is the user to be registered
     * @returns the response from the server
     */
    async register(user: User): Promise<ResponseAPIDelivery> {
        try {
            // Call the post method from the ApiDelivery class to send a register request to the server
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('auth/register', user);
            // Return the response from the server
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

    /**
     * Method to send a request to the server to login a user
     * @param email is the email of the user
     * @param password is the password of the user
     * @returns the response from the server
     */
    async login(email: string, password: string): Promise<ResponseAPIDelivery> {
        try {
            // Call the post method from the ApiDelivery class to send a login request to the server
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('auth/login', { email, password });
            // Return the response from the server
            return Promise.resolve(data);
        } catch (error) {
            // Handle any error that occurs during the request
            let e = (error as AxiosError);
            if (e.response) {
                switch(e.response.status) {
                    case 400:
                        console.log('Bad Request: ', JSON.stringify(e.response.data));
                        break;
                    case 401:
                        console.log('Unauthorized: ', JSON.stringify(e.response.data));
                        break;
                    default: console.log('Error', e.message);
                }
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

    /**
     * Method to send a request to the server to reset the password of a user
     * @param email is the email of the user
     * @returns the response from the server
     */
    async forgotPassword(email: string): Promise<ResponseAPIDelivery> {
        try {
            // Call the post method from the ApiDelivery class to send a forgotPassword request to the server
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('user/change-password', { email });
            console.log("data:",  data);
            // Return the response from the server
            return Promise.resolve(data);
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
    /**
     * Method to send a request to the server to verify the code sent to the user
     * @param email is the email of the user
     * @param code is the code sent to the user
     * @returns the response from the server
     */
    async verifyCode(email: string, code: string): Promise<ResponseAPIDelivery> {
        try {
            // Call the post method from the ApiDelivery class to send a verifyCode request to the server
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('user/verify-code', { email, code });
            return Promise.resolve(data);
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
    async newPassword(email: string, newPassword: string): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('user/new-password', { email, newPassword });
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

}