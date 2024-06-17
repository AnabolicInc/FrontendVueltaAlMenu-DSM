import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";

// Calls the removeItem method from the UserLocalRepositoryImpl.
const { removeItem } = new UserLocalRepositoryImpl();

/**
 * Use case for the remove operation.
 */
export const RemoveUserUseCase = async () => {
    // Uses the removeItem method from the UserLocalRepositoryImpl.
    return removeItem();
}