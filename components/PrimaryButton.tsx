import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from "react-native";

interface PrimaryButtonProps {
    text: string,
    onPress: (event: GestureResponderEvent) => void
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#ff33ff'
    },
    text: {
        color: '#000000',
        textAlign: 'center'
    }
})

export default PrimaryButton
