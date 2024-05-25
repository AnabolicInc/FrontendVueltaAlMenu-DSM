import { View, Text, TouchableOpacity, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './Styles'
import useViewModel from './ViewModel'
import { UserInfo } from '../../../components/UserInfo'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation/MainAppStack'
import { ModalPickImage } from '../../../components/ModalPickImage'
import { RootAdminBottomTabParamList } from '../../../navigation/tabs/admin/AdminBottomTab'

interface Props extends StackScreenProps<RootAdminBottomTabParamList, 'ProfileUpdateScreen'> {}

const ProfileUpdateScreen = ({ navigation }: Props) => {

	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const {
		name,
		lastName,
		image,
		phone,
		profile,
		errorMessages,
		file,
		loading,
		onChange,
		onChangeInfoUpdate,
		pickImage,
		takePhoto,
		updateUser,
		user
	} = useViewModel();

	useEffect(() => {
		onChangeInfoUpdate(user.name, user.lastName, user.phone)
	}, [user])


	return (
		<View style={styles.profileContainer}>


			<View style={styles.profileInnerContainer}>
				<Text style={styles.mainText}>Editar perfil</Text>
				<View style={styles.profileUpdateUserImageContainer}>
					<TouchableOpacity
						onPress={() => setModalVisible(true)}>
						{
							image == ''
								?
								<View>
									<Image
										style={styles.profileUpdateUserImage}
										source={{ uri: user?.image }}
									/>
									<Text style={styles.userImageText}>Seleccione una imagen</Text>
									{
										errorMessages.image && (
											<Text style={{
												...styles.userText, marginTop: 10, backgroundColor: '#ff7f7f', borderLeftWidth: 3,
												borderColor: '#993235',
												color: 'white',
												fontSize: 14,
												fontWeight: '600',
												marginVertical: 12,
												paddingVertical: 8,
												paddingHorizontal: 12,
											}}>{errorMessages.image}</Text>
										)
									}
								</View>
								:
								<Image
									style={styles.logo}
									source={{ uri: image }}
								/>
						}
					</TouchableOpacity>
				</View>

				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInputContainer}
						placeholder="Nombre"
						value={name}
						onChangeText={(text) => onChange('name', text)}
					/>

					{errorMessages.name && <Text style={styles.errorText}>{errorMessages.name}</Text>}

					<TextInput
						style={styles.textInputContainer}
						placeholder="Apellido"
						value={lastName}
						onChangeText={(text) => onChange('lastName', text)}
					/>
					{errorMessages.lastName && <Text style={styles.errorText}>{errorMessages.lastName}</Text>}

					<TextInput
						style={styles.textInputContainer}
						placeholder="Teléfono"
						keyboardType='number-pad'
						value={phone}
						onChangeText={(text) => onChange('phone', text)}
					/>
					{errorMessages.phone && <Text style={styles.errorText}>{errorMessages.phone}</Text>}

					

				</View>
				<View style={styles.buttonContainer}>
						<Pressable onPress={() => updateUser()}>
							<Text style={styles.editButton}>Guardar</Text>          
						</Pressable>

						<Pressable onPress={() => navigation.navigate('ChangePasswordScreen')}>
							<Text style={styles.editButton}>Cambiar contraseña</Text>
						</Pressable>
					</View>

			</View>

			<ModalPickImage
				openGallery={pickImage}
				openCamera={takePhoto}
				modalUseState={modalVisible}
				setModalUseState={setModalVisible}
			/>

			{
				loading && (
					<ActivityIndicator style={styles.loading} size={"large"} color={'#D17842'} />
				)
			}
		</View>
	)
}

export default ProfileUpdateScreen