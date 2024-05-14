import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font';


import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';

const PaymentScreen = () => {

	const [cardNumber, setCardNumber] = React.useState('');

	const handleCardNumberChange = (text: string) => {
		text = text.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
		let cleanedText = text.replace(/\s?/g, '');
		if (cleanedText.length > 16) {
			cleanedText = cleanedText.slice(0, 16);
		}
		text = cleanedText.replace(/(\d{4})/g, '$1 ').trim();
		setCardNumber(text);
	};

	const [expiryDate, setExpiryDate] = React.useState('');

	const handleExpiryDateChange = (text: string) => {
		text = text.replace(/\D/g, '').substring(0, 4); // Allow only 4 digits
		text = text.replace(/(\d{2})/, '$1/'); // Add slash after 2 digits
		setExpiryDate(text);
	};

	const [rut, setRut] = React.useState('');

	const handleRUTChange = (text: string) => {
		text = text.replace(/\D/g, '').substring(0, 8); // Allow only 8 digits
		text = text.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3-'); // Add dots and dash
		setRut(text);
	};

	const [fontsLoaded] = useFonts({
		Poppins: require('../../../../../assets/fonts/Poppins-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return null; // Muestra un componente de carga mientras se carga la fuente
	}

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
								placeholderTextColor='#AEAEAE'
								value={cardNumber}
								onChangeText={handleCardNumberChange}
								keyboardType='numeric'
								maxLength={19}
							/>


							<Text style={{ ...styles.paymentDataTitles, top: '15%', left: '0%' }}>Fecha de exp.</Text>
							<TextInput
								style={{ ...styles.paymentDataTitles, top: '15%', left: '0%' }}
								placeholder='MM/AA' placeholderTextColor='#AEAEAE'
								value={expiryDate}
								onChangeText={handleExpiryDateChange}
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
							/>

						</View>
					</LinearGradient>

				</View>

				<TextInput
					style={styles.paymentInputUser}
					placeholder="Nombre del titular"
					placeholderTextColor={'#AEAEAE'}
					onChangeText={(text) => console.log(text)}
					//value={''}
				/>
				<TextInput
					style={styles.paymentInputUser}
					placeholder="RUT"
					placeholderTextColor={'#AEAEAE'}
					value={rut}
					onChangeText={handleRUTChange}
				/>

			</View>


		</View>
	)
}

export default PaymentScreen

