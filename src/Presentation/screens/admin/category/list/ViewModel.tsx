import React, { useEffect, useState } from "react";
import { CategoryListUseCase } from "../../../../../Domain/useCases/Category/CategoryListUseCase";
import { Category } from "../../../../../Domain/entities/Category";
import { useFocusEffect } from "@react-navigation/native";

const CategoryListViewModel = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect (() => { 
        getCategories();
    });
    
    const getCategories = async () => {

        const response = await CategoryListUseCase();

        setCategories(response.data)
    }

    return {
        categories
    };
}

export default CategoryListViewModel;