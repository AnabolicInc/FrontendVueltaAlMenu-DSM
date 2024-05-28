import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { OptionButtom } from './OptionButtom';
import { COLORS, FONTSIZE } from '../themes/Theme';
import Modal from 'react-native-modal';
       
interface Props {

    modalUseState: boolean;
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;
    onPaymentMethodSelected: (paymentMethod: string) => void;
}



export const ModalPickPayment = ({ modalUseState, setModalUseState, onPaymentMethodSelected }: Props) => {

    return (
        <View style={styles.modalContainer}>

            <Modal
                isVisible={modalUseState}
                onBackdropPress={() => setModalUseState(!modalUseState)}
                animationIn={'slideInRight'}
                animationOut={'slideOutRight'}
                backdropOpacity={0.5}
                
            >
                <View style={styles.modalInnerContainer}>
                    <View>
                        <Text style={styles.modalText}>Selecciona un método de pago</Text>


                        <View>
                            <OptionButtom text='Tarjeta de crédito' onPress={() => {
                                onPaymentMethodSelected('Tarjeta de crédito');
                                setModalUseState(!modalUseState);
                            }} />

                        </View>

                        <View>
                            <OptionButtom text='Tarjeta de debito' onPress={() => {
                                
                                onPaymentMethodSelected('Tarjeta de debito');
                                setModalUseState(!modalUseState);

                            }} />

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
        flex: 1,
        backgroundColor: '#0C1013',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    modalText: {
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_20,
    },
});