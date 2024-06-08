import React, { createContext, useEffect, useState } from "react";
import { Category } from "../../../Domain/entities/Category";
import { ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { CategoryCreateUseCase } from "../../../Domain/useCases/Category/CategoryCreateUseCase";
import { CategoryListUseCase } from "../../../Domain/useCases/Category/CategoryListUseCase";
import { CategoryUpdateUseCase } from "../../../Domain/useCases/Category/CategoryUpdateUseCase";
import { CategoryDeleteUseCase } from "../../../Domain/useCases/Category/CategoryDeleteUseCase";
import * as ImagePicker from 'expo-image-picker';
import { UpdateFileUseCase } from "../../../Domain/useCases/File/UpdateFileUseCase";
import { SaveCategoryUseCase } from "../../../Domain/useCases/Category/SaveCategoryLocal";

interface CategoryContextProps {
    categories: Category[];
    currentCategory: Category | null;
    getCategories: () => void;
    setCurrentCategory: (category: Category) => void;
    createCategory: (category: Category, file?: ImagePicker.ImageInfo) => Promise<ResponseAPIDelivery>;
    updateCategory: (id: string, name: string, description: string, file?: ImagePicker.ImageInfo) => Promise<ResponseAPIDelivery>;
    deleteCategory: (id: string) => Promise<ResponseAPIDelivery>;
    updateFile: () => void;
}

export const categoryContext = createContext({} as CategoryContextProps);

export const CategoryProvider = ({ children }: any) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await CategoryListUseCase();
        setCategories(response.data);
    }

    const createCategory = async (category: Category, file?: ImagePicker.ImageInfo) => {
        const response = await CategoryCreateUseCase(category);
        if (response.success) {
            const dataCategory = response.data;
            if (file !== undefined) {
                const responseImage = await UpdateFileUseCase(file, 'categories', dataCategory.id);
                dataCategory.image = responseImage.data;
            }
            await SaveCategoryUseCase(dataCategory);
            getCategories();
        }
        return response;
    }

    const updateCategory = async (id: string, name: string, description: string, file?: ImagePicker.ImageInfo) => {
        const response = await CategoryUpdateUseCase(id, name, description);
        if (response.success) {
            const dataCategory = response.data;
            if (file !== undefined) {
                const responseImage = await UpdateFileUseCase(file, 'categories', dataCategory.id);
                dataCategory.image = responseImage.data;
            }
            getCategories();
        }
        return response;
    }

    const deleteCategory = async (id: string) => {
        const response = await CategoryDeleteUseCase(id);
        getCategories();
        return response;
    }

    const updateFile = () => {
        // const response = await CategoryListUseCase();
        // setCategories(response.data)
    }

    return (
        <categoryContext.Provider 
            value={{
                categories,
                currentCategory,
                getCategories,
                setCurrentCategory,
                createCategory,
                updateCategory,
                deleteCategory,
                updateFile
            }}
        >
            {children}
        </categoryContext.Provider>
    );
}
