import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'


import { ProfileInfoScreen } from '../../../screens/profile/info/ProfileInfoScreen';
import AdminHomeScreen from '../../../screens/admin/AdminHomeScreen';

import { AdminCategoryNavigator } from './AdminCategoryNavigator';





export type RootAdminBottomTabParamList = {
    AdminHomeScreen: undefined;
    AdminCategoryNavigator: undefined;
    ProfileInfoScreen: undefined;
    ProfileUpdateScreen: undefined;
    ChangePasswordScreen: undefined;
    ProductScreen: undefined;
};

const Tab = createBottomTabNavigator<RootAdminBottomTabParamList>();

export const AdminBottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                lazy: true,
                tabBarActiveTintColor: '#D17842',
                tabBarInactiveTintColor: '#9B9B9B',
            }}
        >
            <Tab.Screen
            name="AdminHomeScreen" 
            component={AdminHomeScreen}
                options={{
                    title: 'Home',
                    lazy: true,
                    tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="home" size={24} color={'#D17842'} />
                    )
                }}
            />
            <Tab.Screen
            name="AdminCategoryNavigator"
            component={AdminCategoryNavigator}
                options={{
                    title: 'Categorías', tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                    lazy: true,
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="list" size={24} color="#D17842" />
                    )
                }}
            />
            <Tab.Screen 
            name="ProfileInfoScreen"
            component={ProfileInfoScreen}   
                options={{
                    title: 'Perfil', tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                    lazy: true,
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="user" size={24} color={'#D17842'} />
                    )
                }}
            />
            {/* <Tab.Screen name="ProductScreen" component={ProductScreen}
                options={{
                    title: 'Products',
                    tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="search" size={24} color={'#D17842'} />
                    )
                }}
            /> */}


        </Tab.Navigator>
    );
}


