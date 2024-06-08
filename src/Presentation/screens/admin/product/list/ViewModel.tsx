// En ViewModel.tsx

import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../../context/product/ProductContext';
import { categoryContext } from '../../../../context/category/CategoryContext';
import { Product } from '../../../../../Domain/entities/Product';

const ProductListViewModel = () => {
    const { products, getAllProducts, deleteProduct: deleteProductContext, addProduct: addProductContext } = useContext(ProductContext);
    const { currentCategory } = useContext(categoryContext);
    
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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

    return {
        products: filteredProducts,
        deleteProduct,
        addProduct, // Añadir esta función al return
    };
}

export default ProductListViewModel;
