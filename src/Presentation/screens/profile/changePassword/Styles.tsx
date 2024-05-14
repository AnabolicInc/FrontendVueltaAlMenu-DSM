import { StyleSheet } from "react-native";

const ChangePasswordStyles = StyleSheet.create({
  changePasswordContainer: {
    flex: 1,
    backgroundColor: '#0C1013',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#D17842',
    marginBottom: 20,
  },
  fieldContainer: {
    marginTop: 20,
  },
  textInputContainer: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  buttomChangePassword: {
    backgroundColor: '#141921',
    borderWidth: 2,
    borderColor: '#D17842',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width: 160,
    alignSelf: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  },
  
});

export default ChangePasswordStyles;
