import { ChangePasswordRepositoryImpl } from "../../../Data/repositories/ChangePasswordRepository";

const { update } = new ChangePasswordRepositoryImpl();

export const ChangePasswordUseCase = async (email: string, newPassword: string, session_token: string) => {
    return await update (email, newPassword, session_token);
}