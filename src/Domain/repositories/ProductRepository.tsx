import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { Product } from "../entities/Product";



export interface ProductRepository {
    create(pruduct: Product): Promise<ResponseAPIDelivery>
}