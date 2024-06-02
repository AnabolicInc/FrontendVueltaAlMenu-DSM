import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { ClientShoppingNavigatorParamList } from '../../../../navigation/tabs/client/ClientShoppingNavigator'

interface Props extends StackScreenProps<ClientShoppingNavigatorParamList, 'ProductInfoScreen'> { }

export const ProductInfoScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>productViewScreen</Text>
    </View>
  )
}

export default ProductInfoScreen;