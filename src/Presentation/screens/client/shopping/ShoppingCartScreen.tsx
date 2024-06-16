import React, { useContext, useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { ModalPickPayment } from '../../../components/ModalPickPayment';
import { Product } from '../../../../Domain/entities/Product';
import { COLORS } from '../../../themes/Theme';
import { ShoppingCartContext } from '../../../context/shopping/ShoppingCartContext';
import { ClientHomeNavigatorParamList } from '../../../navigation/tabs/client/ClientHomeNavigator';
import ShoppingCartViewModel from './ViewModel';

interface Props extends StackScreenProps<ClientHomeNavigatorParamList, 'ShoppingCartScreen'> { }

export const ShoppingCartScreen = ({ navigation, route }: Props) => {
    const [modalVisible, setMoldalVisible] = useState<boolean>(false);

    const handlePaymentMethodSelection = (paymentMethod: string) => {
        // navigation.navigate('PaymentScreen');
        setMoldalVisible(false);
    };

    const { shoppingCart } = ShoppingCartViewModel();
	console.log("2 TAMAÑO DEL SHOPPING CART: " + shoppingCart.length)

    return (
        <View style={styles.shoppingCartContainer}>
            {/* <Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} /> */}

            <View style={styles.shoppingCartInnerContainer}>
                <Text style={styles.mainText}>Shopping Cart</Text>

                <Pressable style={styles.backButton} onPress={() => console.log('button')}>
                    <Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} />
                </Pressable>
                
                {/* Añadir nueva lista de productos del carrito */}
                {shoppingCart.length === 0 ? (
                    <Text style={styles.noShoppingCartListText}>No hay productos en tu carrito</Text>
                ) : (
                    <FlatList
                        style={styles.shoppingCartListInnerContainer}
                        showsVerticalScrollIndicator={false}
                        data={shoppingCart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                <Text style={{ fontSize: 16, color: COLORS.primaryGrey }}>{item.name}</Text>
                                <Text style={{ fontSize: 16, color: COLORS.primaryGrey }}>{item.quantity}</Text>
                            </View>
                        )}
                    />
                )}

                {/*createa a pressable button to go to the payment screen */}
                <View style={styles.payTotalBox}>
                    <View>
                        <Text style={styles.totalTitle}>Total</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.priceSign}>$</Text>
                            {/* Cambiar a variable total */}
                            <Text style={styles.priceText}>total</Text>
                        </View>
                    </View>

                    <Pressable
                        style={styles.payButton}
                        onPressIn={() => setMoldalVisible(true)}
                        // onPress={ () => navigation.navigate('PaymentScreen')}
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
        </View>
    );
}

export default ShoppingCartScreen;
