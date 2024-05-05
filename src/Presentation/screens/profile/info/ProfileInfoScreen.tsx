import { View, Text, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { UserInfo } from '../../../components/UserInfo';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { RootBottomTabParamList } from '../../../navigation/tabs/client/ClientBottomTab';



interface Props extends StackScreenProps<RootBottomTabParamList, 'ProfileInfoScreen'> {};


export const ProfileInfoScreen = ({ navigation,route }: Props) => {
  return (
    <View style={styles.profileContainer}>
		<Image style={styles.backButton} source={require('../../../../../assets/images/leftButton.png')} />
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

			<Pressable 
				style={styles.editButton}
			>
				<MaterialCommunityIcons style ={{marginRight:10}} name="logout" size={20} color="white" />
				<Text style={styles.editButtonText}>Cerrar sesión</Text>
			</Pressable>

		</ScrollView>


    </View>

      
  )
}
