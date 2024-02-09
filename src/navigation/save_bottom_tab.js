import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useTheme} from "@shopify/restyle";
import HomeStackNavigator from "./home-stack-navigator";
import AccountStackNavigator from "./account-stack-navigator";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CatalogResourceStackNavigator from "./catalog-resource-stack-navigator";
import CreateResourceStackNavigator from "./create-resource-stack-navigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    const theme = useTheme();

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: theme.colors.gray550,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 80,
                    backgroundColor: '#fff',
                },
            }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStackNavigator}
                options={() => ({
                    title: '',
                    tabBarIcon: ({focused}) => {
                        return (
                            <View
                                style={{
                                    top: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <FontAwesome
                                    name="columns"
                                    size={24}
                                    color={focused ? '#007bff' : '#111'}
                                />
                            </View>
                        );
                    },
                    headerShown: false,
                })}
            />

            <Tab.Screen
                name="CatalogResourceStack"
                component={CatalogResourceStackNavigator}
                options={() => ({
                    title: '',
                    tabBarIcon: ({focused}) => {
                        return (
                            <View
                                style={{
                                    top: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <FontAwesome
                                    name="list"
                                    size={24}
                                    color={focused ? '#007bff' : '#111'}
                                />
                            </View>
                        );
                    },
                    headerShown: false,
                })}
            />

            <Tab.Screen
                name="CreateResourceStack"
                component={CreateResourceStackNavigator}
                options={() => ({
                    title: '',
                    tabBarIcon: ({focused}) => {
                        return (
                            <View
                                style={{
                                    top: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <FontAwesome
                                    name="plus"
                                    size={24}
                                    color={focused ? '#007bff' : '#111'}
                                />
                            </View>
                        );
                    },
                    headerShown: false,
                })}
            />

            <Tab.Screen
                name="AccountStack"
                component={AccountStackNavigator}
                options={() => ({
                    title: '',
                    tabBarIcon: ({focused}) => {
                        return (
                            <View
                                style={{
                                    top: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <FontAwesome
                                    name="user"
                                    size={24}
                                    color={focused ? '#007bff' : '#111'}
                                />
                            </View>
                        );
                    },
                    headerShown: false,
                })}
            />
        </Tab.Navigator>
    );
};
