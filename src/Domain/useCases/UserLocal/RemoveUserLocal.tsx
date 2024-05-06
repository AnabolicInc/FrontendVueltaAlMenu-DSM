import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";

const { removeItem } = new UserLocalRepositoryImpl();

export const RemoveUserUseCase = async () => {
    return removeItem();
}