import { ProductLocalRepositoryImpl } from "../../../Data/repositories/ProductLocalRepository";
import { Product } from "../../entities/Product";

// Calls the save method from the ProductLocalRepositoryImpl.
const { save } = new ProductLocalRepositoryImpl();

/**
 * Use case for the save operation.
 */
export const SaveProductUseCase = async (product: Product) => {
    // Uses the save method from the ProductLocalRepositoryImpl.
    return await save(product);
}