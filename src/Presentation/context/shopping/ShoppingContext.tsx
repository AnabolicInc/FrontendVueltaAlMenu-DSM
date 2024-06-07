import React from "react";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Domain/entities/Product";


export interface ShoppingContextProps {
    shoppingCart: Product[];
    total: number;
    getShoppingCart(): Promise <void>;
    getTotal(): void;
    saveProductShoppingCart(): Promise <void>;
    removeProductShoppingCart(): Promise <void>;
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

    const saveProductShoppingCart = () => {
        return Promise.resolve()
    }

    const removeProductShoppingCart = () => {
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
