import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashBoard, Welcome, WorkoutDetail, WorkoutRouitine, WorkoutTracker, ManageExercices, AddExercises, AddCustome, Exercise, ProfileComplete, Profile, Notification, MealPlanner, AddMeal } from "../../containers";
import { screens } from "../../constants";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={screens.HOME}
            screenOptions={{
                tabBarActiveTintColor: '#800080',
                headerShown: false,

            }}>
            <Tab.Screen name={screens.HOME} component={DashBoard}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name={screens.WORKOUT_TRACKER} component={WorkoutTracker}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="graph" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name={screens.PROFILE} component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name={screens.MEALPLANNER} component={MealPlanner} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="food-outline" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default MyTabs