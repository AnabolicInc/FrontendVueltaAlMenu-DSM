import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<RootStackParamList, 'ProfileScreen'> {}

const ProfileScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.profileContainer}>

    
        <Image style={styles.backButton} source={require('../../../../assets/images/leftButton.png')} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} />
        
        <Text style={styles.mainText}>Perfil de usuario</Text>

        {/*<LinearGradient colors={['#DC3535', '#D17842']} /> */}


        
        <View style={styles.backgroudField} />
        <Text style={styles.titleText}>Nombre de usuario</Text>
        <Text style={styles.dataText}>Aca va el nombre</Text>

        <TouchableOpacity
          style={styles.editFieldButton}
          onPress={() => console.log("Editando nombre")}
        >
          <Text>Editar</Text>
        </TouchableOpacity>

        <View style={[styles.backgroudField, { top: "42%" }]} />
        <Text style={[styles.titleText,{top:"45%"}]}>Correo electronico</Text>
        <Text style={[styles.dataText,{top:"50%"}]}>Aca va el email</Text>

        <TouchableOpacity
          style={[styles.editFieldButton, { top: '43%' }]}
          onPress={() => console.log("Editando email")}
        >
          <Text>Editar</Text>
        </TouchableOpacity>

        <View style={[styles.backgroudField, { top: "57%" }]} />
        <Text style={[styles.titleText,{top:"60%"}]}>Telefono</Text>
        <Text style={[styles.dataText,{top:"65%"}]}>Aca va el Telefono</Text>

        <TouchableOpacity
          style={[styles.editFieldButton, { top: '58%' }]}
          onPress={() => console.log("Editando telefono")}
        >
          <Text>Editar</Text>
        </TouchableOpacity>

        <View style={[styles.backgroudField, { top: "72%" }]} />
        <Text style={[styles.titleText,{top:"75%"}]}>Contraseña</Text>
        <Text style={[styles.dataText,{top:"80%"}]}>********</Text>

        <TouchableOpacity
          style={[styles.editFieldButton, { top: '73%' }]}
          onPress={() => console.log("Editando password")}
        >
          <Text>Editar</Text>
        </TouchableOpacity>


        {/* 
        <TextInput style = {styles.input} placeholder = "Nombre"/>
        <TextInput style = {styles.input} placeholder = "Apellidos"/>
        <TextInput style = {styles.input} placeholder = "Correo electrónico"/>
        */}

        {/*
        <TouchableOpacity style = {styles.userButton}>
            <Text style = {styles.userButtonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.userButton}>
            <Text style = {styles.userButtonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        */}
      </View>

      
  )
};

export default ProfileScreen;
