import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { Product } from "../entities/Product";

/**
 * Interface for the ProductRepository to be implemented by the data layer.
 * This interface should be implemented by the data layer to serve as a connection to the API.
 * The description of the methods can be found in the data layer.
 */
export interface ProductRepository {
    getAllProducts(id: string): Promise<ResponseAPIDelivery>;
    createProduct(product: Product): Promise<ResponseAPIDelivery>
    updateProduct(id: string, name: string, description: string, price: number, quantity: number): Promise<ResponseAPIDelivery>
    deleteProduct(id: string): Promise<ResponseAPIDelivery>
}