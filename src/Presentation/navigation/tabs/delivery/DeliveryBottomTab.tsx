import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from '@expo/vector-icons'
//import ProfileScreen from '../../../screens/profile/ProfileScreen';
import ShoppingCartScreen from '../../../screens/client/shopping/ShoppingCartScreen';
import { ProfileInfoScreen } from '../../../screens/profile/info/ProfileInfoScreen';
import DeliveryHomeScreen from '../../../screens/delivery/DeliveryHomeScreen';



export type RootBottomTabParamList = {
    ClientHomeScreen: undefined;
    ShoppingCartScreen: undefined;
    ProfileInfoScreen: undefined;
};

const Tab = createBottomTabNavigator();

export const DeliveryBottomTab = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'#D17842',
            tabBarInactiveTintColor:'#9B9B9B',
        }}
    >
        <Tab.Screen name="Home"component={DeliveryHomeScreen}
            options={{
                tabBarStyle:{ backgroundColor:'#0C1013', borderTopWidth:0, paddingBottom:10},
                tabBarIcon:({})=>(
                    <FontAwesome  name="home" size={24} color={'#D17842'} />
            )
            }}    
        />
        <Tab.Screen name="Perfil" component={ProfileInfoScreen} 
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0, borderTopColor: '#0C1013', paddingTop:10},
            tabBarIcon:({})=>(
                <FontAwesome name="user" size={24} color={'#D17842'} />
            )
            }}
        />

        
    </Tab.Navigator>
  );
}


