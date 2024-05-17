import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";
import { Category } from "../../entities/Category";

const { list } = new CategoryRepositoryImpl();

export const CategoryListUseCase = async () => {
    return await list();
}