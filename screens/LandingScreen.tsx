import {View, Text, StyleSheet} from "react-native";
import {screenStyles} from "../assets/styles/screen.style";
import PrimaryButton from "../components/PrimaryButton";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ScreenContainer from "../components/ScreenContainer";

const LandingScreen = ({navigation}: NativeStackScreenProps<any>) => {
    return (
        <ScreenContainer>
            <View style={styles.textContainer}>
                <Text style={styles.primaryText}>Bienvenue sur MemoDev</Text>
                <Text style={styles.secondaryText}>Le jeu où tu mémorises le dev</Text>
            </View>
            <PrimaryButton text="Jouer" onPress={() => navigation.navigate("Game")} />
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
    }
})

export default LandingScreen
