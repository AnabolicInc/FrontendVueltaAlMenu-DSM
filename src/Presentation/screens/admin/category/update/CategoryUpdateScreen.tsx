import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { AdminCategoryNavigatorParamList } from '../../../../navigation/tabs/admin/AdminCategoryNavigator';


import styles from './Styles';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';


interface Props extends StackScreenProps<AdminCategoryNavigatorParamList, 'CategoryUpdateScreen'> {}

export const CategoryUpdateScreen = ({ navigation, route }: Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

  const  {
    onChange, 
    takePhoto,
    pickImage,
    updateCategory,
    image,
    name,
    description
  } = useViewModel(route);


  return (
    <View style={styles.categoryUpdateContainer}>
      <ScrollView style={styles.categoryUpdateInnerContainer} showsVerticalScrollIndicator = {false}>
        <Text style={styles.categoryUpdateText}>EDITAR CATEGORÍA</Text>
        {
          (image == '' || image == null)
          ?
          <Image style={styles.categoryUpdateUserImage} source={require('../../../../../../assets/images/category.png')} />
          :
          <Image style={styles.categoryUpdateUserImage} source={{uri: image}} />

        }

        <Pressable style={styles.uploadImageButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.uploadImageButtonText}>Subir imagen</Text>
        </Pressable>

        <TextInput 
          style={styles.nameInput}
          placeholder="Nombre"
          value={name}
          placeholderTextColor={COLORS.primaryOrange} 
          onChangeText={(text) => onChange('name', text)}
        />

        <TextInput 
          style={styles.descriptionInput}
          placeholder="Descripción"
          value={description}
          placeholderTextColor={COLORS.primaryOrange} 
          onChangeText={(text) => onChange('description', text)}
          multiline={true}
        />


        <View style={styles.buttonSave}> 
          <Pressable onPress={() => {updateCategory(); navigation.goBack();}}>
            <Text style={styles.saveText}>GUARDAR</Text>
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

export default CategoryUpdateScreen