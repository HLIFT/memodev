import AsyncStorage from "@react-native-async-storage/async-storage";
import {Record} from "./types";

export const getRecords = async (): Promise<Record[]|undefined> => {
    try {
        const value = await AsyncStorage.getItem('records')
        if(value !== null) {
            return JSON.parse(value)
        }
    } catch (e) {
        console.error(e)
    }
}
