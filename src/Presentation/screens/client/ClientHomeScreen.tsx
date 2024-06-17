import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import useViewModel from './ViewModel';
import { ClientHomeNavigatorParamList } from '../../navigation/tabs/client/ClientHomeNavigator';
import styles from './Styles';
import { useFonts } from 'expo-font';
import { Product } from '../../../Domain/entities/Product';
import ProductItem from './productItem';

interface Props extends StackScreenProps<ClientHomeNavigatorParamList, 'ClientHomeScreen'> { }

export const ClientHomeScreen = ({ navigation, route }: Props) => {
  const { products, addToCart } = useViewModel();
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

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
    setButtonPressed(true);
    setTimeout(() => setButtonPressed(false), 300); // Change color back after 300ms
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
          // implement handle search logic here
        }}
      />

      {products.length === 0 ? (
        <Text style={styles.noProductListText}>No hay productos para mostrar</Text>
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
              buttonPressed={buttonPressed}
            />
          )}
        />
      )}
    </View>
  );
};

export default ClientHomeScreen;
