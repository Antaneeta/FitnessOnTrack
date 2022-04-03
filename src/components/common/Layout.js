import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants'

export default Layout = props => <View style={[styles.container, props.style]}>{props.children}</View>

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.backgroundColor,
        flex:1
    }
})