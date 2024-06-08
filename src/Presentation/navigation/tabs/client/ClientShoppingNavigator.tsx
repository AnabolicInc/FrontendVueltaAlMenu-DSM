import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProductInfoScreen, ShoppingCartScreen } from '../../../screens/client/shopping';
import { ProductProvider } from '../../../context/product/ProductContext';
import { Product } from "../../../../Domain/entities/Product";
import { ShoppingCartProvider } from "../../../context/shopping/ShoppingCartContext";

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type ClientShoppingNavigatorParamList = {

    ProductInfoScreen: { product: Product };
    ShoppingCartScreen: undefined;

}

const Stack = createStackNavigator<ClientShoppingNavigatorParamList>();


export const ClientShoppingNavigator = () => {

    return (
        <ShoppingCartState>

            <ProductState>
                <Stack.Navigator
                    initialRouteName="ProductInfoScreen"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="ProductInfoScreen" component={ProductInfoScreen} />
                    <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} />

                </Stack.Navigator>
            </ProductState>
        </ShoppingCartState>
    );
}

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