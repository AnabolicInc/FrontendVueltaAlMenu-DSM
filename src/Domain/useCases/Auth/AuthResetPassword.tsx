import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const { resetPassword } = new AuthRepositoryImpl();

export const ResetPasswordAuthUseCase = async (email: string) => {
    return await resetPassword(email);
}