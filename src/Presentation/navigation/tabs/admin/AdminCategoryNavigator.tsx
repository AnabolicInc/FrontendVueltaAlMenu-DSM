import { createStackNavigator } from "@react-navigation/stack";
import { CategoryProvider } from '../../../context/category/CategoryContext';

interface ContextStateProps {
    children: ReactElement | ReactElement[] | null;
}


export type AdminCategoryNavigatorParamList = {
    CategoryListScreen: undefined;
    CategoryCreateScreen: undefined;
    CategoryUpdateScreen: {categoryItem: Category};
    ProductScreen: undefined;
}

const Stack = createStackNavigator<AdminCategoryNavigatorParamList>();

import {CategoryListScreen, CategoryCreateScreen, CategoryUpdateScreen} from '../../../screens/admin/category';
import {ProductScreen} from '../../../screens/admin/product';
import React, { ReactElement } from "react";
import { Category } from "../../../../Domain/entities/Category";


export const AdminCategoryNavigator = () => {

    return (
        <CategoryState>
            <Stack.Navigator
                initialRouteName="CategoryListScreen"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="CategoryListScreen" component={CategoryListScreen} />
                <Stack.Screen name="CategoryCreateScreen" component={CategoryCreateScreen} />
                <Stack.Screen name="CategoryUpdateScreen" component={CategoryUpdateScreen} />
                <Stack.Screen name="ProductScreen" component={ProductScreen} />
            </Stack.Navigator>
        </CategoryState>
    );
}

const CategoryState: React.FC<ContextStateProps> = ({ children }) => {
    return (
        <CategoryProvider>
            {children}
        </CategoryProvider>
    )
}