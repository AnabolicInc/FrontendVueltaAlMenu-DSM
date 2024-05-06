import { View, Text, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { UserInfo } from '../../../components/UserInfo';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { RootAdminBottomTabParamList } from '../../../navigation/tabs/admin/AdminBottomTab';
import { AuthContext } from '../../../context/auth/AuthContext';
import { RootStackParamList } from '../../../navigation/MainAppStack';
import useViewModel from './ViewModel';

interface Props extends StackScreenProps<RootStackParamList, 'AdminBottomTab'> {};


export const ProfileInfoScreen = ({ navigation,route }: Props) => {
	const {status} = useContext(AuthContext);
	const { user, logoutUser} = useViewModel();
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
				onPress={() => navigation.navigate('ProfileUpdateScreen')}
			>
				<Text style={styles.editButtonText}>Editar</Text>
			</Pressable>

			<Pressable 
				style={styles.editButton}
				onPress={logoutUser}
			>
				<MaterialCommunityIcons style ={{marginRight:10}} name="logout" size={20} color="white" />
				<Text style={styles.editButtonText}>Cerrar sesión</Text>
			</Pressable>

		</ScrollView>


    </View>

      
  )
}
