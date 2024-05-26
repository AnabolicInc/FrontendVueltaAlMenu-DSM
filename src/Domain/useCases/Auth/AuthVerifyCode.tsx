import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

// Calls the verifyCode method from the AuthRepositoryImpl.
const { verifyCode } = new AuthRepositoryImpl()

/**
 * Use case for the verify code operation.
 */
export const verifyCodeAuthUseCase = async (email: string, code: string) => {
    // Uses the verifyCode method from the AuthRepositoryImpl.
    return await verifyCode(email, code);
}