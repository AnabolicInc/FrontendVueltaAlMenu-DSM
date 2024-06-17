import React, { useContext, useEffect, useState } from 'react';
import { ProductShoppingContext } from '../../../context/ProductShoppingContext';
import { Product } from '../../../../Domain/entities/Product';

const ShoppingCartViewModel = () => {
    const context = useContext(ProductShoppingContext);

    if (!context) {
        console.error("ProductShoppingContext is undefined");
        return { shoppingCart: [], total: 0 };
    }

    const { shoppingCart, addItem, subtracItem } = context;

    const [total, setTotal] = useState(0);

    if (!shoppingCart) {
        console.error("shoppingCart is undefined in context");
        return { shoppingCart: [], total: 0 };
    }

    const calculateTotal = () => {
        const total = shoppingCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotal(total);
    };

    useEffect(() => {
        calculateTotal();
    }, [shoppingCart]);

    return {
        shoppingCart,
        addItem,
        subtracItem,
        total,
    };
}

export default ShoppingCartViewModel;
