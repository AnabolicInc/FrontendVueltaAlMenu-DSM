import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { User } from "../entities/User";



export interface AuthRepository {
    register(user: User): Promise<ResponseAPIDelivery>
    profile(user: User): Promise<ResponseAPIDelivery>
}