import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product/ProductContext';
import { categoryContext } from '../../context/category/CategoryContext';
import { Product } from '../../../Domain/entities/Product';
import { ShoppingCartContext } from '../../context/shopping/ShoppingCartContext';
import { ProductShoppingContext } from '../../context/ProductShoppingContext';

const ProductListViewModel = () => {
    const { products, getAllProducts, saveProductShoppingCart} = useContext(ProductShoppingContext);


    //const { saveProductShoppingCart } = useContext(ShoppingCartContext);
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
