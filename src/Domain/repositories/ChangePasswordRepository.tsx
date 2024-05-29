import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";

/**
 * Interface for ChangePasswordRepository to be implemented by the Data layer.
 * This interface should be implemented by the data layer to serve as a connection to the API.
 * The description of the methods can be found in the data layer.
 */
export interface ChangePasswordRepository {
    update (email: string, newPassword: string, session_token: string): Promise<ResponseAPIDelivery>
}