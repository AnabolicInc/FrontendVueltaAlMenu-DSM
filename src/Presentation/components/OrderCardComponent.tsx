import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';


interface Props {
	customStyle?: object;	
}

export const OrderCardComponent = ({customStyle}:Props) => {
	return (
		<LinearGradient
			colors={['#0C0F14', '#1b1b19']}
			style={{...styles.linearGradientBg, ...{customStyle}}}
			start={{ x: 0, y:  0}}
			end={{ x: 1, y: 0}}

		>
			<Pressable onPress={() => console.log('Order pressed')}>

				<Text style={styles.title}>Orden</Text>
				<Text style={styles.info}>Fecha del pedido: </Text>
				<Text style={styles.info}>Cliente: </Text>
				<Text style={styles.info}>Dirección: </Text>

			</Pressable>
		</LinearGradient>
	)
}


const styles = StyleSheet.create({
	linearGradientBg: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#D17842',
		width: "90%",
		height: "20%",
		top: "15%",
	},



	title: {
		fontFamily: 'Poppins',
		padding: 10,
		position: 'relative',
		fontSize: 15,
		color: 'white',
	},
	info: {
		fontFamily: 'Poppins',
		marginLeft: 10,
		position: 'relative',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		fontSize: 12,
		color: 'white',
	}

})