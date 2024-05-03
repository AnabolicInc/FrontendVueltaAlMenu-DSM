import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


interface Props {
    fieldLabel: string;      
    onChangeText: (text:string) => void;
	prefix?: string;
	customStyle?: object;
	icon?: object;
	secureTextEntry?:boolean;
	keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
}

const RegisterInfo = ({fieldLabel,onChangeText,prefix,customStyle,icon,secureTextEntry,keyboardType}:Props) => {
	return (
	  <View style={styles.inputContainer}>
		<View style={styles.prefixContainer}> 
			{icon && <Image source={icon} style={styles.icon} />}
			{prefix && <Text style={styles.prefix}>{prefix}</Text>}
		</View> 
		<TextInput
		  style = {{...styles.fieldLabel, ...customStyle}}
		  placeholder = {fieldLabel}
		  placeholderTextColor={'#D17842'}
		  onChangeText={onChangeText}
		  secureTextEntry={secureTextEntry}
		  keyboardType={keyboardType} 
		/>
	  </View>
	)
  }

export default RegisterInfo;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		position: 'relative',
		marginBottom: 10,
  	},
	prefixContainer: {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 10,
		flexDirection: 'row',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		
	},

	prefix: {

		position: 'relative',
		borderRadius: 10,
		color: 'white',
		fontSize: 15,
		marginRight: 10,
		fontFamily: 'Poppins',
		marginBottom: 10,
		marginTop: 10,
		
	},
	icon: {
		position: 'relative',
		width: 20,
		height: 20,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 2,
	},

  	fieldLabel: {
		position: 'relative',
		fontFamily: 'Poppins',
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		color: 'white',
		width: 250,
		height: 40,
		borderRadius: 10,
		marginBottom: 10,
		paddingStart: 15,
		paddingEnd: 15,
		alignSelf: 'center',
  	},

})