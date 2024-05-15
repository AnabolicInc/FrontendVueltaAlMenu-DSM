import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const { forgotPassword } = new AuthRepositoryImpl();

export const forgotPasswordAuthUseCase = async (email: string) => {
    return await forgotPassword(email);
}