import LandingScreen from "../screens/LandingScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const RootStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} />
        </Stack.Navigator>
    )
}

export default RootStackNavigator
