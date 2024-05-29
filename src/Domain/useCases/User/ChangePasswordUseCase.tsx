import { ChangePasswordRepositoryImpl } from "../../../Data/repositories/ChangePasswordRepository";

// Calls the update method from the ChangePasswordRepositoryImpl.
const { update } = new ChangePasswordRepositoryImpl();

/**
 * Use case for the update operation.
 */
export const ChangePasswordUseCase = async (email: string, newPassword: string, session_token: string) => {
    // Uses the update method from the ChangePasswordRepositoryImpl.
    return await update (email, newPassword, session_token);
}