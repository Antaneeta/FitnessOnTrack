import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import * as colors from '../../Themes/colors.js'

export default Layout = props => <View style={[styles.container, props.style]}>{props.children}</View>

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.White,
        flex:1
    }
})