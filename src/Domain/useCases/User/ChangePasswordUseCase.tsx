import { ChangePasswordRepositoryImpl } from "../../../Data/repositories/ChangePasswordRepository";

const { update } = new ChangePasswordRepositoryImpl();

export const ChangePasswordUseCase = async (newPassword: string, session_token: string) => {
    return await update (newPassword, session_token);

    
}