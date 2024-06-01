import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { AdminCategoryNavigatorParamList } from '../../../../navigation/tabs/admin/AdminCategoryNavigator';


import styles from './Styles';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';
import { ActivityIndicator } from 'react-native-paper';


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
    description,
    loading
  } = useViewModel(route);

  const handleCategoryUpdate = async () => {
    updateCategory(); 
    navigation.goBack();
  }

  return (
    <View style={styles.categoryUpdateContainer}>
      <ScrollView style={styles.categoryUpdateInnerContainer} showsVerticalScrollIndicator = {false}>
        
        <View>
          
          {
            (image == '' || image == null)
            ?
            <Image style={styles.categoryUpdateUserImage} source={require('../../../../../../assets/images/category.png')} />
            :
            <Image style={styles.categoryUpdateUserImage} source={{uri: image}} />
            
          }
          <View style={styles.textContainer}>
            <Text style={styles.categoryName}>{name}</Text>
            <Text style={styles.categoryDescription}>{description}</Text> 
          </View>
        </View>
        
        
        <Text style={styles.categoryUpdateText}>Editar categoría</Text>
        

        <Pressable style={styles.uploadImageButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.uploadImageButtonText}>Subir imagen</Text>
        </Pressable>

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


        <View style={styles.saveButton}> 
          <Pressable onPress={() => {handleCategoryUpdate()}}>
            <Text style={styles.saveText}>Actualizar</Text>
          </Pressable>
        </View>

        <View style={styles.cancelButton}> 
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
        </View>

      </ScrollView>


      <ModalPickImage 
            modalUseState = {modalVisible} 
            setModalUseState={setModalVisible} 
            openGallery={pickImage}
            openCamera={takePhoto}
      />
      
      {loading &&(

      <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#D17842" />
      </View>

      )}

    </View>
  )
}

export default CategoryUpdateScreen