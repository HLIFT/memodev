import {View, Text} from "react-native";
import {screenStyles} from "../assets/styles/screen.style";
import PrimaryButton from "../components/PrimaryButton";

const LandingScreen = ({navigation}) => {
    return (
        <View style={screenStyles.container}>
            <Text>Bienvenue sur MemoDev</Text>
            <Text>Le jeu où tu mémorises le dev</Text>
            <PrimaryButton text="Jouer" onPress={() => navigation.navigate("Game")} />
        </View>
    )
}

export default LandingScreen
