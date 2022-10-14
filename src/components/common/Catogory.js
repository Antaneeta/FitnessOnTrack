import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import * as color from '../../Themes/colors';


const Catogory = props => {

    const LeftIcon = props?.leftIcon ? props.leftIcon : () => <Feather name='chevron-left' size={30} color={color.Black} />
    const RightIcon = props?.rightIcon ? props.rightIcon : () => <Feather name='chevron-right' size={24} color={color.Gray2} />

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={{marginBottom:7, marginHorizontal:25}}>
            {props?.title ? <Text style={[styles.title, props.titleStyle]}>{props?.title}</Text> : <></>}
            </View>
            <TouchableOpacity style={{marginHorizontal:7}}>
                <RightIcon />
            </TouchableOpacity>


        </TouchableOpacity>
    )
}

export default Catogory

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: color.BorderColor,
        borderRadius: 10,
        borderColor: color.BorderColor,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: `rgba(66,215,66, 0.15)`,
        padding: 8,
        borderRadius: 17
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: color.White,
        marginTop: 8
    },
    titleContainer: {
        alignItems: 'center'
    }
})