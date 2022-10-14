import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Platform,
} from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import * as color from '../../Themes/colors';
import LinearGradient from 'react-native-linear-gradient';

const Schedule = props => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [text, setText] = useState('')
  const [date, setDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)
  const [time, setTime] = useState(new Date())
  const [showTime, setShowTime] = useState(false)
  const [isLoading, setIsLoading] = useState();

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
        <TouchableOpacity onPress={() => setShowDate(true)}>
          <AntDesign name='calendar' size={24} style={{ paddingLeft: 16 }} color={color.TextSecoundaryColor} />
        </TouchableOpacity>
        {showDate && <DateTimePicker mode="date" value={new Date()} onChange={(event, date) => {
          setShowDate(false)
          if (event.type === 'set') {
            setDate(date)
          }
        }} />}
        <Text style={[styles.title, props.titleStyle]} onChangeText={setDate}>{moment(date).format("YYYY-MM-DD")} </Text>

        <TouchableOpacity onPress={() => setShowTime(true)}>
          <AntDesign name='clockcircleo' size={24} style={{ paddingLeft: 16 }} color={color.TextSecoundaryColor} />
        </TouchableOpacity>
        <Text style={{ color: color.Gray2 }}>{moment(time).format('hh:mm:ss')}</Text>
        {showTime && <DateTimePicker mode="time" value={new Date()} onChange={(event, newTime) => {
          console.log({event, newTime}, moment(newTime).format('hh:mm:ss'))
          setShowTime(false)
          if (event.type === 'set') {
            setTime(newTime)
          }
        }} />}
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
