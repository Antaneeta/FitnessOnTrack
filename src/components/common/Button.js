import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';


import { BorderColor } from '../../Themes/colors'


const Button = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
       <Icon
            color={props.iconColor}
            name={props.iconName}
            size={props.iconSize}
          />
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor: BorderColor,
        borderRadius:10,
        borderColor:BorderColor,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    }
})