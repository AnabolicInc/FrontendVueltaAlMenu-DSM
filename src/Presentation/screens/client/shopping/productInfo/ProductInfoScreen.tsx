import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './Styles';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';
import { ClientShoppingNavigatorParamList } from '../../../../navigation/tabs/client/ClientShoppingNavigator';
import { Product } from '../../../../../Domain/entities/Product';

interface Props extends StackScreenProps<ClientShoppingNavigatorParamList, 'ProductInfoScreen'> { }

export const ProductInfoScreen = ({ navigation, route }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false); // Modal para mostrar mensaje de error

  const { product } = route.params;
  const { addToCart, subtracItem, addItem } = useViewModel();
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(product.price);

  useEffect(() => {
    setTotalPrice(product.price * quantity);
  }, [quantity]);

  const handleAddToCart = () => {
    product.quantity = quantity;
    addToCart(product);
  };

  const incrementQuantity = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
      addItem({ ...product, quantity: quantity + 1 });
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      subtracItem({ ...product, quantity: quantity - 1 });
    }
  };

  return (
    <View style={styles.productInfoContainer}>
      <View>
        {product.image == '' || product.image == null ? (
          <Image style={styles.productInfoImage} source={require('../../../../../../assets/images/category.png')} />
        ) : (
          <Image style={styles.productInfoImage} source={{ uri: product.image }} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{product.name}</Text>
        </View>
      </View>

      <Text style={styles.descriptionTitle}>Descripción</Text>

      <Text style={styles.descriptionComplete}>
        {product.description.length > 42
          ? product.description.match(/.{1,40}/g).join('\n')
          : product.description}
      </Text>

      <View style={styles.productListPriceAddBoxContainer}>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>Precio</Text>
          <Text style={styles.productListElementPriceSignText}>$
            <Text style={styles.productListElementPriceText}> {totalPrice}</Text>
          </Text>
        </View>

        <View style={styles.quantityAddContainer}>
          <View style={styles.counterContainer}>
            <TouchableOpacity style={[styles.counterButton, quantity >= product.quantity && styles.disabledCounterButton]} onPress={incrementQuantity} disabled={quantity >= product.quantity}>
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>{quantity}</Text>
            <TouchableOpacity
              style={[styles.counterButton, quantity === 0 && styles.disabledCounterButton]}
              onPress={decrementQuantity}
              disabled={quantity === 0}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
          </View>

          <Pressable
            style={[styles.addButton, quantity === 0 && styles.disabledAddButton]}
            onPress={handleAddToCart}
            disabled={quantity === 0}
          >
            <Text style={styles.addButtonText}>Agregar al carrito</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductInfoScreen;
