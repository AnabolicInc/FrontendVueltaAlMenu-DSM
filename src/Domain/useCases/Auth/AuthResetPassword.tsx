import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

// Calls the forgotPassword method from the AuthRepositoryImpl.
const { forgotPassword } = new AuthRepositoryImpl();

/**
 * Use case for the reset password operation.
 */
export const forgotPasswordAuthUseCase = async (email: string) => {
    // Uses the forgotPassword method from the AuthRepositoryImpl.
    return await forgotPassword(email);
}