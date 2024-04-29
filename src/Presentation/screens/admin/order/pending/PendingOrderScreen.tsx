import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigation/MainAppStack';

interface Props extends StackScreenProps<RootStackParamList, 'PendingOrderScreen'> {}


const PendingOrderScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>PendingOrderScreen</Text>
    </View>
  )
}

export default PendingOrderScreen;

const styles = StyleSheet.create({})