import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { AdminCategoryNavigatorParamList } from '../../../../navigation/tabs/admin/AdminCategoryNavigator';


import styles from './Styles';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';
import { FontAwesome6 } from '@expo/vector-icons';
import { RootStackParamList } from '../../../../navigation/MainAppStack';


interface Props extends StackScreenProps<AdminCategoryNavigatorParamList, 'CategoryUpdateScreen'> {} // FIX: ESTO DEBE SER MODIFICADO POR EL NOMBRE DE LA RUTA DE ESTA PANTALLA

export const ProductUpdateScreen = ({ navigation, route }: Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

  const  {
    onChange, 
    takePhoto,
    pickImage,
    updateCategory,
    
  } = useViewModel(route);


  return (
    <View style={styles.productUpdateContainer}>
      
      <Image style={styles.productUpdateImageContainer} source={require('../../../../../../assets/images/pizza.jpg')}/>
      <View style={styles.opacityContainer}>

        <Text style={styles.productUpdateNameText}> Nombre </Text>
        <Text style={styles.productUpdateDescriptionText} > Esta es la description y tiene más texto</Text>

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
          
          placeholderTextColor={COLORS.primaryOrange} 
          onChangeText={(text) => onChange('name', text.toUpperCase())}
          maxLength={15}
        />

        <TextInput 
          style={styles.descriptionInput}
          placeholder="Descripción"
          placeholderTextColor={COLORS.primaryOrange} 
          onChangeText={(text) => onChange('description', text)}
          maxLength={50}
          
        />

        <TextInput 
          style={styles.priceInput}
          placeholder="Precio"
          
          placeholderTextColor={COLORS.primaryOrange} 
          onChangeText={(text) => onChange('name', text.toUpperCase())}
          maxLength={15}
        />

        <TextInput 
          style={styles.amountInput}
          placeholder="Cantidad"
          
          placeholderTextColor={COLORS.primaryOrange} 
          onChangeText={(text) => onChange('name', text.toUpperCase())}
          maxLength={15}
        />


        <View style={styles.buttonSave}> 
          <Pressable onPress={() => {updateCategory(); navigation.goBack();}}>
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