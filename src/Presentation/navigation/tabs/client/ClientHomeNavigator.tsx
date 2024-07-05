import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { ClientHomeScreen } from '../../../screens/client';

import { ProductProvider } from '../../../context/product/ProductContext';
import { Product } from "../../../../Domain/entities/Product";
import { ProductInfoScreen } from '../../../screens/client/shopping/productInfo/ProductInfoScreen';
import { ShoppingCartProvider } from "../../../context/shopping/ShoppingCartContext";
import { ShoppingCartScreen } from "../../../screens/client/shopping";
import { AddressCreateScreen } from '../../../screens/client/address/create/AddressCreateScreen';
//import { AddressListScreen } from '../../../screens/client/address/list/AddressListScreen';

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type ClientHomeNavigatorParamList = {
    ClientHomeScreen: undefined;
    ProductInfoScreen: { product: Product };
    ShoppingCartScreen: undefined;
    AddressCreateScreen: undefined;
    AddressListScreen: undefined;
}

const Stack = createStackNavigator<ClientHomeNavigatorParamList>();



export const ClientHomeNavigator = () => {

    return (
    
            <ShoppingCartState>
                <Stack.Navigator
                    initialRouteName="ClientHomeScreen"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="ClientHomeScreen" component={ClientHomeScreen} />
                    <Stack.Screen name="ProductInfoScreen" component={ProductInfoScreen} />
                    <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} />
                    <Stack.Screen name="AddressCreateScreen" component={AddressCreateScreen} />
                    {/* <Stack.Screen name="AddressListScreen" component={AddressListScreen} /> */}
                </Stack.Navigator>
            </ShoppingCartState>
    
    );
}



const ShoppingCartState: React.FC<ContextStateProps> = ({ children }) => {
    return (
        <ShoppingCartProvider>
            {children}
        </ShoppingCartProvider>
    )
}