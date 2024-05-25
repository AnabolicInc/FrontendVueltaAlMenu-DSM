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
    image1,
    image2,
    image3,
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
    // Validar si ya hay 3 imágenes seleccionadas
    if (image1 && image2 && image3) {
      showMessage({
        message: "Error",
        description: "Solo se pueden seleccionar hasta 3 imágenes",
        type: 'danger',
        icon: 'danger',
      });
    } else {
      setModalVisible(true); // Mostrar el modal al presionar el botón para seleccionar una imagen
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Productos</Text>

        <View style={styles.imageContainer}>
          {/* Mostrar la imagen 1 */}
          <Image source={image1 ? { uri: image1 } : require('../../../../../../assets/images/imagesIcon.png')} style={styles.userImage} />

          {/* Mostrar la imagen 2 si existe */}
          {image2 && (
            <Image source={{ uri: image2 }} style={styles.userImage} />
          )}

          {/* Mostrar la imagen 3 si existe */}
          {image3 && (
            <Image source={{ uri: image3 }} style={styles.userImage} />
          )}
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
          <Pressable onPress={createNewProduct}>
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
