import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from '../../themes/Theme'

const AdminHomeStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#0C1013',
            padding: 20,
        },
        welcomeText: {
            position: 'relative',
            top: "10%",
            fontFamily: 'Poppins',
            color: '#fff',
            fontSize: 20,
            marginBottom: 20,
        },
        topBar: {
            position: 'relative',
            top: "20%",
            flexDirection: 'row',
            marginBottom: 20,
        },
        topBarButton: {
            flex: 1,
            padding: 10,
            alignItems: 'center',
        },
        topBarText: {
            color: '#888',
            fontSize: 10,
        },
        selectedButton: {
            borderBottomWidth: 2,
            borderBottomColor: '#ff6347',
        },
        orderContainer: {
            backgroundColor: '#1e1e1e',
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
        },
        noOrdersText: {
            color: '#888',
            fontSize: 16,
            textAlign: 'center',
        },


    }
);
export default AdminHomeStyles;
