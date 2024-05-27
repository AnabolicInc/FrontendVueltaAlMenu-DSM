
import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository"


const { getAllProducts } = new ProductRepositoryImpl();

export const ProductListUseCase = async (category_id: string) => {
    return await getAllProducts(category_id);
}