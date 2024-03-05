import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CreateResourceScreen from "../screens/create-resource-screen";

const Stack = createNativeStackNavigator();

export default function CreateResourceStackNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CreateResource"
                component={CreateResourceScreen}
                options={{
                    title: "Création d'une ressource",
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
