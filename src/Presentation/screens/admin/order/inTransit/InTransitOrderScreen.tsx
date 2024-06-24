import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootAdminTopTabParamList } from '../../../../navigation/tabs/admin/AdminTopTab';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<RootAdminTopTabParamList, 'PendingOrderScreen'> {}


export const InTransitOrderScreen = () => {
	return (
		<View>
			<Text>InTransitOrderScreen</Text>
		</View>
	)
}


const styles = StyleSheet.create({})