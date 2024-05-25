export interface Product {
    id?: string;
    name: string;
    price: number;
    description: string;
    quantity: number,
    image?: string;
    //add more params according the Database changes
}