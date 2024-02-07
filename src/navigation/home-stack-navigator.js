import HomeScreen from "../screens/home-screen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Tableau de bord',
                }}
            />
        </Stack.Navigator>
    );
};
