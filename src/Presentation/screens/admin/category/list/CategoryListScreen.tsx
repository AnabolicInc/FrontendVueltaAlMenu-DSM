import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './Styles';
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';
import { LinearGradient } from 'expo-linear-gradient';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryListScreen'> {}

export const CategoryListScreen = ({ navigation,route }: Props) => {
  return (
    <View style={styles.CategoryListContainer}>
      <Text style={styles.CategoryListText}>CATEGORÍAS</Text>

      <ScrollView style={styles.categoryListInnerContainer} showsVerticalScrollIndicator = {false}>

      <LinearGradient
        colors={['#262B33', 'transparent']}
        style={styles.categoryListElement}>
        <View style={styles.categoryListElement}>
          <Image style={styles.categoryListUserImage} source={require('../../../../../../assets/images/chicken-skewers-on-a-plate.png')} />
          <Text style={styles.categoryListElementText}>Hamburguesa</Text>

          <View style={styles.buttomEdit}> 
            <Pressable onPress={() => navigation.goBack()}> 
              <Text style={styles.editText}>Editar producto</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={['#262B33', 'transparent']}
        style={styles.categoryListElement}>
        <View style={styles.categoryListElement}>
          <Image style={styles.categoryListUserImage} source={require('../../../../../../assets/images/chicken-skewers-on-a-plate.png')} />
          <Text style={styles.categoryListElementText}>Pizza</Text>

          <View style={styles.buttomEdit}> 
            <Pressable onPress={() => navigation.goBack()}> 
              <Text style={styles.editText}>Editar producto</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>

        



      </ScrollView>


      <View style={styles.buttomSave}> 
        <Pressable onPress={() => null}> 
            <Text style={styles.SaveText}>GUARDAR</Text>
          </Pressable>
        </View>

        <View style={styles.buttomAdd}> 
        <Pressable onPress={() => navigation.navigate('CategoryCreateScreen')}> 
            <Text style={styles.SaveText}>NUEVA CATEGORÍA</Text>
          </Pressable>
        </View>
    
    </View>
  )
}

export default CategoryListScreen