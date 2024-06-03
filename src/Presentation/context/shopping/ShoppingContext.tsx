import React from "react";
import { createContext, useEffect, useState } from "react";


export interface ShoppingContextProps {
    shoppingCart: any;
    total: any;
    removeProductShoppingCart: any;
}

export const ShoppingContext = createContext({} as ShoppingContextProps);

export const ShoppingProvider = ({ children }: any) => {
    
    const shoppingCart = () => {

    }

    const total = () => {
        
    }

    const removeProductShoppingCart = () => {
        
    }
    return (
        <ShoppingContext.Provider
            value={{
                shoppingCart,
                total, 
                removeProductShoppingCart
            }}
        >
            {children}
        </ShoppingContext.Provider>
    );
}
