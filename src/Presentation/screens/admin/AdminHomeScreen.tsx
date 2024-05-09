import React, { useContext } from 'react'
import styles from './Styles';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
//import the dependency to create a search bar

import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native';
import { AuthContext } from '../../context/auth/AuthContext';
import { RootAdminBottomTabParamList } from '../../navigation/tabs/admin/AdminBottomTab';

interface Props extends StackScreenProps<RootAdminBottomTabParamList, 'AdminHomeScreen'> {}

export const  AdminHomeScreen = ({ navigation, route}: Props) => {


const {status,user} = useContext(AuthContext);
  return (
    <View style={styles.userContainer}>
      
      <Text style={styles.mainText}>Un placer verte, {user?.name}!</Text>

    
    </View>
    
  )
}


export default AdminHomeScreen;