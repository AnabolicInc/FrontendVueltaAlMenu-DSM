import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'


import { OptionButtom } from './OptionButtom';
import { COLORS, FONTSIZE } from '../themes/Theme';


interface Props {
    
    openCamera: (numberImage: number) => void;
    openGallery: (numberImage: number) => void;
    numberImage: number;
    modalUseState: boolean;
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;

}

export const ModalPickProductImage = ({modalUseState,setModalUseState, openGallery, openCamera, numberImage}:Props) => {
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
                        <OptionButtom text = 'Galería' onPress={() => {
                            openGallery(numberImage);
                            setModalUseState(!modalUseState);
                        }}/>

                    </View>
                    {/* Camera button  */}
                    <View> 
                        <OptionButtom text = 'Cámara' onPress={() => {
                            openCamera(numberImage);
                            setModalUseState(!modalUseState);
                        
                        }}/>

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
    }
})
