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
                <Text style={styles.modalText}>El correo ha sido correctamente a {email}</Text>
                <View style = {styles.buttonContainer}>
                    <Pressable style = {styles.saveButton} 
                        onPress = {() => setModalUseState(false)}
                        >
                        <Text style={
                        {
                            color: 'white',
                            fontSize: 20,
                        }
                        }>Cerrar</Text>
                    </Pressable>

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
        backgroundColor: 'rgba(0,0,255,0.35)',
        borderWidth: 1,
        borderColor: '#110fac',
        padding: 10,
        borderRadius: 10,
        width: 250,
        height: 50,
        alignItems: 'center',

    },
})
