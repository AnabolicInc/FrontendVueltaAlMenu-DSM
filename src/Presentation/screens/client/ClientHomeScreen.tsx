import React from 'react'
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { TextInput } from 'react-native';
import { RootClientBottomTabParamList } from '../../navigation/tabs/client/ClientBottomTab';
import { StackScreenProps } from '@react-navigation/stack';
import useViewModel from './ViewModel';


import styles from './Styles';
import { useFonts } from 'expo-font';
//import the dependency to create a search bar



interface Props extends StackScreenProps<RootClientBottomTabParamList, 'ClientHomeScreen'> {}

export const  ClientHomeScreen = ({ navigation, route}: Props) => {
  
  const { products } = useViewModel();

  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf' ),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }
  
  console.log(products);

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