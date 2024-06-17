import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository";

const { deleteProduct } = new ProductRepositoryImpl();

export const ProductDeleteUseCase = async (id: string) => {
    return await deleteProduct(id);
}