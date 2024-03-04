import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Icon, { Icons } from '../utils/theme/Icons';
import Colors from '../utils/theme/Colors';

import HomeStackNavigator from "./home-stack-navigator";
import AccountStackNavigator from "./account-stack-navigator";
import CatalogResourceStackNavigator from "./catalog-resource-stack-navigator";
import CreateResourceStackNavigator from "./create-resource-stack-navigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TabArr = [
    { route: 'HomeStack', label: 'Tableau de bord', type: Icons.Ionicons, activeIcon: 'view-dashboard', inActiveIcon: 'grid-outline', component: HomeStackNavigator },
    { route: 'CatalogResourceStack', label: 'Catalogue des ressources', type: Icons.Ionicons, activeIcon: 'format-list-bulleted', inActiveIcon: 'list-circle-outline', component: CatalogResourceStackNavigator },
    { route: 'CreateResourceStack', label: 'Ajouter une ressource', type: Icons.MaterialCommunityIcons, activeIcon: 'card-plus', inActiveIcon: 'card-plus-outline', component: CreateResourceStackNavigator },
    { route: 'AccountStack', label: 'Mon compte', type: Icons.FontAwesome, activeIcon: 'account', inActiveIcon: 'user-circle-o', component: AccountStackNavigator },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
        } else {
            viewRef.current.animate({0: {scale: 1, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
                ref={viewRef}
                duration={1000}
                style={styles.buttonIcon}>
                <MaterialCommunityIcons name={focused ? item.activeIcon : item.inActiveIcon} size={25} color={focused ? Colors.primaryDark : Colors.primaryLite} />
            </Animatable.View>
        </TouchableOpacity>
    )
}

export default function BottomTabNavigator(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#2780e3',
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    left: 16,
                    borderRadius: 16,
                }
            }}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarIcon: ({ color, size }) => (
                                <View style={styles.buttonIcon}>
                                    <MaterialCommunityIcons name={item.activeIcon} color={color} size={size} />
                                </View>
                            ),
                            //tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        borderColor: '#000',
        borderWidth: 2,
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
