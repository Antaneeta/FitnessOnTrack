import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import * as colors from '../../Themes/colors'

const ActivityIndicatorNew = (props) => {
  return (
    <View
      style={[{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 130,
      }, props.style]}>
      <ActivityIndicator size={40} color={colors.TextGreen} />
    </View>
  );
};

export default ActivityIndicatorNew;
