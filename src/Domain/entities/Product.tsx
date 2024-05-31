import { Image } from './Image' ;

export interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    category_id: string;
    images?: Image[];
    quantity: number;
}