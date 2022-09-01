import { View, Text } from 'react-native'
import React from 'react'

const Label = props => {
  return (
    <View>
      <Text>{props.label}</Text>
    </View>
  )
}

export default Label