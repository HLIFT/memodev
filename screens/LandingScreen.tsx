import {View, Text, StyleSheet, TextInput} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ScreenContainer from "../components/ScreenContainer";
import {useState} from "react";
import LottieView from "lottie-react-native";

const LandingScreen = ({navigation}: NativeStackScreenProps<any>) => {
    const [pseudo, setPseudo] = useState<string>('')
    const [error, setError] = useState<string|null>(null)

    const handleClickOnPlay = () => {
        if(pseudo !== '') {
            setError(null)
            navigation.navigate("Game", {
                pseudo: pseudo
            })
        }
        else setError('Veuillez renseigner votre pseudo')
    }

    return (
        <ScreenContainer>
            <View style={styles.textContainer}>
                <Text style={styles.primaryText}>Bienvenue sur MemoDev</Text>
                <Text style={styles.secondaryText}>Le jeu où tu mémorises le dev</Text>
            </View>
            <LottieView style={styles.rocket} source={require("../assets/animations/boost-rocker.json")} autoPlay={true} loop={true}/>
            <View style={{width: '80%'}}>
                <TextInput style={styles.input} placeholderTextColor="rgba(255,255,255,0.4)" placeholder="Pseudo" onChangeText={setPseudo} />
                <Text style={styles.error}>{error}</Text>
                <PrimaryButton text="Jouer" onPress={handleClickOnPlay} />
            </View>
            <View style={styles.bottomView}>
                <PrimaryButton text="Classement" onPress={() => navigation.navigate("Ranking")} />
            </View>
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
    },
    bottomView: {
        justifyContent: "flex-end",
        width: '60%',
        marginTop: 100
    },
    rocket: {
        width: 200,
        justifyContent:"flex-end",
    }
})

export default LandingScreen
