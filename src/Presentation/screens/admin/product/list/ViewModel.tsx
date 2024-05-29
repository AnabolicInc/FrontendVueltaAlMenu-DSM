import { View, Text } from 'react-native'
import React, { useState, useContext } from 'react'

import { Product } from '../../../../../Domain/entities/Product';
import { ProductContext } from '../../../../context/product/ProductContext';

const ProductListViewModel = () => {

    const {products, getAllProducts, deleteProduct: deleteProductContext} = useContext(ProductContext)
    
    const deleteProduct = async (id: string) => {
        try {
            await deleteProductContext(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    return {
        products,
        getAllProducts,
        deleteProduct
    };
}

export default ProductListViewModel;