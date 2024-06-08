import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../../../navigation/MainAppStack';
import { View, Text, Image, TextInput, Pressable, ScrollView, Alert } from 'react-native'; // Importar Alert desde react-native
import { ModalPickImage } from '../../../../components/ModalPickImage';
import CreateNewProductViewModel from './ViewModel';
import styles from './Styles';
import { showMessage } from 'react-native-flash-message';

interface Props extends StackScreenProps<RootStackParamList, 'CreateNewProductScreen'> { }

export const CreateNewProductScreen = ({ navigation, route }: Props) => {

	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const {
		images,
		name,
		description,
		price,
		quantity,
		onChange,
		pickImage,
		takePhoto,
		createNewProduct,
		loading,
		errorMessages,
		hasNonNumber,
	} = CreateNewProductViewModel();

	const handlePickImage = async () => {
		console.log('Pick image button pressed');
		if (images.length >= 3) {
			showMessage({
				message: "Error",
				description: "Solo se pueden seleccionar hasta 3 imágenes",
				type: 'danger',
				icon: 'danger',
			});
		} else {
			setModalVisible(true);
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.innerContainer} showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Productos</Text>

				<View style={styles.imageContainer}>
				{images.map((image, index) => (
						<Image key={index} source={{ uri: image }} style={styles.userImage} />
					))}
				</View>

				<Pressable style={styles.imageButton} onPress={handlePickImage}>
					<Text style={styles.imageButtonText}>Seleccione las imágenes</Text>
				</Pressable>

				{/* Resto del contenido de la pantalla */}
				{['Nombre', 'Descripción', 'Precio', 'Cantidad'].map((placeholder, index) => (
					<View key={index} style={styles.inputContainer}>
						<Text style={styles.inputLabel}>{placeholder}</Text>
						<TextInput
							style={styles.input}
							placeholder={`Ingrese ${placeholder.toLowerCase()}`}
							placeholderTextColor="grey"
							value={
								index === 0
									? name
									: index === 1
										? description
										: index === 2
											? price
											: quantity
							}
							onChangeText={(text) =>
								onChange(index === 0 ? 'name' : index === 1 ? 'description' : index === 2 ? 'price' : 'quantity', text)
							}
							keyboardType={index === 2 || index === 3 ? 'numeric' : 'default'}
							multiline={index === 1}
						/>
						{errorMessages[
							index === 0 ? 'name' : index === 1 ? 'description' : index === 2 ? 'price' : 'quantity'
						] && (
								<Text style={styles.errorText}>
									{errorMessages[
										index === 0 ? 'name' : index === 1 ? 'description' : index === 2 ? 'price' : 'quantity'
									]}
								</Text>
							)}
						{(index === 2 || index === 3) && hasNonNumber[
							index === 2 ? 'price' : 'quantity'
						] && (
								<Text style={styles.errorText}>
									El campo {placeholder.toLowerCase()} debe contener solo números.
								</Text>
							)}
					</View>
				))}

				<View style={styles.buttonSave}>
					<Pressable onPress={() => {
						createNewProduct();
						navigation.goBack();
					}}>
						<Text style={styles.saveText}>Guardar</Text>
					</Pressable>
				</View>
			</ScrollView>

			{/* Agregar el componente ModalPickImage para la selección de imágenes */}
			<ModalPickImage
				modalUseState={modalVisible}
				setModalUseState={setModalVisible}
				openGallery={pickImage}
				openCamera={takePhoto}
			/>
		</View>
	);
};

export default CreateNewProductScreen;
