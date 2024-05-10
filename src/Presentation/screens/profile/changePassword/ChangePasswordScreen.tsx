import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation/MainAppStack'
import { RootAdminBottomTabParamList } from '../../../navigation/tabs/admin/AdminBottomTab'


interface Props extends StackScreenProps<RootAdminBottomTabParamList, 'ChangePasswordScreen'> {}

const ChangePasswordScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>ChangePasswordScreen</Text>
    </View>
  )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({})