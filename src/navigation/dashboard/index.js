import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { screens } from "../../constants";
import { useSelector } from "react-redux";
import { DashBoard, Welcome, WorkoutDetail, WorkoutRouitine, WorkoutTracker, ManageExercices, AddExercises, AddCustome, Exercise, ProfileComplete, Profile, Notification, MealPlanner, AddMeal } from "../../containers";
import DrawerContent from "../../components/common/drawer/DrawerContent";
import CustomeDrawer from "../../components/common/drawer/CustomeDrawer";
import MyTabs from "../bottomTab/BottomTab";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const userProfile = useSelector(state => state.auth.userProfile)
  return (
    // <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName={userProfile ? screens.HOME : screens.PROFILE_COMPLETE}>
    <Drawer.Navigator 
     drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{ headerShown: false }} initialRouteName={userProfile ? screens.HOME : screens.PROFILE_COMPLETE}>
      <Drawer.Screen name="MYTABS" component={MyTabs}/>
      <Drawer.Screen name={screens.PROFILE_COMPLETE} component={ProfileComplete}/>
      {/* <Drawer.Screen name={screens.HOME} component={DashBoard} /> */}
      <Drawer.Screen name={screens.WELCOME} component={Welcome}/>
      {/* <Drawer.Screen name={screens.WORKOUT_TRACKER} component={WorkoutTracker}/> */}
      <Drawer.Screen name={screens.WORKOUT_DETAIL} component={WorkoutDetail} />
      <Drawer.Screen name={screens.WORKOUT_ROUITINE} component={WorkoutRouitine} />
      <Drawer.Screen name={screens.MANAGE_EXERCICES} component={ManageExercices} />
      <Drawer.Screen name={screens.ADD_EXERCISES} component={AddExercises} />
      <Drawer.Screen name={screens.ADD_CUSTOME_WORKOUT} component={AddCustome}/>
      <Drawer.Screen name={screens.EXERCISE} component={Exercise}/>
      {/* <Drawer.Screen name={screens.PROFILE} component={Profile}/> */}
      <Drawer.Screen name={screens.NOTIFICATION} component ={Notification}/>
      <Drawer.Screen name={screens.MEALPLANNER} component ={MealPlanner}/>
      <Drawer.Screen name={screens.ADDMEAL} component ={AddMeal}/>

    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
