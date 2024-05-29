import { Axios, AxiosError } from 'axios';
import { Category } from '../../Domain/entities/Category';
import { CategoryLocalRepository } from '../../Domain/repositories/CategoryLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseVerifyTokenApiDelivery } from '../sources/remote/api/models/ResponseVerifyTokenApiDelivery';

/**
 * Class to implement the CategoryLocalRepository interface
 */
export class CategoryLocalRepositoryImpl  implements CategoryLocalRepository {
    /**
     * Method to save a category in the local storage
     * @param category is the category to be saved
     */
    async save(category: Category): Promise<void> {
        const {save} = LocalStorage();
        await save('category', JSON.stringify(category));
    }
}