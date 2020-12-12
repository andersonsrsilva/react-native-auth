import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { isIphoneX } from 'react-native-iphone-x-helper';
import { FontAwesome } from '@expo/vector-icons';

import { COLORS } from "../constants"
import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Favorite from '../pages/Favorite';

const Tab = createBottomTabNavigator();

const CustomTabBar = (props: any) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.white
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="home"
                            size={25}
                            color={focused ? COLORS.primary : COLORS.secondary}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="search"
                            size={25}
                            color={focused ? COLORS.primary : COLORS.secondary}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="star"
                            size={25}
                            color={focused ? COLORS.primary : COLORS.secondary}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="user"
                            size={25}
                            color={focused ? COLORS.primary : COLORS.secondary}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
