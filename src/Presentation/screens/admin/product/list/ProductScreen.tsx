import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Styles from './Styles';
import { AdminCategoryNavigatorParamList } from '../../../../navigation/tabs/admin/AdminCategoryNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { AdminProductNavigatorParamList } from '../../../../navigation/tabs/admin/AdminProductNavigator';
import { ProductContext } from '../../../../context/product/ProductContext';
import useViewModel from './ViewModel';

const mockProducts = [
    
    {
        id: 1,
        name: 'Cappuccino',
        description: 'Con caca',
        price: 6.20,
        quantity: 1,
        image: '../../assets/images/capuccinno.png'
    },
];



interface Props extends StackScreenProps<AdminProductNavigatorParamList, 'ProductScreen'> { }


export const ProductScreen = ({navigation, route}:Props) => {
    const {
        products,
        deleteProduct
    } = useViewModel();
    return (
        products.length===2
        ?
        <Text style={Styles.noCategoryListText}>No hay categorÃas para mostar</Text>
        :
        <View style={Styles.container}>
            <Text style={Styles.headerText}>Productos</Text>
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
                                <TouchableOpacity onPress={() => {}}>
                                    <Text style={Styles.deleteButton}>Borrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
            <TouchableOpacity style={Styles.newProductButton} onPress={() => navigation.navigate('CreateNewProductScreen') }>
                <Text style={Styles.newProductButtonText}>Nuevo Producto</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductScreen;