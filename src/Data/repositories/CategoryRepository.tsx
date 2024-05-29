import { AxiosError } from "axios";
import { Category } from "../../Domain/entities/Category";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

/**
 * Class to implement the CategoryRepository interface
 */
export class CategoryRepositoryImpl implements CategoryRepository {

    /**
     * Method to send a request to the server to create a category
     * @param category is the category to be created
     * @returns the response from the server
     */
    async create(category: Category): Promise<ResponseAPIDelivery> {
        try {
            // Call the post method from the ApiDelivery class to send a createCategory request to the server
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>('category/createCategory', category);
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
     * Method to send a request to the server to list all categories
     * @returns the response from the server
     */
    async list(): Promise<ResponseAPIDelivery> {
        try {
            // Call the get method from the ApiDelivery class to send a listCategories request to the server
            const { data } = await ApiDelivery.get<ResponseAPIDelivery>('category/listCategories');
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

    /**
     * Method to send a request to the server to update a category
     * @param id is the id of the category to be updated
     * @param name is the new name of the category to be updated
     * @param description is the new description of the category to be updated
     * @returns the response from the server
     */
    async update (id: string, name: string, description: string): Promise<ResponseAPIDelivery> {
        try{
            // Initialize the path of the request to the server
            const path = `category/updateCategory/${id}`;
            // Call the put method from the ApiDelivery class to send a updateCategory request to the server
            const {data} = await ApiDelivery.put<ResponseAPIDelivery>(path, {name, description});
            return Promise.resolve(data);
        } catch (error) {
            // Handle any error that occurs during the request
            let e = (error as AxiosError);
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response.data));
            return Promise.reject(apiError);
        }
    }
    /**
     * Method to send a request to the server to delete a category
     * @param id is the id of the category to be deleted
     * @returns the response from the server
     */
    async delete(id: string): Promise<ResponseAPIDelivery> {
        try{
            // Call the patch method from the ApiDelivery class to send a deleteCategory request to the server
            const {data} = await ApiDelivery.patch<ResponseAPIDelivery>(`category/deleteCategory/${id}`);
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
}