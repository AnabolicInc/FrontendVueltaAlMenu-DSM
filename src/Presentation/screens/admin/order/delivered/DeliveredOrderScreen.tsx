import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootAdminTopTabParamList } from '../../../../navigation/tabs/admin/AdminTopTab'


interface Props extends NativeStackScreenProps<RootAdminTopTabParamList, 'PendingOrderScreen'> {}

export const DeliveredOrderScreen = () => {;
  return (
    <View>
      <Text>DeliveredOrderScreen</Text>;
    </View>
  )
}



const styles = StyleSheet.create({})