import { View, Text, ActivityIndicator, Image } from 'react-native'
//import poppins font
import { useFonts } from 'expo-font';
import React from 'react'

const LoadingScreen = () => {
    //load fonts
    const [fontsLoaded] = useFonts({
        Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
    });
    if(!fontsLoaded) return null; // Muestra un componente de carga mientras se carga la fuente
    return (
        <View style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    position:'absolute',
                    width:'100%',height:'100%',
                    backgroundColor:'#0C1013',
                }}>
            <ActivityIndicator
                size={50}
                color='#D17842'
                style={{ backgroundColor: '#0C1013',position:'relative',top:'10%'}}
            />
            <Text style={{color:'#D17842',position:'relative',top:'20%', fontFamily: 'Poppins',fontSize:15}}>CARGANDO</Text>
            <Image source={require('../../../../assets/images/cookingLoadingScreen2.gif')} 
            style ={{width:'35%',height:'35%',position:'relative',top:'25%'}}/>
        </View>
    )
}

export default LoadingScreen