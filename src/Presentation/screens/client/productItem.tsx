import React, { useState } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Styles';
import { Product } from '../../../Domain/entities/Product';
import { COLORS } from '../../themes/Theme';
import useViewModel from './ViewModel';

interface Props {
    product: Product;
    onPress: () => void;
    onAddToCart: (product: Product) => void;
    buttonPressed: boolean;
}

const ProductItem: React.FC<Props> = ({ product, onPress, onAddToCart, buttonPressed }) => {
    const [quantity, setQuantity] = useState(1);
    const { subtracItem, addItem } = useViewModel();

    const handleAddToCart = () => {
        product.quantity = quantity;
        onAddToCart(product);
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        addItem({ ...product, quantity: quantity + 1 });
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            subtracItem({ ...product, quantity: quantity - 1 });
        }
    };

    return (
        <Pressable onPress={onPress}>
            <LinearGradient
                colors={[COLORS.primaryGrey, 'transparent']}
                style={styles.productListElement}
            >
                {product.image ? (
                    <Image style={styles.productListImage} source={{ uri: product.image }} />
                ) : (
                    <Image style={styles.productListImage} source={require('../../../../assets/images/category.png')} />
                )}
                <View style={styles.productListText}>
                    <Text style={styles.productListElementName}>
                        {product.name.length > 23
                            ? product.name.match(/.{1,23}/g)[0] + '...'
                            : product.name}
                    </Text>
                    <Text style={styles.productListElementDescription}>
                        {product.description.length > 20
                            ? product.description.match(/.{1,20}/g)[0] + '...'
                            : product.description}
                    </Text>
                </View>

                <View style={styles.productListPriceAddBoxContainer}>
                    <View style={styles.productListPriceContainer}>
                        <Text style={styles.productListElementPriceSignText}>$
                            <Text style={styles.productListElementPriceText}> {product.price}</Text>
                        </Text>
                    </View>
                    <View style={styles.counterContainer}>
                        <TouchableOpacity style={styles.counterButton} onPress={incrementQuantity}>
                            <Text style={styles.counterButtonText}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterText}>{quantity}</Text>
                        <TouchableOpacity style={styles.counterButton} onPress={decrementQuantity}>
                            <Text style={styles.counterButtonText}>-</Text>
                        </TouchableOpacity>
                        <Pressable
                            style={[styles.addButton, buttonPressed && styles.buttonPressed]}
                            onPress={handleAddToCart}
                        >
                            <Text style={styles.addButtonText}><FontAwesome name="shopping-cart" size={24} color="#000000" /></Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    );
};

export default ProductItem;
