import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles';
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';
import { Dimensions } from 'react-native';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryUpdateScreen'> {}

export const CategoryUpdateScreen = ({ navigation,route }: Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error


  const  {
    onChange, 
    takePhoto,
    pickImage,
    image,
} = useViewModel();


  return (
    <View style={styles.CategoryUpdateContainer}>
      <ScrollView style={styles.CategoryUpdateInnerContainer} showsVerticalScrollIndicator = {false}>
        <Text style={styles.CategoryUpdateText}>EDITAR CATEGORÍA</Text>
        {
          (image == '')
          ?
          <Image style={styles.categoryUpdateUserImage} source={require('../../../../../../assets/images/userIcon.png')} />
          :
          <Image style={styles.categoryUpdateUserImage} source={{uri:image}} />

        }

        <Pressable style={styles.uploadImageButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.uploadImageButtonText}>Subir imagen</Text>
        </Pressable>

        <TextInput 
          style={styles.nameInput}
          placeholder="Nombre"
          placeholderTextColor={'#D17842'} 
          onChangeText={(text) => console.log(text)}
        />

        <TextInput 
          style={styles.DescriptionInput}
          placeholder="Descripción"
          placeholderTextColor={'#D17842'} 
          onChangeText={(text) => console.log(text)}
          multiline={true}
        />


        <View style={styles.buttomSave}> 
          <Pressable onPress={() => navigation.goBack()}> 
            <Text style={styles.SaveText}>GUARDAR</Text>
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