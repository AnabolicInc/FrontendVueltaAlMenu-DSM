import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { Category } from "../entities/Category";



export interface CategoryRepository {
    create(category: Category): Promise<ResponseAPIDelivery>
    list(): Promise<ResponseAPIDelivery>
}