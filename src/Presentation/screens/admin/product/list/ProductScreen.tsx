

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Modal, Pressable} from 'react-native';
import Styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { AdminProductNavigatorParamList } from '../../../../navigation/tabs/admin/AdminProductNavigator';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import { COLORS } from '../../../../themes/Theme';
import useViewModel from './ViewModel';

import { ProductContext } from '../../../../context/product/ProductContext';
import { MaterialIcons } from '@expo/vector-icons';
  import { LinearGradient } from 'expo-linear-gradient';
import { Product } from '../../../../../Domain/entities/Product';


interface Props extends StackScreenProps<AdminProductNavigatorParamList, 'ProductScreen'> { }

export const ProductScreen = ({ navigation }: Props) => {
    const { products, deleteProduct } = useViewModel();
    const { refresh, getAllProducts } = useContext(ProductContext); // Obtener el estado de refresh y la función getAllProducts

    useEffect(() => {
        getAllProducts(""); // Llamar a getAllProducts cuando se monte el componente
    }, [refresh]); // Dependencia en el estado de refresh

    const [itemToDeleteName, setItemToDeleteName] = useState<any>(null);
    const [itemToDelete, setItemToDelete] = useState<any>(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleDeletePress = (productItem: Product, productName: string) => {
        setItemToDelete(productItem);
        setItemToDeleteName(productName);
        setShowDeleteConfirmation(true);
    };

    const handleDeleteConfirm = () => {
        console.log("Item to delete:", itemToDelete);
        deleteProduct(itemToDelete.id);
        setShowDeleteConfirmation(false);
    };

    const handleDeleteCancel = () => {
        setShowDeleteConfirmation(false);
    };

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

                                <View style={Styles.productActions}>
                                    <TextInput
                                        style={Styles.productQuantity}
                                        value={item.quantity.toString()}
                                        editable={false}
                                    />
                                    <Text style={Styles.productPrice}>${item.price.toFixed(2)}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('ProductUpdateScreen', {productItem: item})}>
                                        <Text style={Styles.editButton}>Editar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleDeletePress(item, item.name)}>
                                        <Text style={Styles.deleteButton}>Borrar</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </LinearGradient>
                    )}
                />
            )}
            <TouchableOpacity style={Styles.newProductButton} onPress={() => navigation.navigate('CreateNewProductScreen')}>
                <Text style={Styles.newProductButtonText}>Nuevo Producto</Text>
            </TouchableOpacity>
            <Modal 
                visible={showDeleteConfirmation} 
                animationType="slide" 
                transparent={true}
            >
                <View style={Styles.modalContainer}>
                    <View style={Styles.modalMessageBox}>
                        <Text style={Styles.modalMessageText}>¿Estás seguro de que deseas eliminar el producto {itemToDeleteName}?</Text>
                    </View>
                    <View style={Styles.modalButtonsContainer}>
                        <Pressable style={Styles.modalButtonDelete} onPress={handleDeleteConfirm}>
                            <View style={Styles.modalButtonImageContainer}>
                                <FontAwesome6 name="trash-can" size={24} color="#ce2029" />
                            </View>
                            <Text style={Styles.modalButtonText}>Eliminar</Text>
                        </Pressable>
                        <Pressable onPress={handleDeleteCancel} style={Styles.modalButtonCancel}>
                            <View style={Styles.modalButtonImageContainer}>
                                <MaterialIcons name="cancel" size={24} color="#ffffff" />
                            </View>
                            <Text style={Styles.modalButtonText}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            
        </View>
    );
};

export default ProductScreen;
