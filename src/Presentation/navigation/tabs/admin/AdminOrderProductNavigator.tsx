import { createStackNavigator } from "@react-navigation/stack";
import { ProductProvider } from "../../../context/product/ProductContext";
import React, { ReactElement } from "react";
import { DeliveredOrderScreen } from "../../../screens/admin/order/delivered/DeliveredOrderScreen";
import { DispatchedOrderScreen } from "../../../screens/admin/order/dispatched/DispatchedOrderScreen";
import { InTransitOrderScreen } from "../../../screens/admin/order/inTransit/InTransitOrderScreen";
import { PendingOrderScreen } from "../../../screens/admin/order/pending/PendingOrderScreen";
import { ProductOrder } from "../../../../Domain/entities/ProductOrder";
import { ProductOrderProvider } from "../../../context/order/OrderContext";

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type AdminProductOrderNavigatorParamList = {
    AdminHomeScreen: undefined;
    DeliveredOrderScreen: undefined;
    DispatchedOrderScreen: undefined;
    InTransitOrderScreen: undefined;
    PendingOrderScreen: undefined;
    
}

const Stack = createStackNavigator<AdminProductOrderNavigatorParamList>();

export const AdminProductOrderNavigator = () => {

    return (
        <ProductOrderState>
            <Stack.Navigator
                initialRouteName="AdminHomeScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="DeliveredOrderScreen" component={DeliveredOrderScreen} />
                <Stack.Screen name="DispatchedOrderScreen" component={DispatchedOrderScreen} />
                <Stack.Screen name="InTransitOrderScreen" component={InTransitOrderScreen} />
                <Stack.Screen name="PendingOrderScreen" component={PendingOrderScreen} />
            </Stack.Navigator>
        </ProductOrderState>




    );
}

const ProductOrderState: React.FC<ContextStateProps> = ({ children }) => {
    return (
        <ProductOrderProvider>
            {children}
        </ProductOrderProvider>
    )
}