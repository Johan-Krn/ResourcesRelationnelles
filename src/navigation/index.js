import {NavigationContainer} from "@react-navigation/native";
import useUserGlobalStore from '../store/useUserGlobalStore';
import AppStackNavigator from "./app-stack-navigator";
import AuthStackNavigator from "./auth-stack-navigator";

const Navigation = () => {
    const {user, updateUser} = useUserGlobalStore();

    if (user) {
        return (
            <NavigationContainer>
                <AppStackNavigator/>
            </NavigationContainer>
        )
    }else{
        return (
            <NavigationContainer>
                <AuthStackNavigator />
            </NavigationContainer>
        )
    }
};

export default Navigation;
