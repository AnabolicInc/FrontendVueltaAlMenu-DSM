import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import styles from './Styles';
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';
import NewCategoryInfo from '../../../../components/NewCategoryInfo';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryCreateScreen'> {}

export const CategoryCreateScreen = ({ navigation,route }: Props) => {
  return (
    <View style={styles.CategoryCreateContainer}>
      <ScrollView style={styles.CategoryCreateInnerContainer} showsVerticalScrollIndicator = {false}>
      <Text style={styles.CategoryCreateText}>CREAR CATEGORÍA</Text>
      <Image style={styles.categoryCreateUserImage} source={require('../../../../../../assets/images/userIcon.png')} />


      <NewCategoryInfo fieldLabel="Nombre" onChangeText={(text) => console.log(text)} />

      <TextInput 
                style={styles.DescriptionInput}
                placeholder="Descripción"
                placeholderTextColor={'#D17842'} 
                onChangeText={(text) => console.log(text)}
                multiline={true}
            />
      
      <View style={styles.buttomSave}> 
        <Pressable onPress={() => navigation.goBack()}> 
            <Text style={styles.SaveText}>AÑADIR</Text>
          </Pressable>
        </View>

        </ScrollView>
        
    </View>



  )
}

export default CategoryCreateScreen