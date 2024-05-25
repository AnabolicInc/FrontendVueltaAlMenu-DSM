import { View, Text, ScrollView, Image, Pressable, Modal, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';


import { AdminCategoryNavigatorParamList } from '../../../../navigation/tabs/admin/AdminCategoryNavigator';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import CategoryListBox from '../../../../components/CategoryListBox';
import { COLORS } from '../../../../themes/Theme';
import useViewModel from './ViewModel';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Category } from '../../../../../Domain/entities/Category';



interface Props extends StackScreenProps<AdminCategoryNavigatorParamList, 'CategoryListScreen'> { }

export const CategoryListScreen = ({navigation, route}:Props) => {

  const { 
    categories,
    deleteCategory
  } = useViewModel();

  // Ventana emergente
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDeleteName, setItemToDeleteName] = useState<any>(null);
  const [itemToDelete, setItemToDelete] = useState<any>(null); // Almacenar lo que se va a eliminar

  //---------------------------------------------------------------------------------------
  const handleDeletePress = (categoryItem: Category, categoryName: string) => {
    setItemToDelete(categoryItem);
    setItemToDeleteName(categoryName);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Item to delete:", itemToDelete);
    deleteCategory(itemToDelete.id);
    setShowDeleteConfirmation(false);
    // Funcionalidad para eliminar
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <View style={styles.categoryListContainer}>

      <Text style={styles.categoryListTittle}>CATEGORÍAS</Text>
      
      {
        categories.length === 0
        ?
        <Text style={styles.noCategoryListText}>No hay categorías para mostar</Text>
        :
        <FlatList 
          style={styles.categoryListInnerContainer} showsVerticalScrollIndicator = {false}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
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


              <View style={styles.categoryListText}>

                <Text style={styles.categoryListElementName}>{item.name}</Text>            
                <Text style={styles.categoryListElementDescription}>
                {
                  item.description.length > 18
                  ? item.description.match(/.{1,18}/g).join('-\n')
                  : item.description
                }
                </Text>
                
              </View>

              <View style={styles.categoryListOptions}>

                  <View style={styles.buttonEdit}>
                    <Pressable onPress={() => navigation.navigate('CategoryUpdateScreen',{categoryItem: item})}>
                      <FontAwesome6 name="pen-to-square" size={24} color="#D17842" />
                    </Pressable>
                  </View>

                  <View style={styles.buttonDelete}>
                    <Pressable onPress={() => handleDeletePress(item, item.name)}>
                      <FontAwesome6 name="trash-can" size={24} color="#ce2029" />
                    </Pressable>
                  </View>

                </View>
            </LinearGradient>
          )
        }}
      
      />}

      <View style={styles.buttonAdd}>
        <Pressable onPress={() => navigation.navigate('CategoryCreateScreen')}>
          <Text style={styles.saveText}>NUEVA CATEGORÍA</Text>
        </Pressable>
      </View>


{/* //-------------------------------------------------------------------------------------------- */}
      {/* Delete confirmation modal */}
      <Modal 
        visible={showDeleteConfirmation} 
        animationType="slide" 
        transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalMessageBox}>
              <Text style={styles.modalMessageText}>¿Estás seguro de que deseas eliminar la categoría de {itemToDeleteName}?</Text>
            </View>

            <View style={styles.modalButtonsContainer}>

              <Pressable 
              style={styles.modalButtonDelete} onPress={() =>handleDeleteConfirm()} >
                
                <View style={styles.modalButtonImageContainer}>
                  <FontAwesome6 name="trash-can" size={24} color="#ce2029" />
                </View>
                <Text style={styles.modalButtonText}>Eliminar</Text>
              </Pressable>

              <Pressable onPress={() => handleDeleteCancel()} style={styles.modalButtonCancel}>
                <View style={styles.modalButtonImageContainer}>
                  <MaterialIcons name="cancel" size={24} color="#ffffff" />
                </View>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </Pressable>

            </View>
          </View>
      </Modal>
    </View>


  )
}