import { ProductLocalRepositoryImpl } from "../../../Data/repositories/ProductLocalRepository";
import { Product } from "../../entities/Product";

const { save } = new ProductLocalRepositoryImpl();

export const SaveProductUseCase = async (product: Product) => {
    return await save(product);
}