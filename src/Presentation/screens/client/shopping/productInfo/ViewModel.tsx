import { useContext, useState } from "react";
import { Product } from "../../../../../Domain/entities/Product";
import { ShoppingCartContext } from "../../../../context/shopping/ShoppingCartContext";


const ProductInfoViewModel = () => {


    const { saveProductShoppingCart } = useContext(ShoppingCartContext);

    const addToCart = async (product: Product) => {
        console.log('Add to cart', product);
        await saveProductShoppingCart(product); 
    }


    return {
        addToCart

    };


}


export default ProductInfoViewModel;