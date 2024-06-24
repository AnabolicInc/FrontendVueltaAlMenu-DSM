import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootAdminTopTabParamList } from '../../../../navigation/tabs/admin/AdminTopTab';

interface Props extends StackScreenProps<RootAdminTopTabParamList, 'PendingOrderScreen'> {}


export const PendingOrderScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>PendingOrderScreen</Text>
    </View>
  )
}



const styles = StyleSheet.create({})