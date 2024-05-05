import { View, Text, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { UserInfo } from '../../../components/UserInfo';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { RootBottomTabParamList } from '../../../navigation/tabs/client/ClientBottomTab';
import { AuthContext } from '../../../context/auth/AuthContext';

interface Props extends StackScreenProps<RootBottomTabParamList, 'ProfileInfoScreen'> {};


export const ProfileInfoScreen = ({ navigation,route }: Props) => {
	const {status, user} = useContext(AuthContext);
  return (
    <View style={styles.profileContainer}>
		<Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} />
		<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} />
		
		<Text style={styles.mainText}>Perfil de usuario</Text>
		<ScrollView style={styles.profileInnerContainer}>

			<UserInfo 
				fieldType='image' 
				textCard = 'Foto de perfil' 
				dataUser = {user?.image}
			/>

			<UserInfo 
				fieldType ='name' 
				textCard = 'Nombre' 
				dataUser = {user?.name}
			/>

			<UserInfo 
				fieldType ='lastname' 
				textCard = 'Apellido' 
				dataUser = {user?.lastName}
			/>
			
			<UserInfo 
				fieldType ='username' 
				textCard = 'Nombre de usuario' 
				dataUser = {user?.name + user?.lastName}
			/>

			<UserInfo 
				textCard = 'Correo electrónico' 
				dataUser = {user?.email}
			/>
			
			<UserInfo 
				fieldType='phone'
				textCard = 'Teléfono' 
				dataUser = {'+56' + user?.phone}
			/>

			<Pressable 
				style={styles.editButton}
			>
				<Text style={styles.editButtonText}>Editar</Text>
			</Pressable>

			<Pressable 
				style={styles.editButton}
				onPress={() => console.log('Cerrar sesión')}
			>
				<MaterialCommunityIcons style ={{marginRight:10}} name="logout" size={20} color="white" />
				<Text style={styles.editButtonText}>Cerrar sesión</Text>
			</Pressable>

		</ScrollView>


    </View>

      
  )
}
