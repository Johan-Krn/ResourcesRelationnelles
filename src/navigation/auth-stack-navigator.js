import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/login-screen";
import RegisterScreen from "../screens/register-screen";

const Stack = createNativeStackNavigator();
export default function AuthStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: "Connexion"
                }}
            />

            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: "Inscription"
                }}
            />
        </Stack.Navigator>
    )
};
