import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AdminTopTab } from './tabs/admin/AdminTopTab'
import { AdminBottomTab } from './tabs/admin/AdminBottomTab'
import { ClientBottomTab } from './tabs/client/ClientBottomTab'

import { AuthContext } from '../context/auth/AuthContext'

import { RegisterScreen } from '../screens/register/RegisterScreen'
import LoginScreen from '../screens/login/LoginScreen'
import LoadingScreen from '../screens/miscellaneous/LoadingScreen'
import { CategoryCreateScreen } from '../screens/admin/category/create/CategoryCreateScreen'
import { CategoryListScreen } from '../screens/admin/category/list/CategoryListScreen'
import { CategoryUpdateScreen } from '../screens/admin/category/update/CategoryUpdateScreen'
import ForgotPasswordScreen from '../screens/resetPassword/ForgotPasswordScreen'
import ProfileUpdateScreen from '../screens/profile/update/ProfileUpdateScreen'

import ChangePasswordScreen from '../screens/profile/changePassword/ChangePasswordScreen'

import ConfirmValidationCodeScreen from '../screens/resetPassword/confirmValidationCode/ConfirmValidationCodeScreen'
import ChangeForgotPasswordScreen from '../screens/resetPassword/confirmValidationCode/changeForgotPassword/ChangeForgotPasswordScreen'
import PaymentScreen from '../screens/client/payment/PaymentScreen'
import { Category } from "../../Domain/entities/Category";




export type RootStackParamList = {
    ForgotPasswordScreen: undefined;
    ConfirmValidationCodeScreen: {email: string};
    ChangeForgotPasswordScreen: {email: string};
    LoginScreen: undefined;
    RegisterScreen: undefined;
    ResetPasswordScreen: undefined;

    ClientBottomTab: undefined;
    AdminBottomTab: undefined;

    ProfileUpdateScreen: undefined;

    ChangePasswordScreen: undefined;

    PaymentScreen: undefined;



};

const Stack = createStackNavigator<RootStackParamList>();

export const MainAppStack = () => {

    const { user, status } = useContext(AuthContext);


    if (status === 'checking') return <LoadingScreen />;

    const renderRoleScreen = () => {
        if (user.role_id == 3) {
            return <>
                <Stack.Screen name="ClientBottomTab" component={ClientBottomTab} />
                <Stack.Screen name="ProfileUpdateScreen" component={ProfileUpdateScreen} />

                <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />

                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />

            </>
            //this client
        } else if (user.role_id == 2) {
            //this delivery
            return <>

                {/* <Stack.Screen name="DeliveryBottomTab" component={DeliveryBottomTab} */}
            </>
        } else if (user.role_id == 1){
            return <>
                <Stack.Screen name="AdminBottomTab" component={AdminBottomTab} />
                <Stack.Screen name="ProfileUpdateScreen" component={ProfileUpdateScreen} />
                <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            </>

        }


    };


    return (
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            {status !== 'authenticated'
                ? (

                    <>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                        <Stack.Screen name="ResetPasswordScreen" component={ForgotPasswordScreen} />
                        <Stack.Screen name="ConfirmValidationCodeScreen" component={ConfirmValidationCodeScreen} />
                        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
                    </>
                ) : renderRoleScreen()
            }






        </Stack.Navigator>
    );
}

export default MainAppStack;

