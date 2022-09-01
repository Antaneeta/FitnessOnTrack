import React, { use } from "react";
import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


import { screens } from "../../../constants";
import * as component from '../../../containers'
    
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Drawer = () => {
 return (
    <DrawerContentScrollView>
      <Text>CustomeDrawer</Text>
    </DrawerContentScrollView>
  )
}


export default function CustomeDrawer() {
    const progress = useDrawerProgress();
  
    const scale = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
  
    const borderRadius = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [0, 30],
    });
  
    const animatedStyle = {
      borderRadius,
      transform: [{ scale }],
    };
  
    return (
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        <Tab.Navigator tabBar={(props) => <Drawer {...props} />}>
          <Tab.Screen
            name={screens.ADD_EXERCISES}
            component={component.AddExercises}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name={screens.EXERCISE}
            component={component.ManageExercices}
            options={{ headerShown: false }}
          />
          {/* <Tab.Screen
            name={"CategoryList"}
            component={CategoryStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name={.notificationScreen}
            component={NotificationScreen}
            options={{ headerShown: false }}
          /> */}
  
        </Tab.Navigator>
      </Animated.View>
    );
  }