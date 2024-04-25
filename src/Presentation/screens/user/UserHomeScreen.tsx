import React from 'react'
import styles from './Styles';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
//import the dependency to create a search bar

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import { TextInput } from 'react-native';

interface Props extends StackScreenProps<RootStackParamList, 'User'> {}

export const  UserHomeScreen = ({ navigation, route}: Props) => {
  
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
        onChangeText={(text) => {
          // Handle search logic here
        }}
      />
    
      <Text style={styles.userText}>¡Bienvenido a tu perfil!</Text>
      <Pressable style={styles.userButton} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.userButtonText}>Ver perfil</Text>
      </Pressable>
     
    
    </View>
    
  )
}


export default UserHomeScreen;