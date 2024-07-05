import { AddressRepositoryImpl } from "../../../Data/repositories/AddressRepository";
import { Address } from "../../entities/Address";

// Calls the create method from the AddressRepositoryImpl.
const { create } = new AddressRepositoryImpl();

/**
 * Use case for the create operation.
 */
export const AddressCreateUseCase = async (address: Address) => {
    // Uses the create method from the AddressRepositoryImpl.
    return await create(address);
}