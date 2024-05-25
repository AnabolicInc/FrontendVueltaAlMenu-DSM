import { Product } from '../entities/Product';

export interface ProductLocalRepository {
    save(product: Product): Promise<void>;
}