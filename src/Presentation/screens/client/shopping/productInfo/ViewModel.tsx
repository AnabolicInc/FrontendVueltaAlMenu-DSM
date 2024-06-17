import { useContext } from "react";
import { Product } from "../../../../../Domain/entities/Product";
import { ProductShoppingContext } from "../../../../context/ProductShoppingContext";

const ProductInfoViewModel = () => {
  const { saveProductShoppingCart, addItem, subtracItem } = useContext(ProductShoppingContext);

  const addToCart = async (product: Product) => {
    console.log('Add to cart', product);
    await saveProductShoppingCart(product); 
  };

  return {
    addToCart,
    addItem,
    subtracItem,
  };
}

export default ProductInfoViewModel;
