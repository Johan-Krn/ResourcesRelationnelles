import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BottomTabNavigator from "./bottom-tab-navigator";

const Stack = createNativeStackNavigator();
export default function AppStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
};
