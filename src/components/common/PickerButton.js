import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import * as color from '../../Themes/colors';
import LinearGradient from 'react-native-linear-gradient';

const PickerButton = props => {
  

  return (
    <TouchableOpacity>
      <LinearGradient colors={['#C58BF2', `#EEA4CE`]} style={styles.container}>
        
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PickerButton;

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
    
    alignItems: 'center',
    padding: 10,
    borderRadius: 17,
    width:50,
    height:50
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: color.Gray2,
    marginTop: 8,
  },
  titleContainer: {
    alignItems: 'center',
  },
});
