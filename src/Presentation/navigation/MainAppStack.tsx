import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import { AdminBottomTab } from './tabs/admin/AdminBottomTab'

import AdminHomeScreen from '../screens/admin/AdminHomeScreen'
import DeliveryHomeScreen from '../screens/delivery/DeliveryHomeScreen'

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    AdminBottomTab: undefined;
    Admin: undefined; // solo para testing
    Delivery : undefined; // solo para testing
    User : undefined; // solo para testing
    Profile: undefined; // solo para testing
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainAppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ 
                headerShown: false
             }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="AdminBottomTab" component={AdminBottomTab} />
        </Stack.Navigator>
    );
}

export default MainAppStack;

