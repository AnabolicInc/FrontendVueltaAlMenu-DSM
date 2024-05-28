import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository";
import { Product } from "../../entities/Product";

const { createProduct } = new ProductRepositoryImpl();

export const ProductCreateUseCase = async (product: Product) => {
    return await createProduct(product);
}