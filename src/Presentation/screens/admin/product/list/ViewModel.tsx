import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../../context/product/ProductContext';
import { categoryContext } from '../../../../context/category/CategoryContext';
import { Product } from '../../../../../Domain/entities/Product';

const ProductListViewModel = () => {
    const { products, getAllProducts, deleteProduct: deleteProductContext } = useContext(ProductContext);
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

    return {
        products: filteredProducts,
        deleteProduct
    };
}

export default ProductListViewModel;
