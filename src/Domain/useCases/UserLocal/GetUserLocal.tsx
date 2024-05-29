import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";

// Calls the getUser method from the UserLocalRepositoryImpl.
const {getUser} = new UserLocalRepositoryImpl();

/**
 * Use case for the getUser operation.
 */
export const GetUserUseCase  = async() => {
    // Uses the getUser method from the UserLocalRepositoryImpl.
    return await getUser();
}