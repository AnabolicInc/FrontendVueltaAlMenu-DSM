import { CategoryLocalRepositoryImpl } from "../../../Data/repositories/CategoryLocalRepository";
import { Category } from "../../entities/Category";

// Calls the save method from the CategoryLocalRepositoryImpl.
const { save } = new CategoryLocalRepositoryImpl();

/**
 * Use case for the save operation.
 */
export const SaveCategoryUseCase = async (category: Category) => {
    // Uses the save method from the CategoryLocalRepositoryImpl.
    return await save(category);
}