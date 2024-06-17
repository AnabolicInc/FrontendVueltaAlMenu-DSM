
import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository"


const { getAllProducts } = new ProductRepositoryImpl();

export const ProductListUseCase = async () => {
    return await getAllProducts();
}