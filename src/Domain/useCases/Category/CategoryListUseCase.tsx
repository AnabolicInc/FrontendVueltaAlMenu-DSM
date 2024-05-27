import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

const { list } = new CategoryRepositoryImpl();

export const CategoryListUseCase = async () => {
    return await list();
}