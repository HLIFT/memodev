import {StyleSheet, Text, View} from "react-native";
import {Record} from "../helpers/types";

interface RankingLineProps {
    position: number,
    record: Record
}

const RankingLine = (props: RankingLineProps) => {
    const getPosition = () => {
        switch (props.position) {
            case 1:
                return `🥇 ${props.position}`
            case 2:
                return `🥈 ${props.position}`
            case 3:
                return `🥉 ${props.position}`
            default:
                return props.position
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{getPosition()}</Text>
            <Text style={styles.text}>{props.record.pseudo}</Text>
            <Text style={styles.text}>{props.record.moves} coups</Text>
            <Text style={styles.text}>({new Date(props.record.date.toString()).toLocaleDateString()})</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 5
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default RankingLine
