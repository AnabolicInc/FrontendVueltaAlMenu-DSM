import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";

console.log("Actualmente en ChangePasswordRepositoryINTERFACE")

export interface ChangePasswordRepository {
    update (email: string, newPassword: string, session_token: string): Promise<ResponseAPIDelivery>
}