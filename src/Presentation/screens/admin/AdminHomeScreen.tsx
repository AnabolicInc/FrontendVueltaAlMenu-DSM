import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';



interface Props extends StackScreenProps<RootStackParamList, 'AdminHomeScreen'> {}

export const AdminHomeScreen = ({navigation,route}: Props) => {
  return (
    <View>
      <Text>AdminScreen</Text>
    </View>
  )
}

export default AdminHomeScreen;

const styles = StyleSheet.create({})