import { CategoryUpdateRepositoryImpl } from "../../../Data/repositories/CategoryUpdateRepository";

const { update } = new CategoryUpdateRepositoryImpl();

export const UpdateCategoryUseCase = async (id: string, name: string, description: string) => {
    return await update (id, name, description);

}