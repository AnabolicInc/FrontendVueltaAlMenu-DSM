import { View, Text } from 'react-native'
import React from 'react'
import { Product } from '../../../../../Domain/entities/Product'
import styles from './Styles'


interface Props {
    product: Product;
}




export const ProductItem = ({product}: Props) => {
  return (
    <View style = {styles.productContainer}>
      <Text>{product.name }</Text>
    </View>
  )
}

