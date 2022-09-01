import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as colors from '../../Themes/colors'

const GreenButton = props => {
  return (
    <TouchableOpacity style={[styles.container, props.buttonStyle]} onPress={props.onPress}>
      {props?.title ? <Text style={[styles.title, props.titleStyle]}>{props?.title}</Text> : <></>}
    </TouchableOpacity>
  )
}

export default GreenButton

const styles = StyleSheet.create(
    {
        container:{
            borderRadius:18,
            height:50,
            width:'80%',
            backgroundColor:colors.TextGreen,
            borderWidth:1,
            borderColor:colors.TextGreen,
            justifyContent:'center',
            alignItems:'center'
        },
        
    }
)