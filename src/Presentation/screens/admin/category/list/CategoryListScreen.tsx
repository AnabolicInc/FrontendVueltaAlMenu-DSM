import { View, Text, ScrollView, Image, Pressable, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';


import { RootStackParamList } from '../../../../navigation/MainAppStack';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import CategoryListBox from '../../../../components/CategoryListBox';
import { COLORS } from '../../../../themes/Theme';
import useViewModel from './ViewModel';



interface Props extends StackScreenProps<RootStackParamList, 'CategoryListScreen'> { }

export const CategoryListScreen = ({ navigation, route }: Props) => {

  const { categories } = useViewModel();

  // Ventana emergente
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null); // Almacenar lo que se va a eliminar

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



      {/* source={require('../../../../../../assets/images/pizza.jpg' */}
      
      <FlatList
        data={categories}
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
                <Image style={styles.categoryListImage} source={require('../../../../../../assets/images/pizza.jpg')}/>
              }


              <View style={styles.categoryListInnerElement}>
                <Text style={styles.categoryListElementText}>{item.name}</Text>

                <View style={styles.categoryListInnerInnerElement}>
                  <View style={styles.buttonEdit}>
                    <Pressable onPress={() => navigation.navigate('CategoryUpdateScreen')}>
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

      {/* <ScrollView style={styles.categoryListInnerContainer} showsVerticalScrollIndicator = {false}> */}

      {/* <CategoryListBox navigation={navigation} /> */}


      {/* <LinearGradient
        colors={[COLORS.primaryGrey, 'transparent']}
        style={styles.categoryListElement}>
          <Image style={styles.categoryListImage} source={require('../../../../../../assets/images/pizza.jpg')} />

          <View style={styles.categoryListInnerElement}>
            <Text style={styles.categoryListElementText}>Pizza</Text>

            <View style={styles.categoryListInnerInnerElement}>
              <View style={styles.buttonEdit}> 
                <Pressable onPress={() => navigation.navigate('CategoryUpdateScreen')}> 
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
      </LinearGradient> */}






      <View style={styles.buttonSave}>
        <Pressable onPress={() => null}>
          <Text style={styles.saveText}>GUARDAR</Text>
        </Pressable>
      </View>

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