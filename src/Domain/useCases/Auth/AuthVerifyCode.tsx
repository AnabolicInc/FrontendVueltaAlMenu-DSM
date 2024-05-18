import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const { verifyCode } = new AuthRepositoryImpl()

export const verifyCodeAuthUseCase = async (email: string, code: string) => {
    return await verifyCode(email, code);
}
