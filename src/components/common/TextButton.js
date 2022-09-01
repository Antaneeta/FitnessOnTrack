import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const TextButton = props => {
  return (
    <View>
      <TextInput onChange={props.onChange}  value={props.value}/>
      <Button onPress={props.onPress}/>
    </View>
  )
}

export default TextButton