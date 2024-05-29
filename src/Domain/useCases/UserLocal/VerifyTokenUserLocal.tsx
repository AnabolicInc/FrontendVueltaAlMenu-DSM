import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";

// Calls the verifyToken method from the UserLocalRepositoryImpl.
const { verifyToken } = new UserLocalRepositoryImpl();

/**
 * Use case for the verifyToken operation.
 */
export const VerifyTokenUserCase = async (token: string) => {
    // Uses the verifyToken method from the UserLocalRepositoryImpl.
    return await verifyToken(token);
}