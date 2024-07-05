import React, { createContext, useEffect, useState } from "react";
import { Address } from "../../../Domain/entities/Address";
import { ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { AddressCreateUseCase } from "../../../Domain/useCases/Address/AddressCreateUseCase";
import { AddressListUseCase } from "../../../Domain/useCases/Address/AddressListUseCase";

interface AddressContextProps {
    addresses: Address[];
    currentAddress: Address | null;
    getAddresses: () => void;
    setCurrentAddress: (address: Address) => void;
    createAddress: (address: Address) => Promise<ResponseAPIDelivery>;
}

export const addressContext = createContext({} as AddressContextProps);

export const AddressProvider = ({ children }: any) => {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [currentAddress, setCurrentAddress] = useState<Address | null>(null);

    useEffect(() => {
        getAddresses();
    }, []);

    const getAddresses = async () => {
        const response = await AddressListUseCase();
        setAddresses(response.data);
    }

    const createAddress = async (address: Address) => {
        const response = await AddressCreateUseCase(address);
        if (response.success) {
            const dataAddress = response.data;
            console.log(dataAddress);
            getAddresses();
        }
        return response;
    }

    return (
        <addressContext.Provider 
            value={{
                addresses,
                currentAddress,
                getAddresses,
                setCurrentAddress,
                createAddress,
            }}
        >
            {children}
        </addressContext.Provider>
    );
}
