import { Axios, AxiosError } from 'axios';
import { Product } from '../../Domain/entities/Product';
import { ProductLocalRepository } from '../../Domain/repositories/ProductLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';

export class ProductLocalRepositoryImpl  implements ProductLocalRepository {
    async save(product: Product): Promise<void> {
        const {save} = LocalStorage();
        await save('product', JSON.stringify(product));
    }
}