import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository";
import { Product } from "../../entities/Product";

const { create } = new ProductRepositoryImpl();

export const ProductCreateUseCase = async (product: Product) => {
    return await create(product);
}

export const getAllProducts = async () => {
    return await getAllProducts();
}