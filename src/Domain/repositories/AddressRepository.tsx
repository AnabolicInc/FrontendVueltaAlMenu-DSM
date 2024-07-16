import { ResponseAPIDelivery } from "../../Data/sources/remote/api/models/ResponseApiDelivery";
import { Address } from "../entities/Address";

/**
 * Interface for AddressRepository to be implemented by the Data layer.
 * This interface should be implemented by the data layer to serve as a connection to the API.
 * The description of the methods can be found in the data layer.
 */
export interface AddressRepository {
    create(address: Address): Promise<ResponseAPIDelivery>
    list(): Promise<ResponseAPIDelivery>
}