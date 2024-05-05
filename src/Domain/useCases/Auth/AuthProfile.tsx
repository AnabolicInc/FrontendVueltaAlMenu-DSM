import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entities/User";

const { profile } = new AuthRepositoryImpl();

export const ProfileAuthUseCase = async (user: User) => {
    return await profile(user);
}