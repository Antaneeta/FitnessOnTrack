import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { Button, GreenButton, Header, Layout, Toggle } from '../../../components'
import * as colors from '../../../Themes/colors';
import * as images from '../../../assets/image';



const Profile = () => {
  return (
    <ScrollView>
      <Layout>

        <Header title={'Profile'} titleStyle={styles.titleStyle1} />
        <View style={{marginBottom:50}}>
          <View style={styles.primaryView}>
            <Image source={images.profilePhoto} />
            <Text style={styles.primaryTitle}>Antaneeta </Text>
            <GreenButton buttonStyle={styles.buttonStyle} title={'Edit'} titleStyle={styles.primaryTextTitle} />
          </View>
          <View style={[styles.primaryView]}>
            <View style={styles.shadowProp}>
              <View style={{ borderRadius: 15 }}>
                <Text style={styles.text}>160 cm</Text>
                <Text style={styles.text}>Height</Text>
              </View>
            </View><View style={styles.shadowProp}>
              <View style={{ borderRadius: 15 }}>
                <Text style={styles.text}>60 kg</Text>
                <Text style={styles.text}>Weight</Text>
              </View>
            </View><View style={styles.shadowProp}>
              <View style={{ borderRadius: 15 }}>
                <Text style={styles.text}>26</Text>
                <Text style={styles.text}>Age</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={{color:colors.Black, fontWeight:'700'}}>Account</Text>
            <View style={[styles.primaryView, { marginVertical: 10 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name='user' size={26} color={colors.purple}/>
                <Text style={styles.text}>Personal Data</Text>
              </View>
              <AntDesign name='right' size={20} />
            </View>
            <View style={[styles.primaryView, { marginVertical: 10 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='document-text-outline' size={26} color={colors.purple}/>
                <Text style={styles.text}>Achievements</Text>
              </View>
              <AntDesign name='right' size={20} />
            </View>
            <View style={[styles.primaryView, { marginVertical: 10 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name='pie-chart' size={26} color={colors.purple}/>
                <Text style={styles.text}>Activity History</Text>
              </View>
              <AntDesign name='right' size={20} color={colors.purple}/>
            </View>
            <View style={[styles.primaryView, { marginVertical: 10 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name='barschart' size={26} color={colors.purple}/>
                <Text style={styles.text}>Workout</Text>
              </View>
              <AntDesign name='right' size={20} color={colors.purple}/>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={{color:colors.Black, fontWeight:'700'}}>Notification</Text>
            <View style={styles.primaryView}>
              <View style={{ flexDirection: 'row' }}>
                <Feather name='bell' size={20} color={colors.purple}/>
                <Text style={styles.text}>Pop-up Notification</Text>
              </View>
              <Toggle />
            </View>
          </View>
          <View style={styles.card}>
            <Text>Other</Text>
            <View style={[styles.primaryView, { marginVertical: 10 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <SimpleLineIcon name='envelope' size={26} color={colors.purple}/>
                <Text style={styles.text}>Contact us</Text>
              </View>
              <AntDesign name='right' size={20} color={colors.purple}/>
            </View>
            <View style={[styles.primaryView, { marginVertical: 10 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcon name='privacy-tip' size={26} color={colors.purple}/>
                <Text style={styles.text}>Privacy and policy</Text>
              </View>
              <AntDesign name='right' size={20} color={colors.purple}/>
            </View>
            <View style={[styles.primaryView, { marginVertical: 10 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name='settings' size={26} color={colors.purple}/>
                <Text style={styles.text}>Settings</Text>
              </View>
              <AntDesign name='right' size={20} color={colors.purple}/>
            </View>

          </View>
        </View>
      </Layout>
    </ScrollView>


  )
}

export default Profile

const styles = StyleSheet.create({
  titleStyle1: {
    color: colors.Black,
  },
  text:{
    color:colors.Gray2,
    marginLeft:15
  },
  attachment: {
    backgroundColor: colors.BorderColor,
    borderColor: colors.BorderColor,
    borderWidth: 1,
    borderRadius: 15,
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    flexDirection: 'row',
  },
  buttonStyle: {
    width: 100,
    height: 38
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: colors.LightBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.32,
    elevation: 20,
    marginVertical: 10,
    marginHorizontal: 25,
    padding: 10,
    borderColor: colors.LightBlue
  },
  shadowProp: {
    width: '30%',
    height: 100,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: colors.LightBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.32,
    elevation: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    borderColor: colors.LightBlue
  },
  primaryTitle: {
    fontWeight: '700',
    color: colors.DarkPurple,
    fontSize: 19,
    marginRight: 15,
    marginVertical: 20,
  },
  primaryTextTitle: {
    fontWeight: '700',
    color: colors.White,
    fontSize: 13,
    marginRight: 15,
  },
  primaryView: {
    flexDirection: 'row',
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});