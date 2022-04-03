import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../constants';
import {Layout} from '../../../components';
import * as images from '../../../assets/image';
import * as Colors from '../../../Themes/colors';
import TextInputWithIcon from '../../../components/common/TextInputWithIcon';

const ProfileComplete = props => {
  const navigation = useNavigation();

  const onSuccess = () => {
    navigation.navigate(screens.SIGN_IN);
  };
  return (
    <Layout>
      <ImageBackground
        source={images.Background}
        style={{
          flex: 2,
          marginHorizontal: 25,
          marginVertical: 54,
        }}>
          <Image source={images.workoutGirl}/>
        </ImageBackground>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.title}>Let’s complete your profile</Text>
          <Text>It will help us to know more about you!</Text>
        </View>
        <View style={styles.textBox}>
          <TextInputWithIcon
            iconColor={Colors.TextSecoundaryColor}
            iconName={'user'}
            iconSize={20}
            placeHolderText={'Choose Gender'}
            placeHolderTextColor={Colors.TextSecoundaryColor}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.textBox}>
          <TextInputWithIcon
            iconColor={Colors.TextSecoundaryColor}
            iconName={'user'}
            iconSize={20}
            placeHolderText={'Date of Birth'}
            placeHolderTextColor={Colors.TextSecoundaryColor}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.textBox}>
          <TextInputWithIcon
            iconColor={Colors.TextSecoundaryColor}
            iconName={'user'}
            iconSize={20}
            placeHolderText={'Your Weight'}
            placeHolderTextColor={Colors.TextSecoundaryColor}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.textBox}>
          <TextInputWithIcon
            iconColor={Colors.TextSecoundaryColor}
            iconName={'user'}
            iconSize={20}
            placeHolderText={'Your Weight'}
            placeHolderTextColor={Colors.TextSecoundaryColor}
            secureTextEntry={false}
          />
        </View>
        
        <TouchableOpacity onPress={onSuccess} style={styles.greenButton}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default ProfileComplete;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 22,
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
    marginVertical:20
  },
  primartText: {
    fontSize: 13,
    color: Colors.TextPrimaryColor,
  },
  detailsContainer: {
    alignItems: 'center',
    flex: 3,
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
  btnText: {
    fontSize:18,
    color:Colors.TextPrimaryColor,
    fontWeight:'700',
  },
  textBox: {
    borderRadius: 10,
    borderColor: Colors.BorderColor,
    backgroundColor: Colors.BorderColor,
    height: 38,
    marginHorizontal: 25,
    marginVertical: 10,
    width:'80%'
  },
});
