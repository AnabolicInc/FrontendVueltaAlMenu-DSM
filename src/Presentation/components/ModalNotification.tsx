import { View, Text, Modal, StyleSheet, Pressable } from 'react-native'
import React from 'react'




interface Props {

    email: string;
    modalUseState: boolean;
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;

}

export const ModalNotification = ({modalUseState,setModalUseState,email}:Props) => {
  return (
    <View style = {styles.modalContainer}>

        <Modal 
            animationType='slide'
            transparent={true}
            visible={modalUseState} 
            onRequestClose={() => {
                setModalUseState(!modalUseState)

            }}

        >
            <View style = {styles.modalInnerContainer}>
                <View>
                    <Text style={styles.modalText}>Selecciona una imagen</Text>
                    
                    {/* Gallery button */}
                    <View>
                        <Text style={styles.modalText}>El correo ha sido correctamente a {email}</Text>
                    </View>
                    {/*Create a pressable that close the modal*/}
                    <View style = {styles.buttonContainer}>
                        <Pressable style = {styles.saveButton} 
                            onPress = {() => setModalUseState(false)}
                        >
                        </Pressable>
                    </View>
                        
                   

                </View>
            </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalInnerContainer: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        color: 'white',
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    saveButton: {
        backgroundColor: '#D17842',
        padding: 10,
        borderRadius: 10,
    },
})
