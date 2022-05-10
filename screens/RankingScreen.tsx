import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ScreenContainer from "../components/ScreenContainer";
import {useEffect, useState} from "react";
import {Record} from "../helpers/types";
import {getRecords, resetRecords} from "../helpers/store";
import RankingLine from "../components/RankingLine";

const RankingScreen = ({navigation}: NativeStackScreenProps<any>) => {

    const [records, setRecords] = useState<Record[]>([])

    useEffect(() => {
        const getData = async () => {
            const records = await getRecords()
            console.log(records)
            if(records !== undefined) setRecords(records)
        }
        getData().then()
    }, [])

    return (
        <ScreenContainer>
            <View style={styles.textContainer}>
                <Text style={styles.primaryText}>Classement MemoDev</Text>
            </View>
            <View style={{width: '80%'}}>
                {records
                    .sort((a, b) => {
                        return a.moves - b.moves
                    })
                    .splice(0, 9)
                    .map((record, index) => {
                    return (
                        <RankingLine key={record.pseudo+'-'+index} position={index+1} record={record} />
                    )
                })}
            </View>
            {/*<TouchableOpacity onPress={() => resetRecords()}>
                <Text>Reset</Text>
            </TouchableOpacity>*/}
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    primaryText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center"
    },
    secondaryText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center"
    },
    textContainer: {
        marginVertical: 50
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: '#64DFDF',
        color: "#FFFFFF",
        marginVertical: 20
    },
    error: {
        color: '#ea7070',
        marginBottom: 10
    }
})

export default RankingScreen
