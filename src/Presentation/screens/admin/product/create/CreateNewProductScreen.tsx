import React, { useContext, useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';
import { View, Text, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import CreateNewProductViewModel from './ViewModel';
import styles from './Styles';
import { showMessage } from 'react-native-flash-message';
import { ProductContext } from '../../../../context/product/ProductContext';
import { ActivityIndicator } from 'react-native-paper';

interface Props extends StackScreenProps<RootStackParamList, 'CreateNewProductScreen'> { }

export const CreateNewProductScreen = ({ navigation, route }: Props) => {
    const { addProduct } = useContext(ProductContext);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const {
        images,
        name,
        description,
        price,
        quantity,
        onChange,
        pickImage,
        takePhoto,
        createNewProduct,
        loading,
        errorMessages,
        hasNonNumber,
    } = CreateNewProductViewModel();

    const handlePickImage = async () => {
        if (images.length >= 3) {
            showMessage({
                message: "Error",
                description: "Debe seleccionar exactamente 3 imágenes",
                type: 'danger',
                icon: 'danger',
            });
        } else {
            setModalVisible(true);
        }
    };

    const handleSave = async () => {
        if (images.length < 3) {
            showMessage({
                message: "Error",
                description: "Debe seleccionar exactamente 3 imágenes",
                type: 'danger',
                icon: 'danger',
            });
            return;
        }

        const newProduct = await createNewProduct();
        if (newProduct) {
            addProduct(newProduct);
            navigation.goBack();
        }
    };

    // useEffect(() => {
    //     loadFonts();
    // }, []);

    // if (!fontsLoaded) {
    //     return <ActivityIndicator size="large" />;
    // }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.innerContainer} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Crear nuevo producto</Text>

                <View style={styles.imageContainer}>
                    {images.length === 0 ? (
                        <Image source={require('../../../../../../assets/images/imagesIcon.png')} style={styles.productAddImage} />
                    ) : (
                        images.map((image, index) => (
                            <Image key={index} source={{ uri: image }} style={styles.productAddImage} />
                        ))
                    )}
                </View>

                <Pressable style={styles.imageButton} onPress={handlePickImage}>
                    <Text style={styles.imageButtonText}>Seleccione las imágenes</Text>
                </Pressable>

                {['Nombre', 'Descripción', 'Precio', 'Cantidad'].map((placeholder, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{placeholder}</Text>

                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.input}
                                placeholder={`Ingrese ${placeholder.toLowerCase()}`}
                                placeholderTextColor="grey"
                                value={
                                    index === 0 ? name
                                    : index === 1 ? description
                                    : index === 2 ? price
                                    : quantity
                                }
                                onChangeText={(text) =>
                                    onChange(index === 0 ? 'name' : index === 1 ? 'description' : index === 2 ? 'price' : 'quantity', text)
                                }
                                keyboardType={index === 2 || index === 3 ? 'numeric' : 'default'}
                                multiline={index === 1}
                            />
                            {index === 2 && <Text style={styles.currencyText}>CLP</Text>}
                        </View>

                        {errorMessages[
                            index === 0 ? 'name' : index === 1 ? 'description' : index === 2 ? 'price' : 'quantity'
                        ] && (
                                <Text style={styles.errorText}>
                                    {errorMessages[
                                        index === 0 ? 'name' : index === 1 ? 'description' : index === 2 ? 'price' : 'quantity'
                                    ]}
                                </Text>
                            )}
                        {(index === 2 || index === 3) && hasNonNumber[
                            index === 2 ? 'price' : 'quantity'
                        ] && (
                                <Text style={styles.errorText}>
                                    El campo {placeholder.toLowerCase()} debe contener solo números.
                                </Text>
                            )}
                    </View>
                ))}

                <View style={styles.buttonSave}>
                    <Pressable onPress={handleSave}>
                        <Text style={styles.saveText}>Guardar</Text>
                    </Pressable>
                </View>
            </ScrollView>

            <ModalPickImage
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
                openGallery={pickImage}
                openCamera={takePhoto}
            />
            {loading && (

                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#D17842" />
                </View>

            )}
        </View>
    );
};

export default CreateNewProductScreen;
