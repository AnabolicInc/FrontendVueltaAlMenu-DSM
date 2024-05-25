import { StyleSheet } from 'react-native';

export const ChangePasswordStyles = StyleSheet.create({
    resetPasswordContainer: {
        flex: 1,
        backgroundColor: '#0C1013',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    resetPasswordInnerContainer: {
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        top: '-20%',
    },
    resetPasswordText: {
        position: 'relative',
        marginBottom: 20,
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
    },
    emailInputContainer: {
        position: 'relative',
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    buttomResetPassword: {
        position: 'relative',
        backgroundColor: '#D17842',
        width: 250,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttomResetPasswordText: {
        position: 'relative',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 15,
    },
    errorText: {
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderWidth: 1,
        borderColor: 'red',
        color: 'white',
        borderRadius: 10,
        padding: 8,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins',
        position: 'relative',
        marginBottom: 10,
        zIndex: 1,
    },
});

export default ChangePasswordStyles;
