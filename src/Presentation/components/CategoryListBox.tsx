import { StyleSheet, Text, TextInput, View, Pressable, Image, Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import React, { useState } from "react";



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
        colors={['#262B33', 'transparent']}
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

                    <View style={styles.buttomDelete}> 
                        <Pressable onPress={() => handleDeletePress("Hamburguesa")}> 
                            <FontAwesome6 name="trash-can" size={24} color="#ce2029" />
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>

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
      
  );
}

export default CategoryListBox;

const styles = StyleSheet.create({

    categoryListElement: {
        //backgroundColor: '#262B33',
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
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'left',
        fontSize: 18,
        top: 17,
      },

      
      buttomEdit: {
        backgroundColor: 'transparent',
        borderColor: '#D17842',
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        width: '60%',
        marginRight: '2%',
      },

      editText: {
        color: '#D17842',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: '5%',
      },

      buttomDelete: {
        backgroundColor: 'transparent',
        borderColor: '#ce2029',
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
        color: 'white',
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
        backgroundColor: 'red',
        borderRadius: 13,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },

      modalButtonCancel: {
        backgroundColor: 'green',
        borderRadius: 13,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },

      modalButton: {
        color: 'white',
      }
})