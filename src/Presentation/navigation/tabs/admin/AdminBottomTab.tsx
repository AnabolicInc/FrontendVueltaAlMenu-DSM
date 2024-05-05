import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from '@expo/vector-icons'


import ProfileScreen from '../../../screens/profile/ProfileScreen';
import AdminHomeScreen from '../../../screens/admin/AdminHomeScreen';
import CategoryListScreen from '../../../screens/admin/category/list/CategoryListScreen';



export type RootBottomTabParamList = {
    AdminHomeScreen: undefined;
    CategoryListScreen: undefined;
    ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator();

export const AdminBottomTab = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'#D17842',
            tabBarInactiveTintColor:'#9B9B9B',
        }}
    >
        <Tab.Screen name="Home"component={AdminHomeScreen}
            options={{
                tabBarStyle:{ backgroundColor:'#0C1013', borderTopWidth:0, paddingBottom:10},
                tabBarIcon:({})=>(
                    <FontAwesome  name="home" size={24} color={'#D17842'} />
            )
            }}    
        />
        <Tab.Screen name="Categorías" component={CategoryListScreen}
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10},
            tabBarIcon:({})=>(
                <FontAwesome name="list" size={24} color="#D17842" />
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


