import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Domain/entities/Product";
import { ProductContext } from "../product/ProductContext";
import { get } from "http";



export interface ShoppingContextProps {
    shoppingCart: Product[];
    total: number;
    getShoppingCart(): Promise <void>;
    getTotal(): void;
    saveProductShoppingCart(product: Product): Promise <void>;
    removeProductShoppingCart(product: Product): Promise <void>;
}


export const ShoppingCartContext = createContext({} as ShoppingContextProps);

export const ShoppingCartProvider = ({ children }: any) => {


    const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);
    


    const getShoppingCart = async () => {
        return Promise.resolve()
    }

    const getTotal = async () => {
         
    }

    const saveProductShoppingCart = ( product: Product ) => {
        console.log('Product saved from shopping cart');
        const index = shoppingCart.findIndex((p) => p.id === product.id)
        if (index === -1) {
            shoppingCart.push(product);
        }else{
            shoppingCart[index].quantity += product.quantity;
        }


        return Promise.resolve()
    }

    const removeProductShoppingCart = ( product: Product ) => {
        return Promise.resolve();
    }


    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCart,
                total, 
                getTotal,
                getShoppingCart,
                saveProductShoppingCart,
                removeProductShoppingCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}
