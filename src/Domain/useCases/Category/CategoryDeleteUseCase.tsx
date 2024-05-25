
import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

const { delete : deleteCategory } = new CategoryRepositoryImpl();

export const CategoryDeleteUseCase = async (id: string) => {
    return await deleteCategory(id);
}