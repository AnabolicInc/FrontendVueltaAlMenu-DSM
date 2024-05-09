import { User } from "../../../../../Domain/entities/User";

export interface ResponseVerifyTokenApiDelivery {
    success: boolean;
    message: string;
    expired?: boolean;
    error: Error;
    data?: User;
}

export interface Error{
    name: string;
    message: string;
    expiredAt: Date;  
}