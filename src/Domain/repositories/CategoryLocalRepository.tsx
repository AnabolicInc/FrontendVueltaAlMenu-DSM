import { Category } from '../entities/Category';

/**
 * Interface for CategoryLocalRepository to be implemented by the data layer.
 * This interface should be implemented by the data layer to serve as a connection to the local database.
 * The description of the methods can be found in the data layer.
 */
export interface CategoryLocalRepository {
    save(category: Category): Promise<void>;
}