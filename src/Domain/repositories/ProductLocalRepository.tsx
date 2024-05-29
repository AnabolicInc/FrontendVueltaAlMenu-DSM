import { Product } from '../entities/Product';

/**
 * Interface for ProductLocalRepository to be implemented by the data layer.
 * This interface should be implemented by the data layer to serve as a connection to the local database.
 * The description of the methods can be found in the data layer.
 */
export interface ProductLocalRepository {
    save(product: Product): Promise<void>;
}