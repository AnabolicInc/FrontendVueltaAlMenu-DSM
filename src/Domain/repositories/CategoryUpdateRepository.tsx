import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";

export interface CategoryUpdateRepository {
    update (id: string, name: string, description: string): Promise<ResponseAPIDelivery>
}