
import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository"


const { getAllProductsByCategory } = new ProductRepositoryImpl();

export const ProductListByCategoryUseCase = async (category_id: string) => {
    return await getAllProductsByCategory(category_id);
}