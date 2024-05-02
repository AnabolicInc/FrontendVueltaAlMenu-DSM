import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import styles from './Styles';
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';
import { Dimensions } from 'react-native';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryUpdateScreen'> {}

export const CategoryUpdateScreen = ({ navigation,route }: Props) => {
  return (
    <View style={styles.CategoryUpdateContainer}>
      <ScrollView style={styles.CategoryUpdateInnerContainer} showsVerticalScrollIndicator = {false}>
      <Text style={styles.CategoryUpdateText}>EDITAR CATEGORÍA</Text>
      <Image style={styles.categoryUpdateUserImage} source={require('../../../../../../assets/images/userIcon.png')} />

        <TextInput 
                style={styles.nameInput}
                placeholder="Nombre"
                placeholderTextColor={'#D17842'} 
                onChangeText={(text) => console.log(text)}
            />

        <TextInput 
                style={styles.DescriptionInput}
                placeholder="Descripción"
                placeholderTextColor={'#D17842'} 
                onChangeText={(text) => console.log(text)}
                multiline={true}
            />


        <View style={styles.buttomSave}> 
          <Pressable onPress={() => navigation.goBack()}> 
            <Text style={styles.SaveText}>GUARDAR</Text>
            </Pressable>
        </View>
        </ScrollView>

      
    </View>
  )
}

export default CategoryUpdateScreen