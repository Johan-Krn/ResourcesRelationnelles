import {NavigationContainer} from "@react-navigation/native";
import AppStackNavigator from "./app-stack-navigator";
import AuthStackNavigator from "./auth-stack-navigator";

const Navigation = () => {
    return (
        <NavigationContainer>
            {/*<AppStackNavigator/>*/}
            <AuthStackNavigator />
        </NavigationContainer>
    )
};

export default Navigation;
