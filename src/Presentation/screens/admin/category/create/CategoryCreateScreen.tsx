import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';


import styles from './Styles';
import NewCategoryInfo from '../../../../components/NewCategoryInfo';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';


interface Props extends StackScreenProps<RootStackParamList, 'CategoryCreateScreen'> {}

export const CategoryCreateScreen = ({ navigation,route }: Props) => {

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

  const handleCategoryCreate = async () => {
    await createCategory();
  }


  return (
    <View style={styles.categoryCreateContainer}>
      <ScrollView style={styles.categoryCreateInnerContainer} showsVerticalScrollIndicator = {false}>
      <Text style={styles.categoryCreateText}>CREAR CATEGORÍA</Text>
      {
          (image == '')
          ?
          <Image style={styles.categoryCreateUserImage} source={require('../../../../../../assets/images/userIcon.png')} />
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
            />

        <TextInput 
                style={styles.descriptionInput}
                placeholder="Descripción"
                value = {description} 
                placeholderTextColor={COLORS.primaryOrange} 
                onChangeText={(text) => onChange('description', text)}
                multiline={true}
            />
      
        <View style={styles.buttonSave}> 
        <Pressable onPressIn={handleCategoryCreate}> 
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

export default CategoryCreateScreen