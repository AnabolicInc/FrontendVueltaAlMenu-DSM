import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import { AdminBottomTab } from './tabs/admin/AdminBottomTab'


export type RootStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    AdminHomeScreen: undefined;
    AdminBottomTab: undefined;
    ProfileScreen: undefined;
    Client: undefined;
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
        </Stack.Navigator>
    );
}

export default MainAppStack;

