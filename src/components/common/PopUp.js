import {View, Text, Modal, StyleSheet, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState} from 'react';

import {colors} from '../../constants';
import * as color from '../../Themes/colors';

import GreenButton from './GreenButton';
const PopUp = ({visible, setVisible, onPress, newRouting, setNewRouting}) => {

  const onCreate = props => {
    if (newRouting === '') return ToastAndroid.show('Empty text', ToastAndroid.SHORT)
    const newWorkout = {
      id: Date.now(),
      title: newRouting,
    }
    onPress(newWorkout)
    setNewRouting('')
    setVisible(false)
  }

  const onChangeText = text => {
    setNewRouting(text)
  }

  return (
    <Modal transparent={true} visible={visible}>
      <TouchableOpacity style={styles.container} onPress={() => setVisible(false)}>
        <View style={styles.innerContainer} onStartShouldSetResponder={() => true}>
          <Text style={styles.title}>New Routine</Text>
          <TextInput value={newRouting} onChangeText={onChangeText} placeholder={'_ __ __ __ __ __ __ __ __ __ __ __ __ __ '} placeholderTextColor={color.purple} color={color.DarkPurple}/>
          <GreenButton title={'Create'} onPress={onCreate} titleStyle={styles.titleStyle}/>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '80%',
    height: 200,
    backgroundColor: '#FFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
  },
  titleStyle:{
    fontSize:20,
    color:'#ffff',
    fontWeight:'700',
  },
  title:{
    fontSize:20,
    fontWeight:'700',
    color:'#000'
  }
});
