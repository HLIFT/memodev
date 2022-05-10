import {NavigationContainer} from "@react-navigation/native";
import RootStackNavigator from "./navigation/RootStackNavigator";
import ScreenContainer from "./components/ScreenContainer";

export default function App() {
    return (
        <NavigationContainer>
            <RootStackNavigator/>
        </NavigationContainer>
    );
}
