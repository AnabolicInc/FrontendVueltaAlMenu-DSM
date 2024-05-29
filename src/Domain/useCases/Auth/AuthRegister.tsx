import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entities/User";

// Calls the register method from the AuthRepositoryImpl.
const { register } = new AuthRepositoryImpl();

/**
 * Use case for the register operation.
 */
export const RegisterAuthUseCase = async (user: User) => {
    // Uses the register method from the AuthRepositoryImpl.
    return await register(user);
}