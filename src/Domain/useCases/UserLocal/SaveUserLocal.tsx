import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

// Calls the save method from the UserLocalRepositoryImpl.
const { save } = new UserLocalRepositoryImpl();

/**
 * Use case for the saveUser operation.
 */
export const SaveUserUseCase = async (user: User) => {
    // Uses the save method from the UserLocalRepositoryImpl.
    return await save(user);
}