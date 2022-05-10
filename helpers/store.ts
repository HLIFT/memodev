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

export const resetRecords = async () : Promise<void> => {
    try {
        await AsyncStorage.setItem('records', JSON.stringify([]))
    } catch (e) {
        console.error(e)
    }
}
