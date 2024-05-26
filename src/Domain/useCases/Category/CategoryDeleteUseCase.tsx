import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

// Calls the delete method from the CategoryRepositoryImpl.
const { delete : deleteCategory } = new CategoryRepositoryImpl();

/**
 * Use case for the delete operation.
 */
export const CategoryDeleteUseCase = async (id: string) => {
    // Uses the delete method from the CategoryRepositoryImpl.
    return await deleteCategory(id);
}