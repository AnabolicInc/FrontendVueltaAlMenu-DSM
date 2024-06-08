import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { AdminProductNavigatorParamList } from '../../../../navigation/tabs/admin/AdminProductNavigator';

import styles from './Styles';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';
import { FontAwesome6 } from '@expo/vector-icons';



interface Props extends StackScreenProps<AdminProductNavigatorParamList, 'ProductUpdateScreen'> {} 

export const ProductUpdateScreen = ({ navigation, route }: Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

  const  {
    onChange, 
    takePhoto,
    pickImage,
    updateProduct,
    image,
    name,
    description,
    price,
    quantity,
    
  } = useViewModel(route);

  const handleProductUpdate = async () => {
    updateProduct(); 
    navigation.goBack();
  }

  return (
    <View style={styles.productUpdateContainer}>
      
      <Image style={styles.productUpdateImageContainer} source={require('../../../../../../assets/images/pizza.jpg')}/>
      <View style={styles.opacityContainer}>

        <Text style={styles.productUpdateNameText}> {name} </Text>
        <Text style={styles.productUpdateDescriptionText} > {description}</Text>

      </View>

      <View style={styles.buttonBack}> 
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome6 name="chevron-left" size={24} color= {COLORS.borderContainerGrayRGBA} />
        </Pressable>
      </View>
      <View style={styles.productUpdateInnerContainer}>

        
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
          onChangeText={(text) => onChange('price', text.toUpperCase())}
          maxLength={15}
        />

        <TextInput 
          style={styles.quantityInput}
          placeholder="Cantidad"
          keyboardType='numeric'
          placeholderTextColor={COLORS.primaryOrange} 
          onChangeText={(text) => onChange('quantity', text.toUpperCase())}
          maxLength={15}
        />


        <View style={styles.buttonSave}> 
          <Pressable onPress={() => {handleProductUpdate()}}>
            <Text style={styles.saveText}>GUARDAR</Text>
          </Pressable>
        </View>

      </View>


      <ModalPickImage 
        modalUseState = {modalVisible} 
        setModalUseState={setModalVisible} 
        openGallery={pickImage}
        openCamera={takePhoto}
      />

    </View>
  )
}
export default ProductUpdateScreen;