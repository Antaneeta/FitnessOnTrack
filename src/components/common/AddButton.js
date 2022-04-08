import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from '../../Themes/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddButton = props => {
  return (
    <TouchableOpacity style={{flexDirection:'row-reverse', marginHorizontal:25, bottom:0, right:0, zIndex:10}} onPress={props.onPress}>
      <View style={styles.addButton}>
        <Ionicons name="add" size={30} color={colors.White} />
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  
  addButton: {
    borderRadius: 50,
    backgroundColor: colors.TextGreen,
    padding: 17,
    width: 65,
  },
});
