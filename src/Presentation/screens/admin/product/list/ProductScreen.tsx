import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { AdminProductNavigatorParamList } from '../../../../navigation/tabs/admin/AdminProductNavigator';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';

interface Props extends StackScreenProps<AdminProductNavigatorParamList, 'ProductScreen'> { }

export const ProductScreen = ({ navigation }: Props) => {
    const { products, deleteProduct } = useViewModel();

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require('../../../../../../assets/images/backButton.png')} style={Styles.backButtonImage} />
            </TouchableOpacity>
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
                        <LinearGradient
                            colors={[COLORS.primaryGrey, 'transparent']}
                            style={Styles.productContainer}
                        >
                            <Image source={{ uri: item.image }} style={Styles.productImage} />
                            <View style={Styles.productInfo}>
                                <Text style={Styles.productTitle}>{item.name}</Text>
                                <Text style={Styles.productDescription}>{item.description}</Text>
                                <View style={Styles.productDetails}>
                                    <View style={Styles.productQuantityPriceContainer}>
                                        <View style={Styles.productQuantityContainer}>
                                            <TextInput
                                                style={Styles.productQuantity}
                                                value={item.quantity.toString()}
                                                editable={false}
                                            />
                                        </View>
                                        <View style={Styles.productPriceWrapper}>
                                            <Text style={Styles.productPrice}>
                                                <Text style={Styles.productPriceSymbol}>$</Text>{item.price}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={Styles.productButtonsContainer}>
                                        <TouchableOpacity onPress={() => {}} style={Styles.editButtonContainer}>
                                            <Image source={require('../../../../../../assets/images/editProduct.png')} style={Styles.editButtonImage} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => deleteProduct(item.id)} style={Styles.deleteButtonContainer}>
                                            <Image source={require('../../../../../../assets/images/deleteProduct.png')} style={Styles.deleteButtonImage} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </LinearGradient>
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
