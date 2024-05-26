import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";
import { Category } from "../../entities/Category";

// Calls the create method from the CategoryRepositoryImpl.
const { create } = new CategoryRepositoryImpl();

/**
 * Use case for the create operation.
 */
export const CategoryCreateUseCase = async (category: Category) => {
    // Uses the create method from the CategoryRepositoryImpl.
    return await create(category);
}