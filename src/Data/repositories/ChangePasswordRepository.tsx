import { AxiosError } from "axios";
import { ChangePasswordRepository } from "../../Domain/repositories/ChangePasswordRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";



export class ChangePasswordRepositoryImpl implements ChangePasswordRepository {
    async update (newPassword: string, session: string): Promise<ResponseAPIDelivery> {
        //TODO
        return null;
    }
}