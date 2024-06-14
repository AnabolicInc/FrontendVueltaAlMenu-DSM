import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../../../../themes/Theme';

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
        marginRight: 10,
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
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: COLORS.primaryWhite,
        height: 40,
        flex: 1,
    },
    currencyText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: COLORS.primaryOrange,
        marginLeft: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default CreateNewProductStyles;
