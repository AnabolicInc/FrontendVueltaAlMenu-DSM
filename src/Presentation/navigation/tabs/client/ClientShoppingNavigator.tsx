import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProductInfoScreen, ShoppingCartScreen } from '../../../screens/client/shopping';
import { ProductProvider } from '../../../context/product/ProductContext';
import { Product } from "../../../../Domain/entities/Product";

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
        <ProductState>
            <Stack.Navigator
                initialRouteName="ProductInfoScreen"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="ProductInfoScreen" component={ProductInfoScreen} />
                <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} />

            </Stack.Navigator>
        </ProductState>
    );
}

const ProductState: React.FC<ContextStateProps> = ({ children }) => {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}