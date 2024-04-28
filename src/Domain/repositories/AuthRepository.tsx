import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { User } from "../entities/User";

//import * as ImagePicker from "expo-image-picker";


export interface AuthRepository {
    register(user: User): Promise<ResponseAPIDelivery>
}