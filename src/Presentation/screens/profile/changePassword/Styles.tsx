import { StyleSheet } from "react-native";

const ChangePasswordStyles = StyleSheet.create({
  profileContainer: {
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
    backgroundColor: '#D17842',
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
    width: 150,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default ChangePasswordStyles;
