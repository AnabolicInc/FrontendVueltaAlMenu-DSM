import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import { AdminBottomTab } from './tabs/admin/AdminBottomTab'
import { AdminTopTab } from './tabs/admin/AdminTopTab'
import { AuthContext } from '../context/auth/AuthContext'
import LoadingScreen from '../screens/miscellaneous/LoadingScreen'


export type RootStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    AdminHomeScreen: undefined;
    AdminBottomTab: undefined;
    AdminTopTab: undefined;
    ProfileScreen: undefined;
    ClientHomeScreen: undefined;
    CategoryScreen: undefined;
    PendingOrderScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainAppStack = () => {

    const { user,status } = useContext(AuthContext);

    //commented for future purposes
    //if(status === 'checking') return <LoadingScreen/>;

    const renderRoleScreen = () => {
        if (user.role_id ==3) {
        //this client
        } else if (user.role_id ==2) {
        //this delivery
        } else {
            return <>
                {/*Commented for future purposes*/}
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
            {/*Commented for future purposes
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
        </Stack.Navigator>
    );
}

export default MainAppStack;

