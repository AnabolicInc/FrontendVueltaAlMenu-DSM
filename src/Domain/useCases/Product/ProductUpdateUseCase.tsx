import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository";

const { updateProduct } = new ProductRepositoryImpl();

export const ProductUpdateUseCase = async (id: string, name: string, description: string, price: number, quantity: number) => {
    return await updateProduct (id, name, description, price, quantity);
}