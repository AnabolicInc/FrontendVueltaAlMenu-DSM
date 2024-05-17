import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { User } from "../entities/User";

import * as ImagePicker from "expo-image-picker";


export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseAPIDelivery>
    register(user: User): Promise<ResponseAPIDelivery>
    forgotPassword(email: string): Promise<ResponseAPIDelivery>
    verifyCode(email: string, code: string): Promise<ResponseAPIDelivery>
}