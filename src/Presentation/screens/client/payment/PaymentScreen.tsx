import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './Styles';
import useViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootClientBottomTabParamList } from '../../../navigation/tabs/client/ClientBottomTab';


interface Props extends StackScreenProps<RootClientBottomTabParamList, 'PaymentScreen'> { }



export const PaymentScreen = ({ navigation, route }: Props) => {


	const {
		holderName,
		cardNumber,
		expiryDate,
		cvc,
		rut,
		onChange

	} = useViewModel();

	return (
		<View style={styles.payementMainContainer}>

			<View style={styles.paymentInnerContainer}>

				<Text style={styles.paymenMainText}>Pago</Text>

				<View style={styles.paymentCardContainer}>
					<Text style={styles.paymentDataTitles}>Tarjeta de </Text>
					<LinearGradient
						colors={['#52555A', '#0C0F14']}
						style={styles.paymentCardGradient}
						start={{ x: 0, y: 0 }}

					>
						<View style={styles.paymentCard}>
							<Image source={require('../../../../../assets/images/chip1.png')}
								style={{ width: 60, height: 35, position: 'relative', top: "-5%", left: "0%" }}
							/>

							<Text style={{ ...styles.paymentDataTitles, top: '10%' }}>Número de tarjeta</Text>

							<TextInput
								style={{ ...styles.paymentDataTitles, top: '10%' }}
								placeholder='0000 0000 0000 0000'
								value={cardNumber}
								placeholderTextColor='#AEAEAE'
								onChangeText={text => onChange('cardNumber', text)}
								keyboardType='numeric'
								maxLength={19}
							/>


							<Text style={{ ...styles.paymentDataTitles, top: '15%', left: '0%' }}>Fecha de exp.</Text>
							<TextInput
								style={{ ...styles.paymentDataTitles, top: '15%', left: '0%' }}
								placeholder='MM/AA' placeholderTextColor='#AEAEAE'
								value={expiryDate}
								onChangeText={text => onChange('expiryDate', text)}
								keyboardType='numeric'
							/>

							<Text style={{ ...styles.paymentDataTitles, top: '-12%', left: '65%' }}>CVC</Text>
							<TextInput
								style={{ ...styles.paymentDataTitles, top: '-12%', left: '65%' }}
								placeholder='000'
								placeholderTextColor='#AEAEAE'
								keyboardType='numeric'
								maxLength={3}
								secureTextEntry={true}
								value={cvc}
								onChangeText={text => onChange('cvc', text)}
							/>

						</View>
					</LinearGradient>

				</View>

				<TextInput
					style={styles.paymentInputUser}
					placeholder="Nombre del titular"
					placeholderTextColor={'#AEAEAE'}
					value={holderName || ''}
					onChangeText={text => onChange('holderName', text)}
				/>
				<TextInput
					style={styles.paymentInputUser}
					placeholder="RUT"
					placeholderTextColor={'#AEAEAE'}
					value={rut}
					onChangeText={text => onChange('rut', text)}
				/>

				<Pressable style={styles.paymentButtonContainer}
					//onPress={() => {navigation.navigate('PaymentSuccessScreen');}}
					disabled={false}
					onLongPress={() => { console.log('long press'); }}
					onPress = {() => {console.log('pagar');}}
				>
					<LinearGradient
						colors={['#F9A826', '#F58634']}
						style={styles.paymentButton}
						start={{ x: 0, y: 0 }}
					>
						
						<Text style={{ ...styles.paymentDataTitles, color: '#000000' }}>Pagar</Text>
					</LinearGradient>
				</Pressable>

			</View>


		</View>
	)
}

export default PaymentScreen;

