import { View, Text, ScrollView, Image, Pressable, Modal, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';


import { RootStackParamList } from '../../../../navigation/MainAppStack';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import CategoryListBox from '../../../../components/CategoryListBox';
import { COLORS } from '../../../../themes/Theme';
import useViewModel from './ViewModel';
import { useFocusEffect } from '@react-navigation/native';



interface Props extends StackScreenProps<RootStackParamList, 'CategoryListScreen'> { }

export const CategoryListScreen = ({ navigation, route }: Props) => {

  const { 
    categories 
  } = useViewModel();

  
  

  // Ventana emergente
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null); // Almacenar lo que se va a eliminar

  // Actualizar categorías
  //const [newCategory, setNewCategory] = useState<boolean>(false);

//    useEffect(() => {
//      getCategories()
//  }, [])



  //---------------------------------------------------------------------------------------
  const handleDeletePress = (item: any) => {
    setItemToDelete(item);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Item to delete:", itemToDelete);
    setShowDeleteConfirmation(false);
    // Funcionalidad para eliminar
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };
  

  return (
    <View style={styles.categoryListContainer}>
      <Text style={styles.categoryListText}>CATEGORÍAS</Text>

      <FlatList 
        style={styles.categoryListInnerContainer} showsVerticalScrollIndicator = {false}
        data={categories}
        renderItem={({item}) => {

          
          const words = item.description.split(' ');
          const midIndex = Math.floor(words.length / 2);
          
          return (
            
            <LinearGradient
              colors={[COLORS.primaryGrey, 'transparent']}
              style={styles.categoryListElement}>
              
              {
                item.image 
                ? 
                <Image style={styles.categoryListImage} source={{uri: item.image}} />
                :
                <Image style={styles.categoryListImage} source={require('../../../../../../assets/images/category.png')}/>
              }


              <View style={styles.categoryListInnerElement}>
                <Text style={styles.categoryListElementTittle}>{item.name}</Text>
                
                <Text style={styles.categoryListElementDescription}>
                  {
                    item.description.length > 30
                    ? item.description.split(' ').slice(0, midIndex).join(' ') + '\n' + item.description.split(' ').slice(midIndex).join(' ')
                    : item.description
                  }
                </Text>

                <View style={styles.categoryListInnerInnerElement}>
                  <View style={styles.buttonEdit}>
                    <Pressable onPress={() => navigation.navigate('CategoryUpdateScreen', { categoryItem: item })}>
                      <Text style={styles.editText}>Editar producto</Text>
                    </Pressable>
                  </View>

                  <View style={styles.buttonDelete}>
                    <Pressable onPress={() => handleDeletePress("pizza")}>
                      <FontAwesome6 name="trash-can" size={24} color="#ce2029" />
                    </Pressable>
                  </View>
                </View>
              </View>
            </LinearGradient>
          )
        }}
        keyExtractor={item => item.id}
      
      />

      <View style={styles.buttonAdd}>
        <Pressable onPress={() => navigation.navigate('CategoryCreateScreen')}>
          <Text style={styles.saveText}>NUEVA CATEGORÍA</Text>
        </Pressable>
      </View>

      {/* Delete confirmation modal */}
      <Modal visible={showDeleteConfirmation} animationType="fade" transparent>
        <LinearGradient
          colors={[COLORS.primaryGrey, COLORS.generalBackgroundBlack]}
          style={styles.modalContent}>
          <Text style={styles.modalText}>¿Estás seguro de que quieres eliminar {itemToDelete}?</Text>
          <View style={styles.modalButtonsContainer}>
            <View style={styles.modalButtonDelete}>
              <Pressable onPress={handleDeleteConfirm}>
                <Text style={styles.modalButton}>Eliminar</Text>
              </Pressable>
            </View>
            <View style={styles.modalButtonCancel}>
              <Pressable onPress={handleDeleteCancel}>
                <Text style={styles.modalButton}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </Modal>

    </View>


  )
}

export default CategoryListScreen