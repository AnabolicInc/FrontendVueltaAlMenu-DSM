import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {FontAwesome} from '@expo/vector-icons'
import PendingOrderScreen from '../../../screens/admin/order/pending/PendingOrderScreen';
import DispatchedOrderScreen from '../../../screens/admin/order/dispatched/DispatchedOrderScreen';
import InTransitOrderScreen from '../../../screens/admin/order/inTransit/InTransitOrderScreen';
import DeliveredOrderScreen from '../../../screens/admin/order/delivered/DeliveredOrderScreen';


const TopTab = createMaterialTopTabNavigator();

export const AdminTopTab = () => {
  return (
    <TopTab.Navigator 
        screenOptions={{
            tabBarActiveTintColor:'#D17842',
            tabBarInactiveTintColor:'#9B9B9B',
        }}
    >
        <TopTab.Screen name="PENDIENTE"component={PendingOrderScreen}
            options={{
                tabBarStyle:{ backgroundColor:'#0C1013', borderTopWidth:0, paddingBottom:10},
                tabBarIcon:({})=>(
                    <FontAwesome  name="home" size={24} color={'#D17842'} />
            )
            }}    
        />
        <TopTab.Screen name="DESPACHADO" component={DispatchedOrderScreen} 
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10},
            tabBarIcon:({})=>(
                <FontAwesome name="user" size={24} color={'#D17842'} />
            )
            }}
        />
        <TopTab.Screen name="EN CAMINO" component={InTransitOrderScreen}
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10}}}
        />
        <TopTab.Screen name="ENTREGADO" component={DeliveredOrderScreen}
            options={{tabBarStyle:{backgroundColor:'#0C1013',borderTopWidth:0,paddingBottom:10}}}
        />
    </TopTab.Navigator>
  );
}


