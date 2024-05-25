import { CategoryLocalRepositoryImpl } from "../../../Data/repositories/CategoryLocalRepository";
import { Category } from "../../entities/Category";

const { save } = new CategoryLocalRepositoryImpl();

export const SaveCategoryUseCase = async (category: Category) => {
    return await save(category);
}