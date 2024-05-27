import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

const { update } = new CategoryRepositoryImpl();

export const CategoryUpdateUseCase = async (id: string, name: string, description: string) => {
    return await update (id, name, description);
}