import React from 'react';
import {View, Text} from 'react-native';

export default toastConfig = {
  error: ({text1, props}) => (
    <View
      style={{
        width: '90%',
        backgroundColor: 'white',
        borderLeftColor: 'red',
        borderLeftWidth: 8,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 8,
      }}>
      <Text style={{fontFamily: 'Lato-Bold'}}>{text1}</Text>
    </View>
  ),
  success: ({text1, props}) => (
    <View
      style={{
        width: '90%',
        backgroundColor: 'white',
        borderLeftColor: '#773CBA',
        borderLeftWidth: 8,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 8,
      }}>
      <Text style={{fontFamily: 'Lato-Bold'}}>{text1}</Text>
    </View>
  ),
};
