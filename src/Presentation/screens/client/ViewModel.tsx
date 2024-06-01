import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product/ProductContext';
import { categoryContext } from '../../context/category/CategoryContext';
import { Product } from '../../../Domain/entities/Product';

const ProductListViewModel = () => {
    const { products, getAllProducts} = useContext(ProductContext);

    return {
        products,
    };
}

export default ProductListViewModel;
