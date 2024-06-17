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
        backgroundColor: COLORS.secondaryBlackRGBA,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: COLORS.primaryOrange,
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_16,
        textAlign: 'center',
        marginVertical: 20,
    },
    productAddImage: {
        width: 120,
        height: 135,
        margin: 5,
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
        position: 'relative',
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
        fontSize: 16,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Ajustado para centrar las imágenes
        alignItems: 'center',
        marginBottom: 20,
    },
    loadingContainer: {
		backgroundColor: COLORS.secondaryBlackRGBA,
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
		justifyContent: 'center',
		alignSelf: 'center',
		marginBottom: 10,
		zIndex: 1,
	},

});

export default CreateNewProductStyles;
