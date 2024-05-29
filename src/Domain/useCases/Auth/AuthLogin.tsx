import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

// Calls the login method from the AuthRepositoryImpl.
const { login } = new AuthRepositoryImpl();

/**
 * Use case for the login operation.
 */
export const LoginAuthUseCase = async (email: string, password: string) => {
    // Uses the login method from the AuthRepositoryImpl.
    return await login(email, password);
};