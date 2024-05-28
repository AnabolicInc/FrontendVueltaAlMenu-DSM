import React, { useContext} from "react";
import { categoryContext } from "../../../../context/category/CategoryContext";


const CategoryListViewModel = () => {

    const {categories, deleteCategory: deleteCategoryContext} = useContext(categoryContext)

    const deleteCategory = async (id: string) => {
        try {
            await deleteCategoryContext(id);
        }
        catch (error){
            console.log(error);
        }
    }
    return {
        categories,
        deleteCategory
    };
}

export default CategoryListViewModel;