import React from 'react'
import styles from './Styles';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
//import the dependency to create a search bar

import { StackScreenProps } from '@react-navigation/stack';

import { TextInput } from 'react-native';
import { RootBottomTabParamList } from '../../navigation/tabs/client/ClientBottomTab';

interface Props extends StackScreenProps<RootBottomTabParamList, 'ClientHomeScreen'> {}

export const  ClientHomeScreen = ({ navigation, route}: Props) => {
  
  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf' ),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }
  

  return (
    <View style={styles.userContainer}>
      
      <Text style={styles.mainText}>Encuentra el mejor platillo para ti</Text>


      <TextInput
        style={styles.searchBar}
        placeholder="Buscar platillo..."
        placeholderTextColor={'rgba(255,255,255,0.5)'}
        clearButtonMode='always'
        enterKeyHint='enter'

        onChangeText={(text) => {
          // Handle search logic here
        }}
      />
     
    
    </View>
    
  )
}


export default ClientHomeScreen;