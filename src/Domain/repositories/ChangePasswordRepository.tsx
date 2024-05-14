import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";

export interface ChangePasswordRepository {
    update (newPassword: string, session_token: string): Promise<ResponseAPIDelivery>
}