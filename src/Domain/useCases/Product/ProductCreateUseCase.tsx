import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository";
import { Product } from "../../entities/Product";

// Calls the create method from the ProductRepositoryImpl.
const { createProduct } = new ProductRepositoryImpl();

/**
 * Use case for the create operation.
 */
export const ProductCreateUseCase = async (product: Product) => {
    // Uses the create method from the ProductRepositoryImpl.
    return await createProduct(product);
}