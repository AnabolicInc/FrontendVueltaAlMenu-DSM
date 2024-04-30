import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles';
import { Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryListScreen'> {}

export const CategoryListScreen = ({ navigation,route }: Props) => {
  return (
    <View style={styles.CategoryListContainer}>
      <Text style={styles.CategoryListText}>CATEGORÍAS</Text>


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