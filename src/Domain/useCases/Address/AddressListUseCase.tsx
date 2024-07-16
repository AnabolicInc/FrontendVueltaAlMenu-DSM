import { AddressRepositoryImpl } from "../../../Data/repositories/AddressRepository";
// Calls the list method from the AddressRepositoryImpl.
const { list } = new AddressRepositoryImpl();

/**
 * Use case for the list operation.
 */
export const AddressListUseCase = async () => {
    // Uses the list method from the AddressRepositoryImpl.
    return await list();
}