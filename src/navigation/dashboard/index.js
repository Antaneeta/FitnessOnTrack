import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { screens } from "../../constants";
import { DashBoard, Welcome } from "../../containers";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={screens.HOME} component={DashBoard} />
      <Drawer.Screen name={screens.WELCOME} component={Welcome}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
