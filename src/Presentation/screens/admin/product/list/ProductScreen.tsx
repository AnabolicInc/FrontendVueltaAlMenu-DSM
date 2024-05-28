import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Styles from './Styles';
import { AdminCategoryNavigatorParamList } from '../../../../navigation/tabs/admin/AdminCategoryNavigator';
import { StackScreenProps } from '@react-navigation/stack';

const mockProducts = [
    {
        id: 1,
        name: 'Cappuccino',
        description: 'Con leche evaporada',
        price: 6.20,
        quantity: 1,
        image: '../../assets/images/capuccinno.png'
    }
];

interface Props extends StackScreenProps<AdminCategoryNavigatorParamList, 'ProductScreen'> { }


export const ProductScreen = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.headerText}>Productos</Text>
            <FlatList 
                data={mockProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={Styles.productContainer}>
                        <Image source={{ uri: item.image }} style={Styles.productImage} />
                        <View style={Styles.productInfo}>
                            <Text style={Styles.productTitle}>{item.name}</Text>
                            <Text style={Styles.productDescription}>{item.description}</Text>
                            <View style={Styles.productActions}>
                                <TextInput
                                    style={Styles.productQuantity}
                                    value={item.quantity.toString()}
                                    editable={false}
                                />
                                <Text style={Styles.productPrice}>${item.price.toFixed(2)}</Text>
                                <TouchableOpacity onPress={() => {}}>
                                    <Text style={Styles.editButton}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {}}>
                                    <Text style={Styles.deleteButton}>Borrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
            <TouchableOpacity style={Styles.newProductButton} onPress={() => {}}>
                <Text style={Styles.newProductButtonText}>Nuevo Producto</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductScreen;
