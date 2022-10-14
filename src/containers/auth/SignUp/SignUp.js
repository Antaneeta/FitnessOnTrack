import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { Layout } from '../../../components';
import { screens } from '../../../constants';
import TextInputWithIcon from '../../../components/common/TextInputWithIcon';
import * as Colors from '../../../Themes/colors';
import * as images from '../../../assets/image';

let { name } = { name: 'anta', age: 20 };
const SignUp = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(true)

  const onSignUp = () => {
    setIsLoading(true)
    auth()
      .createUserWithEmailAndPassword(
        email,
        password,
      )
      .then(() => {

        Toast.show({
          type: 'success',
          text1: 'User Created Successfully',
          text2: 'Login with new user 👋',
        });
props.navigation.navigate(screens.SIGN_IN);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'error',
            text1: 'That email address is already in use!'
          })
          props.navigation.navigate(screens.SIGN_IN);
        }

        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            text1: 'That email address is invalid!'
          })
        }
      });
    setIsLoading(false)

  };

  const onSignIn = () => {
    props.navigation.navigate(screens.SIGN_IN);
  };

  return (

    <Layout>
      {/* {isLoading ?
        <ActivityIndicator>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 100 }}>
            <ActivityIndicator size={40} color={Colors.TextGreen} />
          </View>
        </ActivityIndicator> : <> */}
          <View style={styles.detailsContainer}>
            <Text style={styles.primartText}>Hey there,</Text>
            <Text style={styles.title}>Create an Account</Text>
            <View style={styles.textInputContainer}>
              <TextInputWithIcon
                textInput={{
                  value: firstName,
                  onChangeText: text => setFirstName(text),
                  placeholder: 'First Name',
                  placeHolderTextColor: Colors.Gray2,
                }}
                iconColor={Colors.Gray2}
                iconName={'user'}
                iconSize={20}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInputWithIcon
                textInput={{
                  value: lastName,
                  onChangeText: text => setLastName(text),
                  placeholder: 'Last Name',
                  placeHolderTextColor: Colors.Gray2,
                }}
                iconColor={Colors.Gray2}
                iconName={'user'}
                iconSize={20}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInputWithIcon
                textInput={{
                  value: email,
                  onChangeText: text => setEmail(text),
                  placeholder: 'Email',
                  placeHolderTextColor: Colors.Gray2,
                }}
                iconColor={Colors.Gray2}
                iconName={'mail'}
                iconSize={20}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInputWithIcon
                textInput={{
                  value: password,
                  onChangeText: text => setPassword(text),
                  placeholder: 'Password',
                  placeHolderTextColor: Colors.Gray2,
                  secureTextEntry: true,
                }}
                iconColor={Colors.Gray2}
                iconName={'lock'}
                iconSize={20}
              />
            </View>
            <Text style={styles.termCondition}>
              By continuing you accept our Privacy Policy and Term of Use
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <TouchableOpacity onPress={onSignUp} style={styles.greenButton}>
              <Text style={styles.titleButton}>Register</Text>
            </TouchableOpacity>
            <View />
            <Text>Or</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Image source={images.google} />
              </View>
              <View style={styles.iconContainer}>
                <Image source={images.faceBook} />
              </View>
            </View>
            <View>{/* Icons */}</View>
            <View style={styles.row}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={onSignIn}>
                <Text> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        {/* </>} */}

    </Layout>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    color: Colors.TextPrimaryColor,
    fontWeight: '800',
  },
  titleButton: {
    fontSize: 18,
    color: Colors.TextPrimaryColor,
    fontWeight: '700',
  },
  greenButton: {
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.TextGreen,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primartText: {
    fontSize: 16,
    color: Colors.TextPrimaryColor,
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  termCondition: {
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  textInputContainer: {
    borderRadius: 20,
    borderColor: Colors.BorderColor,
    backgroundColor: Colors.BorderColor,
    height: 50,
    marginHorizontal: 25,
    marginVertical: 10,
    width: '80%',
  },
  textInput: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    borderRadius: 15,
    borderColor: Colors.Gray2,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
  },
  iconForInput: {},
  registerBtnContainer: {},
  btnText: {},
});
