import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import { AdminBottomTab } from './tabs/admin/AdminBottomTab'
import { CategoryCreateScreen } from '../screens/admin/category/create/CategoryCreateScreen'
import { CategoryListScreen } from '../screens/admin/category/list/CategoryListScreen'

export type RootStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    AdminHomeScreen: undefined;
    AdminBottomTab: undefined;
    AdminTopTab: undefined;
    ProfileScreen: undefined;
    ClientHomeScreen: undefined;
    CategoryCreateScreen: undefined;
    CategoryListScreen: undefined;
    PendingOrderScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainAppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{ 
                headerShown: false
             }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="AdminBottomTab" component={AdminBottomTab} />
            <Stack.Screen name="AdminTopTab" component={AdminBottomTab} />
            <Stack.Screen name="CategoryListScreen" component={CategoryListScreen} />
            <Stack.Screen name="CategoryCreateScreen" component={CategoryCreateScreen} />
        </Stack.Navigator>
    );
}

export default MainAppStack;

