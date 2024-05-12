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
                    <View style={styles.buttomEdit}> 
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

      
      buttomEdit: {
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

      modalContent: {
        top: "35%",
        borderRadius: 20,
        width: 360,
        height: 140,
        justifyContent: 'center',
        alignSelf: 'center',
      },

      modalText: {
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        textAlign: 'center',
      },

      modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 200,
        alignSelf: 'center',
      },

      modalButtonDelete: {
        backgroundColor: COLORS.borderErrorBackgroundBackendRed,
        borderRadius: 13,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },

      modalButtonCancel: {
        backgroundColor: COLORS.requirementCompletedGreen,
        borderRadius: 13,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },

      modalButton: {
        color: COLORS.primaryWhite,
      }
})