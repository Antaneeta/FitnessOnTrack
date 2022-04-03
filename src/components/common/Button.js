import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BorderColor } from '../../Themes/colors'
import Icon from 'react-native-vector-icons/Feather';


const Button = props => {
  return (
    <View style={styles.container}>
       <Icon
            color={props.iconColor}
            name={props.iconName}
            size={props.iconSize}
          />
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor: BorderColor,
        borderRadius:10,
        borderColor:BorderColor,
        width:60,
        height:60,
        alignItems:'center'
    }
})