import { StyleSheet, Text, TextInput, View, Pressable, Image, Modal } from 'react-native'
import React, { useState } from "react";


import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import { COLORS, FONTSIZE } from '../themes/Theme';

interface Props {
    navigation: any;
}

const CategoryListBox = ({ navigation }: Props) => {
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
    <View>
        <LinearGradient
        colors={[COLORS.primaryGrey, 'transparent']}
        style={styles.categoryListElement}>
            <Image style={styles.categoryListImage} source={require('../../../assets/images/burguer.jpg')} />

            <View style={styles.categoryListInnerElement}>
                <Text style={styles.categoryListElementText}>Hamburguesa</Text>

                <View style={styles.categoryListInnerInnerElement}>
                    <View style={styles.buttonEdit}> 
                        <Pressable onPress={() => navigation.navigate('CategoryUpdateScreen')}> 
                            <Text style={styles.editText}>Editar producto</Text>
                        </Pressable>
                    </View>

                    <View style={styles.buttonDelete}> 
                        <Pressable onPress={() => handleDeletePress("Hamburguesa")}> 
                            <FontAwesome6 name="trash-can" size={24} color="#ce2029" />
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>

        <Modal 
        visible={showDeleteConfirmation} 
        animationType="slide" 
        transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalMessageBox}>
              <Text style={styles.modalMessageText}>¿Estás seguro de que deseas eliminar la categoría de {itemToDelete}?</Text>
            </View>

            <View style={styles.modalButtonsContainer}>

              <Pressable onPress={handleDeleteConfirm} style={styles.modalButtonDelete}>
                <Text style={styles.modalButtonText}>Eliminar</Text>
              </Pressable>

              <Pressable onPress={handleDeleteCancel} style={styles.modalButtonCancel}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </Pressable>

            </View>
          </View>
      </Modal>
    </View>
      
  );
}

export default CategoryListBox;

const styles = StyleSheet.create({

    categoryListElement: {
        //backgroundColor: COLORS.primaryGrey,
        flex: 1,
        width: "100%",
        height: 140,
        borderRadius: 30,
        marginBottom: 10,
        paddingStart: 15,
        paddingEnd: 15,
        alignSelf: 'stretch',
        flexDirection: 'row',
      },

      categoryListInnerElement: {
        alignSelf: 'stretch',
        flexDirection: 'column',
      },

      categoryListInnerInnerElement: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        top: 40,
      },

      categoryListImage: {
        position: 'relative',
        borderRadius: 30,
        width: 100,
        height: 100,
        top: 16,
        marginRight: '4%',
      },


      categoryListElementText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: FONTSIZE.size_18,
        top: 17,
      },

      
      buttonEdit: {
        backgroundColor: 'transparent',
        borderColor: COLORS.primaryOrange,
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        width: '60%',
        marginRight: '2%',
      },

      editText: {
        color: COLORS.primaryOrange,
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: '5%',
      },

      buttonDelete: {
        backgroundColor: 'transparent',
        borderColor: COLORS.deleteButtonRed,
        borderWidth: 2,
        borderRadius: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },

      modalContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackRGBA,
      },

      modalMessageBox: {
        top: '30%',
        borderRadius: 17,
        width: 260,
        height: 140,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.primaryDarkGrey,
        borderColor: COLORS.primaryOrange,
        borderWidth: 3,
      },

      modalMessageText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'center',
        textShadowColor: COLORS.primaryOrange,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        borderColor: COLORS.primaryOrange,
      },

      modalButtonsContainer: {
        top: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 260,
        alignSelf: 'center',
      },

      modalButtonDelete: {
        backgroundColor: COLORS.primaryDarkGrey,
        borderColor: COLORS.deleteButtonRed,
        borderWidth: 2,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 100,
      },

      modalButtonCancel: {
        backgroundColor: COLORS.primaryDarkGrey,
        borderColor: COLORS.primaryWhite,
        borderWidth: 2,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 100,
      },

      modalButtonText: {
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_15,
      }
})