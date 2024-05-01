import { View, Text, ScrollView, Image, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryListScreen'> {}

export const CategoryListScreen = ({ navigation,route }: Props) => {

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
    <View style={styles.CategoryListContainer}>
      <Text style={styles.CategoryListText}>CATEGORÍAS</Text>

      <ScrollView style={styles.categoryListInnerContainer} showsVerticalScrollIndicator = {false}>

      <LinearGradient
        colors={['#262B33', 'transparent']}
        style={styles.categoryListElement}>
        <View style={styles.categoryListElement}>
          <Image style={styles.categoryListImage} source={require('../../../../../../assets/images/burguer.jpg')} />
          <Text style={styles.categoryListElementText}>Hamburguesa</Text>

          <View style={styles.buttomEdit}> 
            <Pressable onPress={() => navigation.navigate('CategoryUpdateScreen')}> 
              <Text style={styles.editText}>Editar producto</Text>
            </Pressable>
          </View>

          <View style={styles.buttomDelete}> 
            <Pressable onPress={() => handleDeletePress("Hamburguesa")}> 
              <FontAwesome6 name="trash-can" size={24} color="#ce2029" />
            </Pressable>
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={['#262B33', 'transparent']}
        style={styles.categoryListElement}>
        <View style={styles.categoryListElement}>
          <Image style={styles.categoryListImage} source={require('../../../../../../assets/images/pizza.jpg')} />
          <Text style={styles.categoryListElementText}>Pizza</Text>

          <View style={styles.buttomEdit}> 
            <Pressable onPress={() => navigation.navigate('CategoryUpdateScreen')}> 
              <Text style={styles.editText}>Editar producto</Text>
            </Pressable>
          </View>

          <View style={styles.buttomDelete}> 
            <Pressable onPress={() => handleDeletePress("Pizza")}> 
              <FontAwesome6 name="trash-can" size={24} color="#ce2029" />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
      

        
      </ScrollView>


      <View style={styles.buttomSave}> 
        <Pressable onPress={() => null}> 
            <Text style={styles.SaveText}>GUARDAR</Text>
          </Pressable>
        </View>

        <View style={styles.buttomAdd}> 
        <Pressable onPress={() => navigation.navigate('CategoryCreateScreen')}> 
            <Text style={styles.SaveText}>NUEVA CATEGORÍA</Text>
          </Pressable>
        </View>

        {/* Delete confirmation modal */}
      <Modal visible={showDeleteConfirmation} animationType="fade" transparent>
      <LinearGradient
        colors={['#262B33', '#0C1013']}
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