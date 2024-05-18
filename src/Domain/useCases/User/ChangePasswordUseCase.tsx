import { ChangePasswordRepositoryImpl } from "../../../Data/repositories/ChangePasswordRepository";

const { update } = new ChangePasswordRepositoryImpl();
console.log("Actualmente en ChangePasswordUseCase")

export const ChangePasswordUseCase = async (email: string, newPassword: string, session_token: string) => {
    return await update (email, newPassword, session_token);
}