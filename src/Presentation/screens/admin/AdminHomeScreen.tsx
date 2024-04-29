import React from 'react'
import styles from './Styles';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
//import the dependency to create a search bar

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import { TextInput } from 'react-native';

interface Props extends StackScreenProps<RootStackParamList, 'AdminHomeScreen'> {}

export const  AdminHomeScreen = ({ navigation, route}: Props) => {
  
  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf' ),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }
  

  return (
    <View style={styles.userContainer}>
      
      <Text style={styles.mainText}>Bienvenido/a ...</Text>

     
    
    </View>
    
  )
}


export default AdminHomeScreen;