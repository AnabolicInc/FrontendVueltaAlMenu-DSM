import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { AdminProductNavigatorParamList } from '../../../../navigation/tabs/admin/AdminProductNavigator';

import styles from './Styles';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';
import { ModalPickProductImage } from '../../../../components/ModalPickProductImage';



interface Props extends StackScreenProps<AdminProductNavigatorParamList, 'ProductUpdateScreen'> { }

export const ProductUpdateScreen = ({ navigation, route }: Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

  const {
    onChange,
    takePhoto,
    pickImage,
    updateProduct,
    name,
    description,
    image1,
    image2,
    image3,
    price,
    quantity,

  } = useViewModel(route);

  const [numberImage, setNumberImage] = useState<number>(0);

  const handleProductUpdate = async () => {
    updateProduct();
    navigation.goBack();
  }

  return (
    <View style={styles.productUpdateContainer}>

      <ScrollView style={styles.productImagesContainer} horizontal showsHorizontalScrollIndicator = {false}>

        <View style={styles.productImagesContainer} >
          <Image source={{ uri: image1 }} style={styles.productImages} />
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productDescription}>{description}</Text>
          </View>
          <Pressable style={styles.buttonEdit} onPress={() => { setNumberImage(1), setModalVisible(true) }}>
            <Text style={styles.changeImageButtonText}>Cambiar imagen</Text>
          </Pressable>
        </View>

        <View style={styles.productImagesContainer} >
          <Image source={{ uri: image2 }} style={styles.productImages} />
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productDescription}>{description}</Text>
          </View>
          <Pressable style={styles.buttonEdit} onPress={() => { setNumberImage(2), setModalVisible(true) }}>
            <Text style={styles.changeImageButtonText}>Cambiar imagen</Text>
          </Pressable>
        </View>

        <View style={styles.productImagesContainer} >
          <Image source={{ uri: image3 }} style={styles.productImages} />
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productDescription}>{description}</Text>
          </View>
          <Pressable style={styles.buttonEdit} onPress={() => { setNumberImage(3), setModalVisible(true) }}>
            <Text style={styles.changeImageButtonText}>Cambiar imagen</Text>
          </Pressable>
        </View>


      </ScrollView>

      <Text style={styles.productUpdateText}>Editar producto</Text>

      <View style={styles.textInputsContainer}>
        <TextInput
          style={styles.nameInput}
          placeholder="Nombre"
          value={name}
          placeholderTextColor={COLORS.primaryOrange}
          onChangeText={(text) => onChange('name', text.toUpperCase())}
          maxLength={15}
        />

        <TextInput
          style={styles.descriptionInput}
          placeholder="Descripción"
          value={description}
          placeholderTextColor={COLORS.primaryOrange}
          onChangeText={(text) => onChange('description', text)}
          maxLength={50}
        />

        <TextInput
          style={styles.priceInput}
          placeholder="Precio"
          keyboardType='numeric'
          placeholderTextColor={COLORS.primaryOrange}
          onChangeText={(text) => onChange('price', text)}
          maxLength={15}
        />
        <TextInput
          style={styles.quantityInput}
          placeholder="Cantidad"
          keyboardType='numeric'
          placeholderTextColor={COLORS.primaryOrange}
          onChangeText={(text) => onChange('quantity', text)}
          maxLength={15}
        />
        <Pressable style={styles.saveButton} onPress={() => { handleProductUpdate() }}>
          <Text style={styles.saveText}>Actualizar</Text>
        </Pressable>

        <Pressable style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </Pressable>
      </View>

      <ModalPickProductImage
        openGallery={pickImage}
        openCamera={takePhoto}
        numberImage={numberImage}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />

    </View >
  )
}
export default ProductUpdateScreen;