import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles';
import { Pressable } from 'react-native'

const CategoryCreateScreen = () => {
  return (
    <View style={styles.CategoryCreateContainer}>
      <Text style={styles.CategoryCreateText}>CATEGORÍAS</Text>


      <View style={styles.buttomSave}> 
        <Pressable onPress={() => null}> 
            <Text style={styles.SaveText}>GUARDAR</Text>
          </Pressable>
        </View>
    </View>



  )
}

export default CategoryCreateScreen