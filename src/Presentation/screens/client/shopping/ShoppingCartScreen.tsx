import React, { useContext, useState } from 'react'
import { Image, Pressable, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';

import { ModalPickPayment } from '../../../components/ModalPickPayment';
import { Product } from '../../../../Domain/entities/Product';
import { COLORS } from '../../../themes/Theme';
import { ShoppingCartContext } from '../../../context/shopping/ShoppingCartContext';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { ClientHomeNavigatorParamList } from '../../../navigation/tabs/client/ClientHomeNavigator';
import { ProductShoppingContext } from '../../../context/ProductShoppingContext';

interface Props extends StackScreenProps<ClientHomeNavigatorParamList, 'ShoppingCartScreen'> { }


export const ShoppingCartScreen = ({ navigation, route }:Props) => {

	const [modalVisible, setMoldalVisible] = useState<boolean>(false);

	const handlePaymentMethodSelection = (paymentMethod: string) => {
        //navigation.navigate('PaymentScreen');
        setMoldalVisible(false);
    };

	const { shoppingCart, total } = useContext(ProductShoppingContext);

	console.log(total);

	return (
		


		<View style={styles.shoppingCartContainer}>
			{/* <Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} /> */}

			<View style={styles.shoppingCartInnerContainer}>
				<Text style={styles.mainText}>Shopping Cart</Text>

				<Pressable style={styles.backButton} onPress={() => console.log('button')}>
					<Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} />
				</Pressable>
				
				
				{/*DO NOT DELETE, CODE COMMENTED FOR FUTURE IMPLEMENTATION*/}
				{ /*shoppingCart.length === 0 ? (
                <Text style={styles.noShoppingCartListText}>No hay productos en tu carrito</Text>
            	) : (
                <FlatList 
                    style={styles.shoppingCartListInnerContainer} 
                    showsVerticalScrollIndicator={false}
                    data={shoppingCart}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
						// <ShoppingCartItem product={item} remove={removeProduct}/>

						<LinearGradient
							colors={[COLORS.primaryGrey, 'transparent']}
							style={styles.shoppingCartListElement}
						>
							{item.image ? (
								<Image style={styles.shoppingCartListImage} source={{ uri: item.image }} />
							) : (
								<Image style={styles.shoppingCartListImage} source={require('../../../../../assets/images/category.png')} />
							)}
							<View style={styles.shoppingCartListText}>
								<Text style={styles.shoppingCartListElementName}>{item.name}</Text>
								<Text style={styles.shoppingCartListElementDescription}>
									{item.description.length > 18
										? item.description.match(/.{1,18}/g).join('-\n')
										: item.description}
								</Text>
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

		</View>
	)
}

export default ShoppingCartScreen;

