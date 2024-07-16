import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { ClientHomeNavigatorParamList } from '../../../../navigation/tabs/client/ClientHomeNavigator';

import styles from './Styles';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';

import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface Props extends StackScreenProps<ClientHomeNavigatorParamList, 'AddressCreateScreen'> { }

export const AddressCreateScreen = ({ navigation, route }: Props) => {

    const {
        values,
        setValues,
        onChange,
        createAddress,
        errorMessages,
    } = useViewModel();

    const handleAddressCreate = async () => {
        await createAddress();
        console.log('Address created 1');
        navigation.goBack();
    };

    return (
        <View style={styles.categoryCreateContainer}>

            <Text style={styles.categoryCreateText}>Agregar dirección</Text>
            <Image style={styles.categoryCreateUserImage} source={require('../../../../../../assets/images/mapa.png')} />

            <TextInput
                style={styles.nameInput}
                placeholder="Nombre"
                value={values.address}
                placeholderTextColor={COLORS.primaryOrange}
                onChangeText={(text) => onChange('address', text)}
            />

            <TextInput
                style={styles.nameInput}
                placeholder="Barrio"
                value={values.neighborhood}
                placeholderTextColor={COLORS.primaryOrange}
                onChangeText={(text) => onChange('neighborhood', text)}
            />

            <View style={styles.categoryCreateInnerContainer}>
                <GooglePlacesAutocomplete
                    placeholder='Agrega tu dirección'
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'es'
                    }}
                    debounce={300}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        const lat = details?.geometry?.location.lat || 0;
                        const lng = details?.geometry?.location.lng || 0;
                        setValues({ ...values, latitud: lat, longitud: lng });
                    }}
                />
            </View>

            <View style={styles.buttons}>
                <Pressable style={styles.saveButton} onPress={handleAddressCreate}>
                    <Text style={styles.saveText}>Agregar dirección</Text>
                </Pressable>

                <Pressable style={styles.cancelButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelText}>Cancelar</Text>
                </Pressable>
            </View>
        </View>
    );
};
