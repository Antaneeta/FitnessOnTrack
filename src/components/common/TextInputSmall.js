import React from 'react';
import {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BorderColor, Gray2 } from '../../Themes/colors';


const TextInputSmall = props => {
  // const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View
      style={[
        styles.mainView,
        props.err
          ? {
              borderColor: '#F00',
              borderWidth: 2,
            }
          : {},
      ]}>
      <View style={styles.subView}>
        <View style={{marginRight: 10}}>
          <Icon
            color={props.iconColor}
            name={props.iconName}
            size={props.iconSize}
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
          placeholderTextColor={'#000'}
            { ...props.textInput }
            style={[styles.textStyle]}
          />
        </View>
        {/* {
          props?.isPassword ?
<View style={{marginRight: 18, marginLeft: 5}}>
          <TouchableOpacity onPress={() => {
            if (props.setPasswordVisible) props.setPasswordVisible(!props.passwordVisible)
          }}>
            <Icon
              color={props.iconColor}
              name={props.passwordVisible ? 'eye-off' : 'eye'}
              size={props.iconSize}
            />
          </TouchableOpacity>
        </View> : <></>
        } */}
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: BorderColor,
    borderColor: BorderColor,
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    marginBottom: 10,
    width:100
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

export default TextInputSmall;
