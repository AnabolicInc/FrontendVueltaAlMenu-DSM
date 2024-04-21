import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import AdminHomeScreen from '../screens/admin/AdminHomeScreen'
import DeliveryHomeScreen from '../screens/delivery/DeliveryHomeScreen'
import UserHomeScreen from '../screens/user/UserHomeScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'


export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Admin: undefined;
    Delivery : undefined;
    User : undefined;

    Profile: undefined;
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
            <Stack.Screen name="User" component={UserHomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default MainAppStack;

