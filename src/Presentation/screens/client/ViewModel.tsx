import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product/ProductContext';
import { categoryContext } from '../../context/category/CategoryContext';
import { Product } from '../../../Domain/entities/Product';
import { ShoppingCartContext } from '../../context/shopping/ShoppingCartContext';

const ProductListViewModel = () => {
    const { products, getAllProducts} = useContext(ProductContext);


    const { saveProductShoppingCart } = useContext(ShoppingCartContext);
    const addToCart = async (product: Product) => { 
        console.log('Add to cart', product);
        await saveProductShoppingCart(product);
    }

    const addItem = async (product) => {
        console.log('Add item', product);
    }

    const subtracItem = async (product) => {
        console.log('Subtract item', product);
    }
    
    return {
        products,
        addToCart,
        addItem,
        subtracItem,
    };
}

export default ProductListViewModel;
