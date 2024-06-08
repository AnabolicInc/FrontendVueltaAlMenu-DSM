import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'


//import ProfileScreen from '../../../screens/profile/ProfileScreen';
import ShoppingCartScreen from '../../../../Presentation/screens/client/shopping/ShoppingCartScreen';
import { CategoryListScreen } from '../../../screens/admin/category';
import { ProfileInfoScreen } from '../../../screens/profile/info/ProfileInfoScreen';
import { ReactElement } from 'react';
import { ProductProvider } from '../../../context/product/ProductContext';
import { ClientHomeNavigator } from './ClientHomeNavigator';

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type RootClientBottomTabParamList = {
    ShoppingCartScreen: undefined;
    ProfileInfoScreen: undefined;
    ProfileUpdateScreen: undefined;
    ChangePasswordScreen: undefined;
    PaymentScreen: undefined;
    CategoryListScreen: undefined;
    ClientShoppingNavigator: undefined;
    ClientHomeNavigator: undefined;
};

const Tab = createBottomTabNavigator<RootClientBottomTabParamList>();

export const ClientBottomTab = () => {
    return (
        <ProductState>

            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#D17842',
                    tabBarInactiveTintColor: '#9B9B9B',
                }}
            >
                <Tab.Screen name="ClientHomeNavigator" component={ClientHomeNavigator}
                    options={{
                        title: 'Home',
                        tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                        tabBarIcon: ({ }) => (
                            <FontAwesome name="home" size={24} color={'#D17842'} />
                        )
                    }}
                />
                <Tab.Screen name="ShoppingCartScreen" component={ShoppingCartScreen}
                    options={{
                        title: 'Carrito', tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                        tabBarIcon: ({ }) => (
                            <FontAwesome name="shopping-cart" size={24} color="#D17842" />
                        )
                    }}
                />
                <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen}
                    options={{
                        title: 'Perfil', tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, borderTopColor: '#0C1013', paddingTop: 10 },
                        tabBarIcon: ({ }) => (
                            <FontAwesome name="user" size={24} color={'#D17842'} />
                        )
                    }}
                />


            </Tab.Navigator>

        </ProductState>
    );
}

const ProductState: React.FC<ContextStateProps> = ({ children }) => {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}
