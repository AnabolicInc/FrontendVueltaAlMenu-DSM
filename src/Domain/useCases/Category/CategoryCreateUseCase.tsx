import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";
import { Category } from "../../entities/Category";

const { create } = new CategoryRepositoryImpl();

export const CategoryCreateUseCase = async (category: Category) => {
    return await create(category);
}