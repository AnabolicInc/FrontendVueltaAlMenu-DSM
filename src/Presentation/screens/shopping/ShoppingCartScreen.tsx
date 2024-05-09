import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles';


const ShoppingCartScreen = () => {
  return (
    

    <View style ={styles.shoppingCartContainer}>
		  <Image style={styles.backButton} source={require('../../../../assets/images/leftButton.png')} />
      <Text style = {styles.mainText}>Shopping Cart</Text>
    </View>
  )
}

export default ShoppingCartScreen

