import React from 'react'
import { View, Text, Image, ImageBackground, Pressable, FlatList } from 'react-native'
import { TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import useViewModel from './ViewModel';


import { ClientHomeNavigatorParamList } from '../../navigation/tabs/client/ClientHomeNavigator';
import styles from './Styles';
import { COLORS } from '../../themes/Theme'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { Product } from '../../../Domain/entities/Product';
//import the dependency to create a search bar

//to-do: Falta que se desplieguen los productos en la screen de cliente, esto se implementara proximamente

interface Props extends StackScreenProps<ClientHomeNavigatorParamList, 'ClientHomeScreen'> { }

export const ClientHomeScreen = ({ navigation, route }: Props) => {

  const { products } = useViewModel();

  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }

  //console.log(products);

  const handleProductPress = (product: Product) => {
	}

  return (
    <View style={styles.userContainer}>

      <Text style={styles.mainText}>Encuentra el mejor platillo para ti</Text>


      <TextInput
        style={styles.searchBar}
        placeholder="Buscar platillo..."
        placeholderTextColor={'rgba(255,255,255,0.5)'}
        clearButtonMode='always'
        enterKeyHint='enter'

        onChangeText={(text) => {
          // Handle search logic here
        }}
      />

		{products.length === 0 ? (
			<Text style={styles.noProductListText}>No hay productos para mostar</Text>
		) : (
			<FlatList 
				style={styles.productListInnerContainer} 
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				data={products}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Pressable onPress={() => navigation.navigate("ProductInfoScreen", { product: item })}>

						<LinearGradient
							colors={[COLORS.primaryGrey, 'transparent']}
							style={styles.productListElement}
						>
							{item.image ? (
								<Image style={styles.productListImage} source={{ uri: item.image }} />
							) : (
								<Image style={styles.productListImage} source={require('../../../../assets/images/category.png')} />
							)}
							<View style={styles.productListText}>
								<Text style={styles.productListElementName}>
									{item.name.length > 23
										? item.name.match(/.{1,23}/g)[0] + '...'
										: item.name}
								</Text>
								
								<Text style={styles.productListElementDescription}>
									{item.description.length > 20
										? item.description.match(/.{1,20}/g)[0] + '...'
										: item.description}
								</Text>
							</View>

							<View style={styles.productListPriceAddBoxContainer}>
								<View style={styles.productListPriceAddBox}>

									<Text style={styles.productListElementPriceSignText}>$
										<Text style={styles.productListElementPriceText}> {item.price}</Text> 
									</Text>
									

									<Pressable style={styles.addButton} onPress={() => handleProductPress}>
										<Text style={styles.addButtonText}>+</Text>
									</Pressable>

								</View>
							</View>
						</LinearGradient>
					</Pressable>
				)}
			/>
		)}

    </View>

  )
}


export default ClientHomeScreen;