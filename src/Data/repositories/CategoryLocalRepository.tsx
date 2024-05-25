import { Axios, AxiosError } from 'axios';
import { Category } from '../../Domain/entities/Category';
import { CategoryLocalRepository } from '../../Domain/repositories/CategoryLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseVerifyTokenApiDelivery } from '../sources/remote/api/models/ResponseVerifyTokenApiDelivery';

export class CategoryLocalRepositoryImpl  implements CategoryLocalRepository {
    async save(category: Category): Promise<void> {
        const {save} = LocalStorage();
        await save('category', JSON.stringify(category));

    }

 

}