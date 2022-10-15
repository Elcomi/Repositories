import React from "react";
import { Dimensions } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExploreScreen from "../screens/explore.screen"
import RepositoriesScreen from "../screens/repositories.screen"
import { colors } from "../theme/colors"

const totalWidth = Dimensions.get("screen").width


const Tab = createMaterialTopTabNavigator();


export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        tabBarOptions={{
          upperCaseLabel: false,
          scrollEnabled: true,
          activeTintColor: colors.brand.primary,
          inactiveTintColor: colors.text.primary,
          indicatorStyle: {
            backgroundColor: colors.brand.secondary,
            width: totalWidth / 4,
            left: totalWidth / 20,
          }
        }}
        screenOptions={{
          tabBarItemStyle: { width: 130 },
          tabBarLabelStyle: { fontSize: 14, textTransform: "capitalize", fontWeight: "bold" }
        }}>
        <Tab.Screen name='Explore' component={ExploreScreen} options={{ tabBarLabel: "Explore" }} />
        <Tab.Screen name='Repositories' component={RepositoriesScreen} options={{ tabBarLabel: "Repositories" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};