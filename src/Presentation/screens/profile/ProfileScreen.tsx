import React from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';

import styles from './Styles';
import { UserInfo } from '../../components/UserInfo';
import useViewModel from './ViewModel';





interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'> {}

const ProfileScreen = ({ navigation, route }: Props) => {
	

	const {
		profile,
		user,
		status,
		onChange,
		isValidForm,
		loading,
		pickImage,
		takePhoto,
		errorMessages,
		responseError


	} = useViewModel();

	const handleProfile = async() => {
		await profile();
	};

  return (
    <View style={styles.profileContainer}>
		<Image style={styles.backButton} source={require('../../../../assets/images/leftButton.png')} />
		<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} />
		
		<Text style={styles.mainText}>Perfil de usuario</Text>
		<ScrollView style={styles.profileInnerContainer}>

			<UserInfo 
				fieldType='image' 
				textCard = 'Foto de perfil' 
				dataUser = 'Data here'
			/>

			<UserInfo 
				fieldType ='name' 
				textCard = 'Nombre' 
				dataUser = 'Date here'
			/>

			<UserInfo 
				fieldType ='lastname' 
				textCard = 'Apellido' 
				dataUser = 'Date here'
			/>
			
			<UserInfo 
				fieldType ='username' 
				textCard = 'Nombre de usuario' 
				dataUser = 'Date here'
			/>

			<UserInfo 
				textCard = 'Correo electrónico' 
				dataUser = 'Data here'
			/>
			
			<UserInfo 
				fieldType='phone'
				textCard = 'Teléfono' 
				dataUser = 'Data here'
			/>

			<Pressable 
				style={styles.editButton}
			>
				<Text style={styles.editButtonText}>Editar</Text>
			</Pressable>


		

			

		</ScrollView>


    </View>

      
  )
};

export default ProfileScreen;
