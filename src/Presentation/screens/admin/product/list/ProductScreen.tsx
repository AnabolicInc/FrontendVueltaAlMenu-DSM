import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { AdminProductNavigatorParamList } from '../../../../navigation/tabs/admin/AdminProductNavigator';
import useViewModel from './ViewModel';

interface Props extends StackScreenProps<AdminProductNavigatorParamList, 'ProductScreen'> { }

export const ProductScreen = ({ navigation }: Props) => {
    const { products, deleteProduct } = useViewModel();

    return (
        <View style={Styles.container}>
            <Text style={Styles.headerText}>Productos</Text>
            {products.length === 0 ? (
                <View style={Styles.emptyContainer}>
                    <Text style={Styles.noProductsText}>No hay productos para mostrar</Text>
                </View>
            ) : (
                <FlatList 
                    data={products}
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
                                    <TouchableOpacity onPress={() => deleteProduct(item.id)}>
                                        <Text style={Styles.deleteButton}>Borrar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            )}
            <TouchableOpacity style={Styles.newProductButton} onPress={() => navigation.navigate('CreateNewProductScreen')}>
                <Text style={Styles.newProductButtonText}>Nuevo Producto</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductScreen;
