import React, { useState } from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Styles';
import { RootStackParamList } from '../../../navigation/MainAppStack';
import { ModalPickPayment } from '../../../components/ModalPickPayment';

interface Props extends StackScreenProps<RootStackParamList, 'ClientBottomTab'> { }


const ShoppingCartScreen = ({ navigation, route }: Props) => {

	const [modalVisible, setMoldalVisible] = useState<boolean>(false);

	const handlePaymentMethodSelection = (paymentMethod: string) => {
        navigation.navigate('PaymentScreen');
        setMoldalVisible(false);
    };

	return (
		


		<View style={styles.shoppingCartContainer}>
			{/* <Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} /> */}

			<View style={styles.shopppingCartInnerContainer}>
				<Text style={styles.mainText}>Shopping Cart</Text>

				<Pressable style={styles.backButton} onPress={() => console.log('button')}>
					<Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} />
				</Pressable>

				{/*createa a pressable button to go to the payment screen */}
				<Pressable
					style={styles.payButton}
					onPressIn={() => setMoldalVisible(true)}
					//onPress={ () => navigation.navigate('PaymentScreen')}
				>
					<MaterialCommunityIcons style={{ marginRight: 10 }} name="cart" size={20} color="white" />
					<Text style={styles.payText}>Pagar</Text>
				</Pressable>

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

