import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

// Calls the update method from the CategoryRepositoryImpl.
const { update } = new CategoryRepositoryImpl();

/**
 * Use case for the update operation.
 */
export const CategoryUpdateUseCase = async (id: string, name: string, description: string) => {
    // Uses the update method from the CategoryRepositoryImpl.
    return await update (id, name, description);
}