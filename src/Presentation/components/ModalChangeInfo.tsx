import { View, Text, Modal, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'

import { COLORS, FONTSIZE } from '../themes/Theme'

interface Props {
    changeInfoLabel:string;
    modalUseState: boolean;
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;

}

export const ModalChangeInfo = ({changeInfoLabel,modalUseState,setModalUseState}:Props) => {
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
                    <Text style={styles.modalText}>Ingrese su nuevo {'\n'} {changeInfoLabel.toLowerCase()}</Text>
                    
                    {/* Gallery button */}
                    <View>
                        <TextInput style = {styles.userInput}/>
                    </View>
                    
                    <View style = {styles.buttonContainer}>
                        <Pressable style = {styles.saveButton} 
                            onPress = {() => setModalUseState(false)}

                        >
                            <Text style = {{...styles.modalText,fontSize:15}}>Guardar</Text>
                        </Pressable>

                        <Pressable style = {styles.cancelButton}
                            onPress = {() => setModalUseState(false)}
                        >
                            <Text style = {{...styles.modalText,fontSize:15}}>Cancelar</Text>
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
        backgroundColor: COLORS.secondaryBlackRGBA,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    modalText: {
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_20,
        fontFamily: 'Poppins',
        textAlign: 'center',
        
    },
    userInput: {
        backgroundColor: COLORS.primaryDarkGrey,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.primaryOrange,
        height: 50,
        width: 300,
        marginTop: 20,
        marginBottom: 20,
        color: COLORS.primaryWhite,
        fontFamily: 'Poppins',
        paddingLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        borderRadius: 15,
        width: 300, // Increase the width to accommodate the buttons
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between', // Add space between the buttons
        marginTop: 20,
    },
    saveButton: {
        backgroundColor: COLORS.backgroundSuccessGreen,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.borderSuccessGreen,
        width: 120, // Divide the width of the container by 2
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        backgroundColor: COLORS.backgroundErrorRed,
        borderColor: COLORS.borderErrorRed,
        borderWidth: 1,
        borderRadius: 10,
        width: 120, // Divide the width of the container by 2
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
