import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { ClientHomeScreen } from '../../../screens/client';
import { ClientShoppingNavigator } from "./ClientShoppingNavigator";
import { ProductProvider } from '../../../context/product/ProductContext';
import { Product } from "../../../../Domain/entities/Product";
import { ProductInfoScreen } from '../../../screens/client/shopping/productInfo/ProductInfoScreen';
import { ShoppingCartProvider } from "../../../context/shopping/ShoppingCartContext";

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type ClientHomeNavigatorParamList = {
    ClientHomeScreen: undefined;
    ProductInfoScreen: { product: Product };
}

const Stack = createStackNavigator<ClientHomeNavigatorParamList>();



export const ClientHomeNavigator = () => {

    return (
        <ShoppingCartState>
            <ProductState>
                <Stack.Navigator
                    initialRouteName="ClientHomeScreen"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="ClientHomeScreen" component={ClientHomeScreen} />
                    <Stack.Screen name="ProductInfoScreen" component={ProductInfoScreen} />
                </Stack.Navigator>
            </ProductState>
        </ShoppingCartState>
    );
}

// Create client provider
const ProductState: React.FC<ContextStateProps> = ({ children }) => {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}

const ShoppingCartState: React.FC<ContextStateProps> = ({ children }) => {
    return (
        <ShoppingCartProvider>
            {children}
        </ShoppingCartProvider>
    )
}