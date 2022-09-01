import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageStore,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Toast } from 'react-native-toast-message';

import {
  TextPrimaryColor,
  borderColor,
  TextSecoundaryColor,
  TextGreen,
} from '../../../Themes/colors';
import TextInputWithIcon from '../../../components/common/TextInputWithIcon';
import * as images from '../../../assets/image';
import {screens} from '../../../constants/index';
import * as Colors from '../../../Themes/colors';

const SignIn = props => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'error',
            text2: 'The email is already used',
          });
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const onSignUp = () => {
    props.navigation.navigate(screens.SIGN_UP);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>Hey there,</Text>
        <Text style={styles.title}>Welcome Back</Text>
      </View>

      <View style={styles.textBox}>
        <TextInputWithIcon
          textInput={{
            value: email,
            onChangeText: text => setEmail(text),
            placeholder: 'Email',
            placeHolderTextColor: Colors.Gray2,
          }}
          iconColor={TextSecoundaryColor}
          iconName={'mail'}
          iconSize={20}
        />
      </View>
      <View style={styles.textBox}>
        <TextInputWithIcon
          textInput={{
            value: password,
            onChangeText: text => setPassword(text),
            placeholder: 'Password',
            placeHolderTextColor: Colors.Gray2,
            secureTextEntry: true,
          }}
          iconColor={TextSecoundaryColor}
          iconName={'lock'}
          iconSize={20}
        />
      </View>
      <View style={styles.textSecound}>
        <Text style={styles.secoundText}>Forget your Password?</Text>
      </View>

      <View style={[styles.titleContainer,{marginTop:'40%'}]}>
        <TouchableOpacity style={styles.button} onPress={onSignIn}>
          <Entypo color={Colors.White} size={20} name={'login'}/>
          <Text style={{fontWeight:'700', color:Colors.White, fontSize:18,marginHorizontal:15}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.separator}>Or</Text>
      </View>
      <View style={[styles.iconContainers]}>
        <View style={styles.iconContainer}>
          <Image source={images.google} />
        </View>
        <View style={styles.iconContainer}>
          <Image source={images.faceBook} />
        </View>
      </View>
      <TouchableOpacity onPress={onSignUp} style={styles.secoundText}>
        <Text style={{color:Colors.Black, fontWeight:'600',fontSize:14,marginRight:10}}>Don't you have account?</Text>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:60
  },
  separator: {
    borderBottomColor: TextPrimaryColor,
    borderBottomWidth: 2,
  },
  button: {
    borderRadius: 20,
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TextGreen,
    flexDirection:'row'
  },
  secoundText: {
    alignItems: 'center',
    marginVertical: 10,
    fontSize:16,
    color:Colors.Gray2,
    fontWeight:'400',
    flexDirection:'row',
    justifyContent:'center',
    textDecorationLine: 'underline'
  },
  text: {
    borderBottomColor: TextSecoundaryColor,
    borderBottomWidth: 1,
  },
  titleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainers: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textBox: {
    borderRadius: 10,
    borderColor: borderColor,
    backgroundColor: borderColor,
    height: 50,
    marginHorizontal: 25,
    marginVertical: 8,
  },
  subTitle: {
    color: TextPrimaryColor,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: TextPrimaryColor,
    fontSize: 20,
    fontWeight: '700',
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
  textSecound:{
    alignItems:'center'

  }
});
export default SignIn;
