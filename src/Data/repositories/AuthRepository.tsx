import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";
import { ImageInfo, ImagePickerAsset } from "expo-image-picker";
import mime from 'mime';

export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('auth/register', user);
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


    async login(email: string, password: string): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('auth/login', { email, password });
            return Promise.resolve(data);
        } catch (error) {
            let e = (error as AxiosError);
            if (e.response) {
                switch(e.response.status) {
                    case 400:
                        // Handle 400 error
                        console.log('Bad Request: ', JSON.stringify(e.response.data));
                        break;
                    case 401:
                        // Handle 401 error
                        console.log('Unauthorized: ', JSON.stringify(e.response.data));
                        break;
                    // other status codes...
                    default:
                        console.log('Error', e.message);
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

    async forgotPassword(email: string): Promise<ResponseAPIDelivery> {
        try {
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('user/change-password', { email });
            console.log(data);
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