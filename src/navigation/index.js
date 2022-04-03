import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./auth";
import { useSelector } from "react-redux";
import DrawerNavigation from "./dashboard";

const Routes = (props) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {
        user ?
          <DrawerNavigation /> :
          <AuthStack />
      }
    </NavigationContainer>
  );
};

export default Routes;
