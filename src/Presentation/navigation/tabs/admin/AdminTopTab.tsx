import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {FontAwesome} from '@expo/vector-icons'
import PendingOrderScreen from '../../../screens/admin/order/pending/PendingOrderScreen';
import DispatchedOrderScreen from '../../../screens/admin/order/dispatched/DispatchedOrderScreen';
import InTransitOrderScreen from '../../../screens/admin/order/inTransit/InTransitOrderScreen';
import DeliveredOrderScreen from '../../../screens/admin/order/delivered/DeliveredOrderScreen';


const Tab = createMaterialTopTabNavigator();

export const AdminBottomTab = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor:'#D17842',
            tabBarInactiveTintColor:'#9B9B9B',
        }}
    >
        <Tab.Screen name="PENDIENTE"component={PendingOrderScreen}
            options={{
                tabBarStyle:{ backgroundColor:'#0C1013', borderTopWidth:0, paddingBottom:10},
                tabBarIcon:({})=>(
                    <FontAwesome  name="home" size={24} color={'#D17842'} />
            )
            }}    
        />
        <Tab.Screen name="DESPACHADO" component={DispatchedOrderScreen} 
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10},
            tabBarIcon:({})=>(
                <FontAwesome name="user" size={24} color={'#D17842'} />
            )
            }}
        />
        <Tab.Screen name="EN CAMINO" component={InTransitOrderScreen}
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10}}}
        />
        <Tab.Screen name="ENTREGADO" component={DeliveredOrderScreen}
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10}}}
        />
    </Tab.Navigator>
  );
}


