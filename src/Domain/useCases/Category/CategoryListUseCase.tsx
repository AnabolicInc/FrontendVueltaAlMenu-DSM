import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

// Calls the list method from the CategoryRepositoryImpl.
const { list } = new CategoryRepositoryImpl();

/**
 * Use case for the list operation.
 */
export const CategoryListUseCase = async () => {
    // Uses the list method from the CategoryRepositoryImpl.
    return await list();
}