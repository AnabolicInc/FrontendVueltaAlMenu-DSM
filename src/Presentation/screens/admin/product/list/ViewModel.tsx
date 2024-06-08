// En ViewModel.tsx

import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../../context/product/ProductContext';
import { categoryContext } from '../../../../context/category/CategoryContext';
import { Product } from '../../../../../Domain/entities/Product';
import * as Font from 'expo-font';
const ProductListViewModel = () => {
    const { products, getAllProducts, deleteProduct: deleteProductContext, addProduct: addProductContext } = useContext(ProductContext);
    const { currentCategory } = useContext(categoryContext);
    
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if (currentCategory) {
            const filtered = products.filter(product => product.category_id === currentCategory.id);
            setFilteredProducts(filtered);
        }
    }, [currentCategory, products]);

    const deleteProduct = async (id: string) => {
        try {
            await deleteProductContext(id);
        } catch (error) {
            console.log(error);
        }
    }

    const addProduct = (product: Product) => {
        if (product.category_id === currentCategory.id) {
            setFilteredProducts(prevProducts => [...prevProducts, product]);
        }
    }

        /**
     * Loads the required fonts asynchronously.
     */
        const loadFonts = async () => {
            await Font.loadAsync({
                'Poppins-Black': require('../../../../../../assets/fonts/Poppins-SemiBold.ttf'),
            });
            setFontsLoaded(true);
        };

    return {
        products: filteredProducts,
        deleteProduct,
        addProduct, // Añadir esta función al return
        loadFonts,
        fontsLoaded

    };
}

export default ProductListViewModel;
