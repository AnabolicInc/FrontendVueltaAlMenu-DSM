
import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository"
 


const { listProducts } = new ProductRepositoryImpl();

export const ProductListUseCase = async () => {
    return await listProducts();
}