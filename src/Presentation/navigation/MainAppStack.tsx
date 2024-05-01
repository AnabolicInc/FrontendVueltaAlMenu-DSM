import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import { AdminBottomTab } from './tabs/admin/AdminBottomTab'

import { AdminTopTab } from './tabs/admin/AdminTopTab'
import { AuthContext } from '../context/auth/AuthContext'
import LoadingScreen from '../screens/miscellaneous/LoadingScreen'


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

    const { user,status } = useContext(AuthContext);

    /*IMPORTANT (17:01 01/05/2024): commented for future purposes, do not delete */
    //if(status === 'checking') return <LoadingScreen/>;

    const renderRoleScreen = () => {
        if (user.role_id ==3) {
        //this client
        } else if (user.role_id ==2) {
        //this delivery
        } else {
            return <>
                {/*IMPORTANT (17:01 01/05/2024): commented for future purposes, do not delete*/}
                {/*<Stack.Screen name="AdminBottomTab" component={AdminBottomTab} /> */}
            </>

        }


    };
    

    return (
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{ 
                headerShown: false
             }}
        >
            {/*IMPORTANT (17:01 01/05/2024): commented for future purposes, do not delete
            {status !== 'authenticated' 
                ? (

                    <>
                        
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                        
                    </>
                ):renderRoleScreen()
            }
            */}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="AdminBottomTab" component={AdminBottomTab} />
            <Stack.Screen name="CategoryListScreen" component={CategoryListScreen} />
            <Stack.Screen name="CategoryCreateScreen" component={CategoryCreateScreen} />
        </Stack.Navigator>
    );
}

export default MainAppStack;

