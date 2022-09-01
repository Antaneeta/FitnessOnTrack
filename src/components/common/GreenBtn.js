import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as colors from '../../Themes/colors'
import RNPickerSelect from 'react-native-picker-select';


const GreenBtn = props => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={[styles.container, props.buttonStyle]} >
      {/* {props?.title ? <Text style={[styles.title, props.titleStyle]}>{props?.title}</Text> : <></>} */}
      <RNPickerSelect
        value={props.value}
        placeholder={{}}
        onValueChange={props.onValueChange}
        items={props.itemList.map(item => ({ label: item, value: item }))} />
    </View>
  )
}

export default GreenBtn

const styles = StyleSheet.create(
  {
    container: {
      borderRadius: 18,
      height: 45,
      width: '35%',
      backgroundColor: colors.TextGreen,
      borderWidth: 1,
      borderColor: colors.TextGreen,
      justifyContent: 'center',
      alignItems: 'center'
    },

  }
)