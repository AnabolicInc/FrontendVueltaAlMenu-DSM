import { Address } from "./Address";

export interface ProductOrder {
    id?: number;
    name: string;
    order_time: string;
    status: boolean;
    address?: Address;
}