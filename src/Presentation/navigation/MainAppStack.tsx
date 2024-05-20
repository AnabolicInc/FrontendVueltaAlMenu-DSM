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
import ConfirmValidationCodeScreen from '../screens/resetPassword/confirmValidationCode/ConfirmValidationCodeScreen'
import ChangePasswordScreen from '../screens/resetPassword/confirmValidationCode/changePassword/ChangePasswordScreen'
import PaymentScreen from '../screens/client/payment/PaymentScreen'



export type RootStackParamList = {
    ForgotPasswordScreen: undefined;
    ConfirmValidationCodeScreen: {email: string};
    ChangePasswordScreen: {email: string};
    LoginScreen: undefined;
    RegisterScreen: undefined;
    ResetPasswordScreen: undefined;

    ClientBottomTab: undefined;
    AdminBottomTab: undefined;

    CategoryCreateScreen: undefined;
    CategoryListScreen: undefined;
    CategoryUpdateScreen: undefined;

    ProfileUpdateScreen: undefined;
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
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            </>
            //this client
        } else if (user.role_id == 2) {
            //this delivery
            return <>

                {/* <Stack.Screen name="DeliveryBottomTab" component={DeliveryBottomTab} */}
            </>
        } else {
            return <>
                <Stack.Screen name="AdminBottomTab" component={AdminBottomTab} />
                <Stack.Screen name="ProfileUpdateScreen" component={ProfileUpdateScreen} />
                <Stack.Screen name="CategoryListScreen" component={CategoryListScreen} />
                <Stack.Screen name="CategoryCreateScreen" component={CategoryCreateScreen} />
                <Stack.Screen name="CategoryUpdateScreen" component={CategoryUpdateScreen} />
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

