import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles';
import { RootClientBottomTabParamList } from '../../../navigation/tabs/client/ClientBottomTab';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/MainAppStack';


interface Props extends StackScreenProps<RootStackParamList, 'ClientBottomTab'> { }


const ShoppingCartScreen = ({ navigation, route }: Props) => {
	return (


		<View style={styles.shoppingCartContainer}>
			{/* <Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} /> */}

			<View style={styles.shopppingCartInnerContainer}>
				<Text style={styles.mainText}>Shopping Cart</Text>

				<Pressable style={styles.backButton} onPress={() => console.log('button')}>
					<Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} />
				</Pressable>

				{/*createa a pressable button to go to the payment screen */}
				<Pressable style={styles.payButton} onPress={() => navigation.navigate('PaymentScreen')}>
					<Text style={styles.payText}>Pagar</Text>
				</Pressable>

			</View>


		</View>
	)
}

export default ShoppingCartScreen;

