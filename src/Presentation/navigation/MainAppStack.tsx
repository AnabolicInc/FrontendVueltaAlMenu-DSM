import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import { CategoryScreen } from '../screens/category/CategoryScreen'



export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Category: undefined;
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
            <Stack.Screen name="Category" component={CategoryScreen} />
        </Stack.Navigator>
    );
}

export default MainAppStack

