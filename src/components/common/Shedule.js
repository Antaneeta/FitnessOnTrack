import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Platform,
} from 'react-native';
import React, { useRef,useEffect,useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as color from '../../Themes/colors';
import LinearGradient from 'react-native-linear-gradient';

const Schedule = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [text, setText] = useState('')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios')
    setDate(currentDate);
  };

  const onclickDate = () => {
    setMode('time')
  }

  let tempDate = new Date();

  
  const LeftIcon = props?.leftIcon
    ? props.leftIcon
    : () => <Feather name="chevron-left" size={30} color={color.Black} />;
  const RightIcon = props?.rightIcon
    ? props.rightIcon
    : () => <Feather name="chevron-right" size={24} color={color.Gray2} />;

  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient colors={[color.White, `rgba(66,215,66, 0.15)`]} style={styles.container}>
        <TouchableOpacity>
          <Feather name="calendar" size={25} color={color.Gray2} />
          {/* {show && (
            <DateTimePicker
            mode={mode}
            value={date}+
            is24Hour={true}
            display="default"
            onChange={onChange}/>
          )} */}
          
        </TouchableOpacity>
        <Text style={styles.title}>Schedule </Text>
        {props?.title ? <Text style={[styles.title, props.titleStyle]}>{props?.title}</Text> : <></>}
        <TouchableOpacity>
          <RightIcon />
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    borderColor: color.BorderColor,
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 17,
    width: '95%',
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: color.Gray2,
    marginTop: 8,
  },
  titleContainer: {
    alignItems: 'center',
  },
});
