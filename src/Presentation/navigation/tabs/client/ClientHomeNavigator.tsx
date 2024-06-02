import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { CategoryProvider } from '../../../context/category/CategoryContext';
import { ClientHomeScreen } from '../../../screens/client';
import { ClientShoppingNavigator } from "./ClientShoppingNavigator";
import { ProductProvider } from '../../../context/product/ProductContext';

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type ClientHomeNavigatorParamList = {
    ClientHomeScreen: undefined;
    ClientShoppingNavigator: undefined;
}

const Stack = createStackNavigator<ClientHomeNavigatorParamList>();



export const ClientHomeNavigator = () => {

    return (
        <ProductState>
            <Stack.Navigator
                initialRouteName="ClientHomeScreen"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="ClientHomeScreen" component={ClientHomeScreen} />
                <Stack.Screen name="ClientShoppingNavigator" component={ClientShoppingNavigator} />
            </Stack.Navigator>
        </ProductState>
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