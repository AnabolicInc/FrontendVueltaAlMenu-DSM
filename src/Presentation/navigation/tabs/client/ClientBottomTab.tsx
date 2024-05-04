import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons'


import ProfileScreen from '../../../screens/profile/ProfileScreen';
import ClientHomeScreen from '../../../screens/client/ClientHomeScreen';
import ShoppingCartScreen from '../../../screens/shopping/ShoppingCartScreen';

const Tab = createBottomTabNavigator();

export const ClientBottomTab = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'#D17842',
            tabBarInactiveTintColor:'#9B9B9B',
        }}
    >
        <Tab.Screen name="Home"component={ClientHomeScreen}
            options={{
                tabBarStyle:{ backgroundColor:'#0C1013', borderTopWidth:0, paddingBottom:10},
                tabBarIcon:({})=>(
                    <FontAwesome  name="home" size={24} color={'#D17842'} />
            )
            }}    
        />
        <Tab.Screen name="Carrito" component={ShoppingCartScreen}
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10},
            tabBarIcon:({})=>(
                <FontAwesome name="shopping-cart" size={24} color="#D17842" />
            )
            }}
        />
        <Tab.Screen name="Perfil" component={ProfileScreen} 
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10},
            tabBarIcon:({})=>(
                <FontAwesome name="user" size={24} color={'#D17842'} />
            )
            }}
        />

        
    </Tab.Navigator>
  );
}


