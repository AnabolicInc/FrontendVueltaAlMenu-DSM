import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from './Styles';
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryUpdateScreen'> {}

export const CategoryUpdateScreen = ({ navigation,route }: Props) => {
  return (
    <View style={styles.CategoryUpdateContainer}>
      <Text style={styles.CategoryUpdateText}>EDITAR CATEGORÍA</Text>
      <Image style={styles.categoryUpdateUserImage} source={require('../../../../../../assets/images/userIcon.png')} />


      <View style={styles.buttomSave}> 
        <Pressable onPress={() => navigation.goBack()}> 
            <Text style={styles.SaveText}>GUARDAR</Text>
          </Pressable>
        </View>

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
        
    </View>



  )
}


export default CategoryUpdateScreen