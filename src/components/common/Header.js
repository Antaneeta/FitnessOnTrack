import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native'
import React ,{ useRef }from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import * as color from '../../Themes/colors';


const Header = props => {
  
  
  const LeftIcon = props?.leftIcon ? props.leftIcon : () => <Feather name='chevron-left' size={30} color={color.Black}/>
  const RightIcon = props?.rightIcon ? props.rightIcon : () => <Entypo name='dots-two-horizontal' size={30} color={color.Black}/>

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
          <LeftIcon/>
      </TouchableOpacity>
            {props?.title ? <Text style={[styles.title, props.titleStyle]}>{props?.title}</Text> : <></>}
      <TouchableOpacity style={styles.buttonContainer}>
          <RightIcon/>
      </TouchableOpacity> 
         
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: color.BorderColor,
        borderRadius:10,
        borderColor:color.BorderColor,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flexDirection:'row',
        marginHorizontal:25,
        justifyContent:'space-between',
        marginVertical:25
    },
    title:{
        fontSize:18,
        fontWeight:'800',
        color:color.White,
        marginTop:8
    },
    titleContainer:{
        alignItems:'center'
    }
})