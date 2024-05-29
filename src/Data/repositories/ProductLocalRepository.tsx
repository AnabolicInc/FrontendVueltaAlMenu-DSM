import { Axios, AxiosError } from 'axios';
import { Product } from '../../Domain/entities/Product';
import { ProductLocalRepository } from '../../Domain/repositories/ProductLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';

/**
 * Class to implement the ProductLocalRepository interface
 */

export class ProductLocalRepositoryImpl  implements ProductLocalRepository {
    /**
     * Method to save a product in the local storage
     * @param product is the product to be saved
     */
    async save(product: Product): Promise<void> {
        const {save} = LocalStorage();
        await save('product', JSON.stringify(product));
    }
}