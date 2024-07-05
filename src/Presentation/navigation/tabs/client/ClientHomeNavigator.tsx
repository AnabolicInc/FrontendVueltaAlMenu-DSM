import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { ClientHomeScreen } from '../../../screens/client';

import { ProductProvider } from '../../../context/product/ProductContext';
import { Product } from "../../../../Domain/entities/Product";
import { ProductInfoScreen } from '../../../screens/client/shopping/productInfo/ProductInfoScreen';
import { ShoppingCartProvider } from "../../../context/shopping/ShoppingCartContext";
import { ShoppingCartScreen } from "../../../screens/client/shopping";

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type ClientHomeNavigatorParamList = {
    ShoppingCartScreen: undefined;
    ClientHomeScreen: undefined;
    ProductInfoScreen: { product: Product };
    PaymentScreen: { paymentMethod: string; total: number }; 
};


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