import { View, Text, Image, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { AdminProductNavigatorParamList } from '../../../../navigation/tabs/admin/AdminProductNavigator';

import styles from './Styles';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';



interface Props extends StackScreenProps<AdminProductNavigatorParamList, 'ProductUpdateScreen'> { }

export const ProductUpdateScreen = ({ navigation, route }: Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

  const {
    onChange,
    takePhoto,
    pickImage,
    updateProduct,
    images,
    name,
    description,
    price,
    quantity,

  } = useViewModel(route);

  const handleProductUpdate = async () => {
    updateProduct();
    navigation.goBack();
  }

  const imagess = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    }
  ];

  return (
    <View style={styles.productUpdateContainer}>


      <FlatList
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={420}
        data={imagess}
        horizontal={true}
        keyExtractor={(item) => item.original}
        renderItem={({ item }) => (

          <View style={styles.productImagesContainer}>
            {item.original ? (
              <Image style={styles.productImages} source={{ uri: item.original }} />
            ) : (
              <Image style={styles.productImages} source={require('../../../../../../assets/images/category.png')} />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.productDescription}>{description}</Text>
            </View>
            
            <Pressable style={styles.buttonEdit} onPress={() => setModalVisible(true)}>
              <Text style={styles.changeImageButtonText}>Cambiar imagen</Text>
            </Pressable>


          </View>
        )}
      />
      <Text style={styles.productUpdateText}>Editar producto</Text>

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

      <ModalPickImage
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
        openGallery={pickImage}
        openCamera={takePhoto}
      />

    </View>
  )
}
export default ProductUpdateScreen;