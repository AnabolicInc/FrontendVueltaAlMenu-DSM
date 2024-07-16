import { AxiosError } from "axios";
import { Address } from "../../Domain/entities/Address";
import { AddressRepository } from "../../Domain/repositories/AddressRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

/**
 * Class to implement the CategoryRepository interface
 */
export class AddressRepositoryImpl implements AddressRepository {

    /**
     * Method to send a request to the server to create a address
     * @param address is the address to be created
     * @returns the response from the server
     */
    async create(address: Address): Promise<ResponseAPIDelivery> {
        try {
            // Call the post method from the ApiDelivery class to send a createAddress request to the server
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>(`address/createAddress/${address.user_id}`, address);
            console.log('DATA: ', JSON.stringify(data));
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
     * Method to send a request to the server to list all address of a user
     * @returns the response from the server
     */
    async list(): Promise<ResponseAPIDelivery> {
        try {
            // Call the get method from the ApiDelivery class to send a listCategories request to the server

            //-------------------------------------------
            //TODO: Verify if the endpoint is correct
            const { data } = await ApiDelivery.get<ResponseAPIDelivery>('address/listAddresses');
            //-------------------------------------------
            


            //console.log('DATA: ', JSON.stringify(data));
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
}