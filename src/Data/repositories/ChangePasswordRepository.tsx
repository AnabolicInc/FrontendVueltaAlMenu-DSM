import { AxiosError } from "axios";
import { ChangePasswordRepository } from "../../Domain/repositories/ChangePasswordRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/api/models/ResponseApiDelivery";

export class ChangePasswordRepositoryImpl implements ChangePasswordRepository {
    
    async update(email: string, newPassword: string, session_token: string): Promise<ResponseAPIDelivery> {
        console.log("Antes de ChangePasswordRepository.Update.try");

        // Declarar la variable de prueba

        try {
            // Define la ruta de la solicitud al backend
            const path = `user/new-password`;
            console.log("Actualmente en ChangePasswordRepository.Update.try");

            // Realiza la solicitud al backend utilizando Axios
            const { data } = await ApiDelivery.post<ResponseAPIDelivery>(path, { email, newPassword}, {
                headers: {
                    'Authorization': `Bearer ${session_token}`
                }
            });
            console.log("Actualmente terminó la solicitud");

            // Devuelve los datos recibidos del backend
            return Promise.resolve(data);
        } catch (error) {
            // Maneja cualquier error que ocurra durante la solicitud
            let e = error as AxiosError;
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.reject(apiError);
        }
    }
}
