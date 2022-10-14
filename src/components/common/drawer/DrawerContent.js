import { View, Text, StyleSheet, Button as Btn , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import auth from '@react-native-firebase/auth'

import { screens } from '../../../constants'
import { hp,wp } from '../../../utils/screenResponsiveFunctions'
import * as colors from '../../../Themes/colors'
import * as images from '../../../assets/image'

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={images.profilePhoto} style={{height:90,width:90, borderRadius:45,backgroundColor:colors.White,marginHorizontal:39,marginVertical:26}}/>
          <Text style={styles.profileName}>Antaneeta</Text>
          <Text>antaneeta97@gmail.com</Text>
        </View>
        <View style={styles.sections}>
          <TouchableOpacity style={styles.itemSection} onPress={() => {props.navigation.navigate(screens.HOME)}}>
            <MaterialCommunityIcons name='home' size ={25} color={colors.purple}/>
            <Text style={styles.textItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemSection} onPress={() => {props.navigation.navigate(screens.WORKOUT_ROUITINE)}}>
            <MaterialCommunityIcons name='dumbbell' size ={25} color={colors.purple}/>
            <Text style={styles.textItem}>Workout Routines</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemSection} onPress={() => {props.navigation.navigate(screens.MEALPLANNER)}}>
            <MaterialCommunityIcons name='food' size ={25} color={colors.purple}/>
            <Text style={styles.textItem}>Meal Tracker</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemSection}>
            <Entypo name='bar-graph' size ={25} color={colors.purple}/>
            <Text style={styles.textItem}>Progress</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemSection}>
            <MaterialCommunityIcons name='clock-time-eight-outline' size ={25} color={colors.purple}/>
            <Text style={styles.textItem}>Shedules</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemSection}>
            <MaterialIcons name='privacy-tip' size ={25} color={colors.purple}/>
            <Text style={styles.textItem}>Privacy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemSection}>
            <MaterialIcons name='settings' size ={25} color={colors.purple}/>
            <Text style={styles.textItem}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemSection}>
            <MaterialCommunityIcons name='help' size ={25} color={colors.purple}/>
            <Text style={styles.textItem}>Help</Text>
          </TouchableOpacity>

        </View>
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 170, width: 170, justifyContent: 'flex-end', marginLeft: wp(60), marginTop: hp(15) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 15, width: 15, justifyContent: 'flex-end', marginLeft: wp(70), marginTop: hp(3) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 15, width: 15, justifyContent: 'flex-end', marginLeft: wp(10), marginTop: hp(20) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 170, width: 170, justifyContent: 'flex-end', marginLeft: wp(-20), marginTop: hp(25) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 20, width: 20, justifyContent: 'flex-end', marginLeft: wp(30), marginTop: hp(30) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 15, width: 15, justifyContent: 'flex-end', marginLeft: wp(60), marginTop: hp(75) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 170, width: 170, justifyContent: 'flex-end', marginLeft: wp(30), marginTop: hp(80) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 100, width: 100, justifyContent: 'flex-end', marginLeft: wp(25), marginTop: hp(55) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 160, width: 160, justifyContent: 'flex-end', marginLeft: wp(-20), marginTop: hp(75) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 15, width: 15, justifyContent: 'flex-end', marginLeft: wp(30), marginTop: hp(70) }} />
        <View style={{ borderRadius: 150, backgroundColor: `rgba(180,	192, 254, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 15, width: 15, justifyContent: 'flex-end', marginLeft: wp(60), marginTop: hp(40) }} />

        <Btn title={'Sign Out'} onPress={onSignOut} color={colors.purple}/>
    </DrawerContentScrollView>
  )
}

export default DrawerContent

const styles = StyleSheet.create ({
    container: {
        paddingTop: 0,
        backgroundColor: colors.BorderColor,
        flex:1,
    
      },
      profileName:{
        color:colors.purple,
        fontSize:18,
        fontWeight:'500'
      },
      header: {
        // backgroundColor: colors.White,
        width:'100%',
        height:200,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:colors.Gray2,
        borderBottomWidth:2
      },
      profileImage: {
        backgroundColor: colors.BorderColor,
        borderRadius: 50,
        // borderWidth: 2,
        borderColor: '#000',
        overflow: 'hidden',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
      },
      sections:{
        flex:1,
        backgroundColor:colors.White,
        paddingLeft:25
      },
      itemSection:{
        flexDirection:'row',
        marginVertical:13
      },
      textItem: {
        marginLeft:23,
        color:colors.Gray2
      }
})

const onSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(error => console.error(error));
  };
  const showDrawer = () => {
    navigation.openDrawer();
  }