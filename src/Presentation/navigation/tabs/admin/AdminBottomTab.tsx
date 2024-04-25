import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../../screens/profile/ProfileScreen';
import SettingScreen from '../../../screens/settings/SettingScreen';
import UserHomeScreen from '../../../screens/user/UserHomeScreen';
import {FontAwesome} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export const AdminBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}
        
    >
        <Tab.Screen name="Home"component={UserHomeScreen}
            options={{tabBarStyle:{backgroundColor:'#0C1013'},
            tabBarIcon:({})=>(
                <FontAwesome name="home" size={24} color={'#D17842'} />
            )
            }}    
        />
        <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{tabBarStyle:{backgroundColor:'#0C1013'},
            tabBarIcon:({})=>(
                <FontAwesome name="user" size={24} color={'#D17842'} />
            )
            }}
        
        />
        <Tab.Screen name="Settings" component={SettingScreen}
            options={{tabBarStyle:{backgroundColor:'#0C1013'},
            tabBarIcon:({})=>(
                <FontAwesome name="cog" size={24} color={'#D17842'} />
            )
            }}
        
        />
    </Tab.Navigator>
  );
}


