import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { Product } from "../entities/Product";



export interface ProductRepository {
    getAllProducts(id: string): Promise<ResponseAPIDelivery>;
    createProduct(product: Product): Promise<ResponseAPIDelivery>
    updateProduct(id: string, name: string, description: string, price: number, quantity: number): Promise<ResponseAPIDelivery>
    deleteProduct(id: string): Promise<ResponseAPIDelivery>
}