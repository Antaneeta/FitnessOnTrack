import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { screens } from '../../../constants';
import { Layout } from '../../../components';
import * as images from '../../../assets/image';
import * as Colors from '../../../Themes/colors';

const Welcome = props => {
  const navigation = useNavigation();

  const onClick = () => {
    props.navigation.navigate(screens.HOME);
  };
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image source={images.welcomeScreen} style={{ height: 340, width: 310 }} />
          <Text style={styles.title}>Welcome, Antaneeta</Text>
          <Text style={styles.primartText}>You are all set now, let’s reach your goals together</Text>
        </View>

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
    alignItems: 'center',
    flex: 1,
  },
  topContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:50
  },
  title: {
    fontSize: 20,
    color: Colors.TextPrimaryColor,
    fontWeight: '800',
    marginTop:35
  },
  primartText: {
    fontSize: 13,
    color: Colors.Gray2,
    fontWeight:'700',
    marginHorizontal:50,
    textAlign:'center'
  },
  titleButton: {
    fontSize: 18,
    color: Colors.TextPrimaryColor,
    fontWeight: '700'
  },
  greenButton: {
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.TextGreen,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100
  },
});
