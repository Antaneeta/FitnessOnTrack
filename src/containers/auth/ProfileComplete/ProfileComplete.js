import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import storage from '@react-native-firebase/storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { screens } from '../../../constants';
import { Layout, PickerButton } from '../../../components';
import * as images from '../../../assets/image';
import * as Colors from '../../../Themes/colors';
import TextInputWithIcon from '../../../components/common/TextInputWithIcon';
import { Value } from 'react-native-reanimated';
import { setUserProfile } from '../../../redux/actions/authActions';

const ProfileComplete = props => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.auth.user)
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [date, setDate] =useState(new Date())
  const [showDate, setShowDate] = useState(false)
  const [isLoading, setIsLoading] = useState();
  const [measuringUnit, setMeasuringUnit] =useState('kg')
  const [measureHeight, setMeasureHeight] =useState('cm')
  const setToDefault = () => {
    setGender('');
    setDOB('');
    setWeight(null);
    setHeight(null);
  }
  const navigation = useNavigation();
  const onSuccess = () => {
    try {
      const profile = {
        gender,
        dob,
        height,
        weight,
      }
      firestore()
        .collection('Profile')
        .doc(user.uid)
        .set(profile)
        .then(result => {
          dispatch(setUserProfile (profile) )
          setToDefault()
          Toast.show({
            type: 'success',
            text2: 'Added to the Workout list 👋',
            text1: 'User Profile Data successfully added '
          });
          console.log(result);
          navigation.navigate(screens.HOME);
        })
        .then(snapshot => {
          const profile = {
            gender,
            dob,
            height,
            weight,
          }
        })
        .catch(error => {
          Toast.show({
            type: 'error',
            text1: 'Something Went Wrong 🙄',
          });
        });
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>

      <Image source={images.workoutGirl} />

      <View style={styles.detailsContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Let’s complete your profile</Text>
          <Text style={styles.subTitle}>It will help us to know more about you!</Text>
        </View>
        <View style={styles.textBox}>
          <TextInputWithIcon
            iconColor={Colors.TextSecoundaryColor}
            iconName={'users'}
            iconSize={20}
            textInput={{
              placeholder: 'Choose Gender',
              value: gender,
              onChangeText: text => setGender(text),
            }}
            // placeHolderTextColor={Colors.TextSecoundaryColor}
            secureTextEntry={false}

          />
        </View>
        <View style={[styles.textBox,]}>
        <View style={{backgroundColor: '#F7F8F8',flex:1,paddingVertical:5, height:46, borderRadius:8, flexDirection:'row'}}>
        <TouchableOpacity onPress={ () => setShowDate(true)}>
          <AntDesign name='calendar' size={24} style={{paddingLeft:16}} color={Colors.TextSecoundaryColor}/>
        </TouchableOpacity>
        { showDate && <DateTimePicker mode="date" value={new Date()} onChange={(event, date) => {
          setShowDate(false)
          if (event.type === 'set') {
            setDate(date)
          }
        }}/>}
          <Text style={{fontSize:15,marginLeft:25, color:'#404040'}} onChangeText={setDate}>{moment(date).format("YYYY-MM-DD")}</Text>
        </View>
        
        </View>
        <View style={styles.textBox}>
          <TextInputWithIcon
            mainViewStyles={{
              flex: 1,
              marginRight: 5
            }}
            iconColor={Colors.TextSecoundaryColor}
            iconName={'arrow-up'}
            iconSize={20}
            secureTextEntry={false}
            textInput={{
              placeholder: 'Your Weight',
              Value:weight,
              onChangeText: text => setWeight(text),
            }}
          />
          <View style={{ flex: 1, marginLeft: 5 }}>
          <PickerButton onValueChange={setMeasuringUnit} items={[{ label: 'kg (kilo grams)', value: 'kg' }, { label: 'lb (Pounds)', value: 'lb'}]}/>
          </View>
          
        </View>
        <View style={styles.textBox}>
          <TextInputWithIcon
            iconColor={Colors.TextSecoundaryColor}
            iconName={'user'}
            iconSize={20}
            secureTextEntry={false}
            textInput={{
              placeholder: 'Your Height',
              value:height,
              onChangeText: text => setHeight(text),
            }}
            mainViewStyles={{
              flex: 1,
              marginRight:5
            }}
          />
          <View style={{ flex: 1, marginLeft: 5 }}>
            <PickerButton items={[{ label: 'cm (centimeters)', value: 'cm' }, { label: 'feet', value: 'feet'}]} onChange={setMeasureHeight}/>
          </View>
        </View>

        <TouchableOpacity onPress={onSuccess} style={styles.greenButton}>
          <Text style={styles.btnText}>Next</Text>
          <Icon name='chevron-right' color={'#000'} size={25} />
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
    fontFamily: 'Poppins'
  },
  subTitle: {
    fontSize: 13,
    color: Colors.Gray2,
    fontWeight: '600',
    fontFamily: 'Poppins',
    marginBottom: 25
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
    marginVertical: 20,
    flexDirection: 'row'
  },
  primartText: {
    fontSize: 13,
    color: Colors.TextPrimaryColor,
  },
  detailsContainer: {
    alignItems: 'center',
    alignItems: 'center'
    // flex: 1,
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
    fontSize: 18,
    color: Colors.TextPrimaryColor,
    fontWeight: '700',
    marginRight: 10
  },
  textBox: {
    borderRadius: 10,
    height: 38,
    marginHorizontal: 25,
    marginVertical: 10,
    width: '80%',
    flexDirection: 'row',
  },
});
