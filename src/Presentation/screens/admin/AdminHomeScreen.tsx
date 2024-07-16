import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground, Pressable } from 'react-native'
import { TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
//import the dependency to create a search bar
import { AdminTopTab } from '../../navigation/tabs/admin/AdminTopTab';

import { useFonts } from 'expo-font';
import { AuthContext } from '../../context/auth/AuthContext';
import { RootAdminBottomTabParamList } from '../../navigation/tabs/admin/AdminBottomTab';
import styles from './Styles';
import { OrderCardComponent } from '../../components/OrderCardComponent';

interface Props extends StackScreenProps<RootAdminBottomTabParamList, 'AdminHomeScreen'> { }






export const AdminHomeScreen = ({ navigation, route }: Props) => {


	const { status, user } = useContext(AuthContext);
	return (

		<View style={styles.container}>
			{
				user === null ? (
					<Text style={styles.welcomeText}>Hasta pronto.</Text>
				) : <Text style={styles.welcomeText}>¡Un placer verte de nuevo, {user.name}!</Text>
			}


			{/* <AdminTopTab /> */}

			{/* <View style={styles.topBar}>
				<TouchableOpacity onPress={() => console.log('PENDING')} style={[styles.topBarButton]}>
					<Text style={styles.topBarText}>Pendiente</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => console.log('DISPATCHED')} style={[styles.topBarButton]}>
					<Text style={styles.topBarText}>Despachado</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => console.log('IN_TRANSIT')} style={[styles.topBarButton]}>
					<Text style={styles.topBarText}>En Camino</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => console.log('DELIVERED')} style={[styles.topBarButton]}>
					<Text style={styles.topBarText}>Entregado</Text>
				</TouchableOpacity>
			</View> */}
			
			{/* <OrderCardComponent customStyle={{ top: "10%" }} /> */}

		</View>

	)
}


export default AdminHomeScreen;