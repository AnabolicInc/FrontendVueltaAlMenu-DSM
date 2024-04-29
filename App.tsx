import React, { ReactElement } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/Presentation/navigation/MainAppStack';
import { AuthProvider } from './src/Presentation/context/auth/AuthContext';


interface AppStateProps{
  children: ReactElement  | ReactElement[] | null  ;
}


const AppState: React.FC<AppStateProps> = ({children}) => {

  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )


}

const  App = () => {
  return (
    <NavigationContainer>
        <AppState>
            <MainAppStack />
        </AppState>
    </NavigationContainer>
  );
}

export default App;
