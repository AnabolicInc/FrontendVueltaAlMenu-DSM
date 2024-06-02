import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CategoryProvider } from '../../../context/category/CategoryContext';
import { ClientBottomTab } from "./ClientBottomTab";
import { ProductInfoScreen } from '../../../screens/client/shopping';
import { ProductProvider } from '../../../context/product/ProductContext';
import { Product } from "../../../../Domain/entities/Product";

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type ClientShoppingNavigatorParamList = {

    ProductInfoScreen: undefined;

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