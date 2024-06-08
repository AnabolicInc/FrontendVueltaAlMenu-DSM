import { View, Text, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';


import styles from './Styles';
import useViewModel from './ViewModel';
import { COLORS } from '../../../../themes/Theme';
import { ClientShoppingNavigatorParamList } from '../../../../navigation/tabs/client/ClientShoppingNavigator';


interface Props extends StackScreenProps<ClientShoppingNavigatorParamList, 'ProductInfoScreen'> {}

export const ProductInfoScreen = ({ navigation, route }: Props) => {

  const [modalVisible, setModalVisible] = useState<boolean>(false); //Modal para mostrar mensaje de error

  const { product } = route.params;

  const  {
    onChange,
  } = useViewModel();


  return (
      <View style={styles.productInfoContainer}>
        
        <View>
          
          {
            (product.image == '' || product.image == null)
            ?
            <Image style={styles.productInfoImage} source={require('../../../../../../assets/images/category.png')} />
            :
            <Image style={styles.productInfoImage} source={{uri:product.image}} />
            
          }
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{product.name}</Text>
          </View>
        </View>

        <Text style={styles.descriptionTitle}>
          Descripción
        </Text>

        <Text style={styles.descriptionComplete}>
          {product.description.length > 42
          ? product.description.match(/.{1,40}/g).join('\n')
          : product.description}
        </Text>

        <View style={styles.productListPriceAddBoxContainer}>
          <View style={styles.productListPriceAddBox}>

            <View style={styles.priceBox}>

              <Text style={styles.priceText}>Precio</Text> 
              
              <Text style={styles.productListElementPriceSignText}>$
                <Text style={styles.productListElementPriceText}> {product.price}</Text> 
              </Text>
            </View>

            <Pressable style={styles.addButton} onPress={() => "handleProductPress"}>
              <Text style={styles.addButtonText}>Agregar al carrito</Text>
            </Pressable>

          </View>
        </View>

      </View>
  )
}

export default ProductInfoScreen;