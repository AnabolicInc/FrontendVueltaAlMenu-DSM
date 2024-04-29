import React from 'react'
import { Text, View, Image, Pressable, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainAppStack';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList, 'CategoryScreen'> {}

export const CategoryScreen = ({ navigation,route }: Props) => {
    
    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryMainTitle}>Categorías</Text>
            
            <View>
                
            </View>




            <Pressable style={styles.saveButton} onPress={() => console.log('Save Button Pressed')}>
                <Text style={styles.saveButtonText} >Guardar</Text>
            </Pressable>
        </View>
    )
}

export default CategoryScreen;