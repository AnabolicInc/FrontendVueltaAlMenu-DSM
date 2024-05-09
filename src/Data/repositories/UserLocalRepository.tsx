import { Axios, AxiosError } from 'axios';
import { User } from '../../Domain/entities/User';
import { UserLocalRepository } from '../../Domain/repositories/UserLocalRepository';
import { LocalStorage } from '../sources/local/LocalStorage';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseVerifyTokenApiDelivery } from '../sources/remote/api/models/ResponseVerifyTokenApiDelivery';

export class UserLocalRepositoryImpl  implements UserLocalRepository {
    async save(user: User): Promise<void> {
        const {save} = LocalStorage();
        await save('user', JSON.stringify(user));

    }
    async getUser(): Promise<User>{
        const {getItem} = LocalStorage();
        const data = await getItem('user');
        const user: User = JSON.parse(data as any);
        return user;

    }
    async removeItem(): Promise<void>{
        const {removeItem} = LocalStorage();
        await removeItem('user');
    }

   async verifyToken(token: string): Promise<ResponseVerifyTokenApiDelivery>{

	try {
		const {data} = await ApiDelivery.get<ResponseVerifyTokenApiDelivery>('auth/validate-token', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
			return data;
	
		
	} catch (error) {

		let e = (error as AxiosError);
		const apiError: ResponseVerifyTokenApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
		return Promise.reject(apiError);
		
	}

   }

}