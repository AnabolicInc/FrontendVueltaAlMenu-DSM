import { User } from '../entities/User';

export interface UserLocalRepository {
    save(user: User): Promise<void>;
    getUser(): Promise<User>;
    removeItem(): Promise<void>;

}