import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles';

const SettingScreen = () => {
  return (
    <View style ={styles.settingsContainer}>
      <Text style = {styles.mainText}>Configuraciones</Text>
      <Text style = {styles.settingsText}>Cerrar sesion</Text>
      <Text style = {[styles.settingsText,{top:"50%"}]}>Valorar app</Text>


    </View>
  )
}

export default SettingScreen;