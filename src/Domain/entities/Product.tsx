import { ProductImage } from './ProductImage' ;

export interface Product {
    id?: string;
    name: string;
    images: ProductImage[];
    description: string;
    price: number;
    category_id: string;
    quantity: number;
}