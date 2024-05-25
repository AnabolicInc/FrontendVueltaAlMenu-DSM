import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'


import { ProfileInfoScreen } from '../../../screens/profile/info/ProfileInfoScreen';
import AdminHomeScreen from '../../../screens/admin/AdminHomeScreen';
import CategoryListScreen from '../../../screens/admin/category/list/CategoryListScreen';
import ProductScreen from '../../../screens/admin/product/list/ProductScreen';





export type RootAdminBottomTabParamList = {
    AdminHomeScreen: undefined;
    CategoryListScreen: undefined;
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
                tabBarActiveTintColor: '#D17842',
                tabBarInactiveTintColor: '#9B9B9B',
            }}
        >
            <Tab.Screen name="AdminHomeScreen" component={AdminHomeScreen}
                options={{
                    title: 'Home',
                    tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="home" size={24} color={'#D17842'} />
                    )
                }}
            />
            <Tab.Screen name="CategoryListScreen" component={CategoryListScreen}
                options={{
                    title: 'Categorías', tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="list" size={24} color="#D17842" />
                    )
                }}
            />
            <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen}
                options={{
                    title: 'Perfil', tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="user" size={24} color={'#D17842'} />
                    )
                }}
            />
            <Tab.Screen name="ProductScreen" component={ProductScreen}
                options={{
                    title: 'Products',
                    tabBarStyle: { backgroundColor: '#0C1013', borderTopWidth: 0, paddingBottom: 10 },
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="search" size={24} color={'#D17842'} />
                    )
                }}
            />


        </Tab.Navigator>
    );
}


