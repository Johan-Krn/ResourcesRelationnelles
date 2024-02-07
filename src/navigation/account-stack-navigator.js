import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AccountScreen from "../screens/account-screen";

const Stack = createNativeStackNavigator();
export default function AccountStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    title: 'Mon compte'
                }}
            />
        </Stack.Navigator>
    );
};
