import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';

import styles from './Styles';
import { UserInfo } from '../../components/UserInfo';
import useViewModel from './ViewModel';




interface Props extends StackScreenProps<RootStackParamList, 'ProfileScreen'> {}

const ProfileScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.profileContainer}>
		<Image style={styles.backButton} source={require('../../../../assets/images/leftButton.png')} />
		<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} />
		
		<Text style={styles.mainText}>Perfil de usuario</Text>
		<ScrollView style={styles.profileInnerContainer}>

			<UserInfo textCard = 'Nombre completo' dataUser = 'Data here'/>
			<UserInfo textCard = 'Correo electrónico' dataUser = 'Data here'/>
			<UserInfo textCard = 'Teléfono' dataUser = 'Data here'/>
			<UserInfo textCard = 'Imagen de perfil' dataUser = 'Data here'/>

		</ScrollView>

    </View>

      
  )
};

export default ProfileScreen;
