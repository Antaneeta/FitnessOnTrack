import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {screens} from '../../../constants';
import {Layout} from '../../../components';
import * as images from '../../../assets/image';
import * as Colors from '../../../Themes/colors';

const Welcome = props => {
  const navigation = useNavigation();

  const onClick = () => {
    props.navigation.navigate(screens.DASHBOARD);
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={images.welcomeScreen} style={{height:350,}}/>
        <Text style={styles.title}>Welcome, Antaneeta</Text>
        <Text>You are all set now, let’s reach your goals together</Text>
        
        <TouchableOpacity onPress={onClick} style={styles.greenButton}>
              <Text style={styles.titleButton}>Go to Home</Text>
          </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  title: {
    fontSize: 20,
    color: Colors.TextPrimaryColor,
    fontWeight: '800',
  },
  primartText: {
    fontSize: 16,
    color: Colors.TextPrimaryColor,
  },
  titleButton: {
    fontSize:18,
    color:Colors.TextPrimaryColor,
    fontWeight:'700'
  },
  greenButton:{
    height:50,
    borderRadius:50,
    backgroundColor:Colors.TextGreen,
    width:'80%',
    justifyContent:'center',
    alignItems:'center'
  },
});
