import React from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import useViewModel from './ViewModel';
 // Importa el nuevo componente
import { ClientHomeNavigatorParamList } from '../../navigation/tabs/client/ClientHomeNavigator';
import styles from './Styles';
import { useFonts } from 'expo-font';
import { Product } from '../../../Domain/entities/Product';
import ProductItem from './productItem';

interface Props extends StackScreenProps<ClientHomeNavigatorParamList, 'ClientHomeScreen'> { }

export const ClientHomeScreen = ({ navigation, route }: Props) => {
  const { products, addToCart } = useViewModel();

  const [fontsLoaded] = useFonts({
    Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Muestra un componente de carga mientras se carga la fuente
  }

  const handleProductPress = (product: Product) => {
    navigation.navigate("ProductInfoScreen", { product });
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

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
            <ProductItem
              product={item}
              onPress={() => handleProductPress(item)}
              onAddToCart={() => handleAddToCart(item)}
            />
          )}
        />
      )}
    </View>
  );
};

export default ClientHomeScreen;
