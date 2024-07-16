import React, { useState, useEffect } from 'react';
import { Image, Pressable, Text, View, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { ModalPickPayment } from '../../../components/ModalPickPayment';
import { COLORS } from '../../../themes/Theme';
import { ClientHomeNavigatorParamList } from '../../../navigation/tabs/client/ClientHomeNavigator';
import { ProductShoppingContext } from '../../../context/ProductShoppingContext';
import { NewAddressButtom } from '../../../components/NewAddressButtom';
import ShoppingCartViewModel from './ViewModel';
import { LinearGradient } from 'expo-linear-gradient';
import { Product } from '../../../../Domain/entities/Product';


interface Props extends StackScreenProps<ClientHomeNavigatorParamList, 'ShoppingCartScreen'> { }

export const ShoppingCartScreen = ({ navigation, route }: Props) => {
    const [modalVisible, setMoldalVisible] = useState<boolean>(false);

    const handlePaymentMethodSelection = (paymentMethod: string) => {
        setMoldalVisible(false);
        navigation.navigate('PaymentScreen', { paymentMethod, total }); // Navegar con los parámetros correctos
    };

    const { shoppingCart, addItem, subtracItem, total } = ShoppingCartViewModel();

    useEffect(() => {
        console.log('ShoppingCartScreen - shoppingCart:', shoppingCart);
        console.log('ShoppingCartScreen - Number of items in shoppingCart:', shoppingCart.length);
    }, [shoppingCart]);

    const handleIncrementQuantity = (product: Product) => {
        addItem(product);
    };

    const handleDecrementQuantity = (product: Product) => {
        subtracItem(product);
    };

    return (
        <View style={styles.shoppingCartContainer}>
            <View style={styles.header}>
                <Pressable style={styles.backButton} onPress={() => console.log('button')}>
                    <Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} />
                </Pressable>
                <Text style={styles.mainText}>Carrito</Text>
            </View>

            {shoppingCart.length === 0 ? (
                <Text style={styles.noShoppingCartListText}>No hay productos en tu carrito</Text>
            ) : (
                <FlatList
                    style={styles.shoppingCartListInnerContainer}
                    showsVerticalScrollIndicator={false}
                    data={shoppingCart}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <LinearGradient
                            colors={[COLORS.primaryGrey, 'transparent']}
                            style={styles.shoppingCartListElement}
                        >
                            <Image style={styles.shoppingCartListImage} source={{ uri: item.image }} />
                            <View style={styles.shoppingCartListText}>
                                <Text style={styles.shoppingCartListElementName}>{item.name}</Text>
                                <Text style={styles.shoppingCartListElementDescription}>{item.description}</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.priceSign}>$</Text>
                                    <Text style={styles.priceText}>{item.price} CLP</Text>
                                </View>
                                <View style={styles.quantityContainer}>
                                    <Pressable
                                        style={[styles.quantityButton, item.quantity >= item.stock && styles.disabledCounterButton]}
                                        onPress={() => handleIncrementQuantity(item)}
                                        disabled={item.quantity >= item.stock}
                                    >
                                        <Text style={styles.quantityButtonText}>+</Text>
                                    </Pressable>
                                    <Text style={styles.quantityText}>{item.quantity}</Text>
                                    <Pressable
                                        style={[styles.quantityButton, item.quantity === 1 && styles.disabledCounterButton]}
                                        onPress={() => handleDecrementQuantity(item)}
                                        disabled={item.quantity === 1}
                                    >
                                        <Text style={styles.quantityButtonText}>-</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </LinearGradient>
                    )}
                />

            	)} */}	 


				{/*createa a pressable button to go to the payment screen */}

				<View style={styles.payTotalBox}>

					<View>

						<Text style={styles.totalTitle}>Total</Text>

						<View style={{flexDirection: 'row'}}>
							<Text style={styles.priceSign}>$</Text>
							{/* Cambiar a variable total */}
							<Text style={styles.priceText}>total</Text>
						</View>
					</View>

					<Pressable
						style={styles.payButton}
						onPressIn={() => setMoldalVisible(true)}
						//onPress={ () => navigation.navigate('PaymentScreen')}
					>
						<MaterialCommunityIcons style={{ marginRight: 10 }} name="cart" size={20} color="white" />
						<Text style={styles.payText}>Pagar</Text>
					</Pressable>
				</View>

			</View>

			<ModalPickPayment
				modalUseState={modalVisible}
				setModalUseState={setMoldalVisible}
				onPaymentMethodSelected={handlePaymentMethodSelection}
				>
			</ModalPickPayment>

			<Pressable onPress={() => navigation.navigate('AddressCreateScreen')}>
				<NewAddressButtom />
            </Pressable>
			

		</View>
	)

            )}

            <View style={styles.payTotalBox}>
                <View>
                    <Text style={styles.totalTitle}>Total</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.priceSign}>$</Text>
                        <Text style={styles.priceText}>{total} CLP</Text>
                    </View>
                </View>

                <Pressable
                    style={styles.payButton}
                    onPressIn={() => setMoldalVisible(true)}
                >
                    <MaterialCommunityIcons style={{ marginRight: 10 }} name="cart" size={20} color="white" />
                    <Text style={styles.payText}>Pagar</Text>
                </Pressable>
            </View>

            <ModalPickPayment
                modalUseState={modalVisible}
                setModalUseState={setMoldalVisible}
                onPaymentMethodSelected={handlePaymentMethodSelection}
            />
        </View>
    );

}

export default ShoppingCartScreen;
