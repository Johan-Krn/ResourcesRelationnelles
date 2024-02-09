import { SafeAreaView } from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import useUserGlobalStore from '../store/useUserGlobalStore';
import AppStackNavigator from "./app-stack-navigator";
import AuthStackNavigator from "./auth-stack-navigator";

const Navigation = () => {
    const {user, updateUser} = useUserGlobalStore();

    if (user) {
        return (
            <NavigationContainer>
                <SafeAreaView style={{flex:1}}>
                    <AppStackNavigator/>
                </SafeAreaView>
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
