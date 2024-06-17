import React, { useContext, useState } from "react";
import { categoryContext } from "../../../../context/category/CategoryContext";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { Category } from "../../../../../Domain/entities/Category";

const CategoryListViewModel = () => {
    const { categories, deleteCategory: deleteCategoryContext, setCurrentCategory } = useContext(categoryContext);
    const { user, updateUser: updateUserContext } = useContext(AuthContext);

    const deleteCategory = async (id: string) => {
        try {
            await deleteCategoryContext(id);
        } catch (error) {
            console.log(error);
        }
    }

    const selectCategory = (category: Category) => {
        setCurrentCategory(category);
    }

    return {
        categories,
        deleteCategory,
        selectCategory
    };
}

export default CategoryListViewModel;
