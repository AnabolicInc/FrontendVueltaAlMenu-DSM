import { createStackNavigator } from "@react-navigation/stack";
import { ProductProvider } from "../../../context/product/ProductContext";
import {CreateNewProductScreen, ProductScreen, ProductUpdateScreen} from '../../../screens/admin/product';
import React, { ReactElement } from "react";
import { Product } from "../../../../Domain/entities/Product";

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type AdminProductNavigatorParamList = {
    CreateNewProductScreen: undefined;
    ProductScreen: undefined;
    ProductUpdateScreen: {productItem: Product};
}

const Stack = createStackNavigator<AdminProductNavigatorParamList>();

export const AdminProductNavigator = () => {
    
    return (
        <ProductState>
            <Stack.Navigator 
        initialRouteName="ProductScreen"
        screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="CreateNewProductScreen" component={CreateNewProductScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="ProductUpdateScreen" component={ProductUpdateScreen} />
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