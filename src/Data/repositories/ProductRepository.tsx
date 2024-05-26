import { AxiosError } from "axios";
import { Product } from "../../Domain/entities/Product";
import { ProductRepository } from "../../Domain/repositories/ProductRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

/**
 * Class to implement the ProductRepository interface
 */
export class ProductRepositoryImpl implements ProductRepository {

    /**
     * Method to send a request to the server to create a product
     * @param product is the product to be created
     * @returns the response from the server
     */
    async create(product: Product): Promise<ResponseAPIDelivery> {
        try {
            // Call the post method from the ApiDelivery class to send a createProduct request to the server
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('product/createProduct', product);
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
}