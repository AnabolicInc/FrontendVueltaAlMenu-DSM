import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';

import styles from './Styles';
import { UserInfoTemplate } from '../../components/UserInfoTemplate';




interface Props extends StackScreenProps<RootStackParamList, 'ProfileScreen'> {}

const ProfileScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.profileContainer}>
		<Image style={styles.backButton} source={require('../../../../assets/images/leftButton.png')} />
		<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} />
		
		<Text style={styles.mainText}>Perfil de usuario</Text>
		<ScrollView style={styles.profileInnerContainer}>

			<UserInfoTemplate textCard = 'Nombre completo' dataUser = 'Data here'/>
			<UserInfoTemplate textCard = 'Correo electrónico' dataUser = 'Data here'/>
			<UserInfoTemplate textCard = 'Teléfono' dataUser = 'Data here'/>
			<UserInfoTemplate textCard = 'Imagen de perfil' dataUser = 'Data here'/>

		</ScrollView>

    </View>

      
  )
};

export default ProfileScreen;
