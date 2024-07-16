import React from "react";
import { createContext, useEffect, useState } from "react";
//import { ProductOrder } from "../../../Domain/entities/ProductOrder";
import { ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";

import { ProductCreateUseCase } from "../../../Domain/useCases/Product/ProductCreateUseCase";
import { UpdateFileUseCase } from "../../../Domain/useCases/File/UpdateFileUseCase";
import { SaveProductUseCase } from "../../../Domain/useCases/Product/SaveProductLocal";


export interface ProductOrderContextProps {

}

export const ProductOrderContext = createContext({} as ProductOrderContextProps);

export const ProductOrderProvider = ({ children }: any) => {




    return (
        <ProductOrderContext.Provider
            value={{


            }}
        >
            {children}
        </ProductOrderContext.Provider>
    );
}
