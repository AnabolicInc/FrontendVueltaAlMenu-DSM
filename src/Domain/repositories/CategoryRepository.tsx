import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { Category } from "../entities/Category";

/**
 * Interface for CategoryRepository to be implemented by the Data layer.
 * This interface should be implemented by the data layer to serve as a connection to the API.
 * The description of the methods can be found in the data layer.
 */
export interface CategoryRepository {
    create(category: Category): Promise<ResponseAPIDelivery>
    list(): Promise<ResponseAPIDelivery>
    update (id: string, name: string, description: string): Promise<ResponseAPIDelivery>
    delete(id: string): Promise<ResponseAPIDelivery>
}