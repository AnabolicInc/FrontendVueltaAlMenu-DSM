import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { CategoryProvider } from '../../../context/category/CategoryContext';
import { ClientHomeScreen } from '../../../screens/client';
import { ClientShoppingNavigator } from "./ClientShoppingNavigator";

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
        <CategoryState>
            <Stack.Navigator
                initialRouteName="ClientHomeScreen"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="ClientHomeScreen" component={ClientHomeScreen} />
                <Stack.Screen name="ClientShoppingNavigator" component={ClientShoppingNavigator} />
            </Stack.Navigator>
        </CategoryState>
    );
}

// Create client provider
const CategoryState: React.FC<ContextStateProps> = ({ children }) => {
    return (
        <CategoryProvider>
            {children}
        </CategoryProvider>
    )
}