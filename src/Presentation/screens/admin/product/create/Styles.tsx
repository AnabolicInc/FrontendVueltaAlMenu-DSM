import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../../../themes/Theme';
import * as Font from 'expo-font';

const CreateNewProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.generalBackgroundBlack,
  },
  innerContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: COLORS.primaryWhite,
    fontFamily: 'Poppins-SemiBold',
    fontSize: FONTSIZE.size_20,
    textAlign: 'center',
    marginVertical: 20,
  },
  userImage: {
    width: 120,
    height: 135,
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: COLORS.primaryDarkGrey,
    borderColor: COLORS.primaryOrange,
    borderWidth: 1,
    borderRadius: 10,
    width: 220,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: FONTSIZE.size_15,
  },
  inputContainer: {
    backgroundColor: 'rgba(82, 85, 90, 0.32)',
    width: 320,
    borderRadius: 7,
    marginBottom: 10,
    padding: 15,
    flexShrink: 1,
  },
  inputLabel: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: 'white',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: COLORS.primaryWhite,
    height: 40,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5, // Add bottom margin to push content below
  },
  buttonSave: {
    backgroundColor: '#D17842',
    borderRadius: 10,
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  saveText: {
    color: COLORS.primaryWhite,
    fontFamily: 'Poppins-Bold.ttf',
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Alinear las imágenes al principio del contenedor
    alignItems: 'center',
    marginBottom: 20,
  },  
  alertText: {
    color: 'red', // Color del texto de la alerta
    fontSize: 16, // Tamaño del texto de la alerta
    textAlign: 'center', // Alineación del texto de la alerta
    fontWeight: 'bold', // Peso de la fuente del texto de la alerta
    // Otros estilos que desees aplicar a la alerta
  },
  
});

export default CreateNewProductStyles;
