import React from 'react';
import { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';


import * as colors from '../../Themes/colors';


const Picker = props => {
  // const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View
      style={[
        styles.mainView,
        props.mainViewStyles,
        props.error
          ? {
            borderColor: '#F00',
            borderWidth: 1,
          }
          : {},
      ]}>
      <RNPickerSelect
        value={props.value}
        placeholder={props.placeholder ? { label: props.placeholder, value: '' } : {}}
        onValueChange={props.onValueChange}
        items={props.items}
        style={{
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
          
        }} />

    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.BorderColor,
    borderColor: colors.BackgroundColor,
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    marginBottom: 10,
    width: '100%'
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 19,
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
    lineHeight: 18,
    width: '100%',
    // backgroundColor:'#f05'
  },
});

export default Picker;
