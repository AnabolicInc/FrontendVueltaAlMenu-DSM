import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles';
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';
import NewCategoryInfo from '../../../../components/NewCategoryInfo';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';
import { create } from 'domain';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryCreateScreen'> {}

export const CategoryCreateScreen = ({ navigation,route }: Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error


  const  {
    onChange, 
    takePhoto,
    pickImage,
    image,
    createCategory
} = useViewModel();

  const handleCategoryCreate = async () => {
    await createCategory();
  }


  return (
    <View style={styles.CategoryCreateContainer}>
      <ScrollView style={styles.CategoryCreateInnerContainer} showsVerticalScrollIndicator = {false}>
      <Text style={styles.CategoryCreateText}>CREAR CATEGORÍA</Text>
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

      <NewCategoryInfo fieldLabel="Nombre" onChangeText={(text) => console.log(text)} />

        <TextInput 
                style={styles.DescriptionInput}
                placeholder="Descripción"
                placeholderTextColor={'#D17842'} 
                onChangeText={(text) => console.log(text)}
                multiline={true}
            />
      
        <View style={styles.buttomSave}> 
        <Pressable onPressIn={handleCategoryCreate}> 
            <Text style={styles.SaveText}>AÑADIR</Text>
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