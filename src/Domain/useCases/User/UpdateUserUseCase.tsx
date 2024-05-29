import { UserUpdateRepositoryImpl } from "../../../Data/repositories/UserUpdateRepository";

// Calls the update method from the UserUpdateRepositoryImpl.
const { update } = new UserUpdateRepositoryImpl();

/**
 * Use case for the update operation.
 */
export const UpdateUserUseCase = async (id: string, name: string, lastName: string, phone: string, session_token: string) => {
    // Uses the update method from the UserUpdateRepositoryImpl.
    return await update (id, name, lastName, phone, session_token);
}