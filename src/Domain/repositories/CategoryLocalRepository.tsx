import { Category } from '../entities/Category';

export interface CategoryLocalRepository {
    save(category: Category): Promise<void>;
    // getUser(): Promise<Category>;
    // removeItem(): Promise<void>;

}