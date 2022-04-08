import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { screens } from "../../constants";
import { DashBoard, Welcome, WorkoutDetail, WorkoutRouitine, WorkoutTracker } from "../../containers";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={screens.HOME} component={DashBoard} />
      <Drawer.Screen name={screens.WELCOME} component={Welcome}/>
      <Drawer.Screen name={screens.WORKOUT_TRACKER} component={WorkoutTracker}/>
      <Drawer.Screen name={screens.WORKOUT_DETAIL} component={WorkoutDetail}/>
      <Drawer.Screen name={screens.WORKOUT_ROUITINE} component={WorkoutRouitine}/>

    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
