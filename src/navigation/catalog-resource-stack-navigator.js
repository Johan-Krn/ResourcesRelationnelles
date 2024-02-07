import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CatalogResourceScreen from "../screens/catalog-resource-screen";
import DetailResourceScreen from "../screens/detail-resource-screen";

const Stack = createNativeStackNavigator();

export default function CatalogResourceStackNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CatalogResource"
                component={CatalogResourceScreen}
                options={{
                    title: 'Catalogue des ressources'
                }}
            />

            <Stack.Screen
                name="DetailResource"
                component={DetailResourceScreen}
                options={{
                    title: 'Détail de la ressource'
                }}
            />
        </Stack.Navigator>
    );
};
