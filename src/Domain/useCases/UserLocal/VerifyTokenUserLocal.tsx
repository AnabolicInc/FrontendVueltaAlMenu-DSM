import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";


const { verifyToken } = new UserLocalRepositoryImpl();

export const VerifyTokenUserCase = async (token: string) => {
    return await verifyToken(token);
}