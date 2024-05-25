import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { AdminCategoryNavigatorParamList } from '../../../../navigation/tabs/admin/AdminCategoryNavigator';


import styles from './Styles';
import NewCategoryInfo from '../../../../components/NewCategoryInfo';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';
import CategoryListViewModel from '../list/ViewModel';
import { get } from 'http';


interface Props extends StackScreenProps<AdminCategoryNavigatorParamList, 'CategoryCreateScreen'> {}

export const CategoryCreateScreen = ({navigation, route}:Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

  const  {
    onChange, 
    takePhoto,
    pickImage,
    image,
    createCategory,
    name,
    description
  } = useViewModel();

  const handleCategoryCreate = () => {
    createCategory();
  }


  return (
    <View style={styles.categoryCreateContainer}>
      <ScrollView style={styles.categoryCreateInnerContainer} showsVerticalScrollIndicator = {false}>
      <Text style={styles.categoryCreateText}>CREAR CATEGORÍA</Text>
      {
          (image == '')
          ?
          <Image style={styles.categoryCreateUserImage} source={require('../../../../../../assets/images/category.png')} />
          :
          <Image style={styles.categoryCreateUserImage} source={{uri:image}} />

        }

      <Pressable style={styles.uploadImageButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.uploadImageButtonText}>Subir imagen</Text>
      </Pressable>

        <TextInput 
                style={styles.nameInput}
                placeholder="Nombre"
                value = {name} 
                placeholderTextColor={COLORS.primaryOrange} 
                onChangeText={(text) => onChange('name', text)}
                maxLength={10}
            />

        <TextInput 
                style={styles.descriptionInput}
                placeholder="Descripción"
                value = {description} 
                placeholderTextColor={COLORS.primaryOrange} 
                onChangeText={(text) => onChange('description', text)}
                maxLength={50}
        />
        
        <View style={styles.buttonSave}> 
        <Pressable onPress={ () => {
            handleCategoryCreate(); navigation.goBack();}}> 
          <Text style={styles.saveText}>AÑADIR</Text>
        </Pressable>
        </View>

        </ScrollView>


        <ModalPickImage 
            modalUseState = {modalVisible} 
            setModalUseState={setModalVisible} 
            openGallery={pickImage}
            openCamera={takePhoto}
        />
        
    </View>
  )
}