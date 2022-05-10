import LandingScreen from "../screens/LandingScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GameScreen from "../screens/GameScreen";

const Stack = createNativeStackNavigator()

const RootStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
            <Stack.Screen
                name="Game"
                component={GameScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerBackTitleVisible: false,
                    headerTintColor: "#56CFE1"
            }}
            />
        </Stack.Navigator>
    )
}

export default RootStackNavigator
