import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from '../../Themes/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddIcon = props => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={props.onPress}>
      <Ionicons name="add" size={25} color={colors.White} />
    </TouchableOpacity>
  );
};

export default AddIcon;

const styles = StyleSheet.create({
  addButton: {
    borderRadius: 10,
    backgroundColor: colors.TextGreen,
    paddingHorizontal: 9,
    flexDirection: 'row-reverse',
    alignItems:'center',
    width: 40,
    height: 40,
    marginHorizontal: 25,
    zIndex: 10,
    justifyContent:'center'
  },
});
