import AsyncStorage from "@react-native-async-storage/async-storage"

export const LocalStorage = () => {


    const save = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log("ERROR to local storage ", error);
        }
    }

    const getItem = (key: string) => {
        try {
            const item = AsyncStorage.getItem(key);
            return item;
        } catch (error) {
            console.log("ERROR to local storage ", error);
        }
    }

    const removeItem = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log("ERROR to local storage ", error);
        }
    }

    return {
        save,
        getItem,
        removeItem
    }
}