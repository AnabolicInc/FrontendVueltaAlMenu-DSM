import React, { useContext, useEffect } from 'react';
import { ShoppingCartContext } from '../../../context/shopping/ShoppingCartContext';
import { Product } from '../../../../Domain/entities/Product';

const ShoppingCartViewModel = () => {
    const context = useContext(ShoppingCartContext);

    if (!context) {
        console.error("ShoppingCartContext is undefined");
        return { shoppingCart: [] };
    }

    let { shoppingCart } = context;

    if (!shoppingCart) {
        console.error("shoppingCart is undefined in context");
        shoppingCart = [];
    }

    // Agregar un producto estático para pruebas
    const staticProduct: Product = {
        id: 'static',
        name: 'Hamburguesa',
        description: 'Hamburguesa bien rica',
        price: 999,
        quantity: 1,
        image: 'https://via.placeholder.com/150'
    };

    if (shoppingCart.length === 0) {
        shoppingCart.push(staticProduct);
    }

    useEffect(() => {
        console.log('ViewModel - shoppingCart:', shoppingCart);
        console.log('ViewModel - Number of items in shoppingCart:', shoppingCart.length);
    }, [shoppingCart]);

    return {
        shoppingCart,
    };
}

export default ShoppingCartViewModel;
