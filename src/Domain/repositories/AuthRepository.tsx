import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { User } from "../entities/User";

/**
 * Interface for the AuthRepository to be implemented by the data layer.
 * This interface should be implemented by the data layer to serve as a connection to the API.
 * The description of the methods can be found in the data layer.
 */
export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseAPIDelivery>
    register(user: User): Promise<ResponseAPIDelivery>
    forgotPassword(email: string): Promise<ResponseAPIDelivery>
    verifyCode(email: string, code: string): Promise<ResponseAPIDelivery>
}