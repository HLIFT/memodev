import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from "react-native";

interface PrimaryButtonProps {
    text: string,
    onPress: (event: GestureResponderEvent) => void
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#56CFE1',
        borderRadius: 10,
    },
    text: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20
    }
})

export default PrimaryButton
