import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import * as color from '../../Themes/colors'

const SearchFilter = props => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInner}>
        <Feather name='search' size={25} color={color.TextGreen} />
        <TextInput
          placeholder={props.placeholder || 'Type here'}
          value={props.value || ''}
          onChangeText={props.onChangeText || (() => null)}
          onSubmitEditing={props.onSearch || (() => null)}
          returnKeyType={'search'}
        />
      </View>
      <Feather name='filter' size={25} color={color.TextGreen} />
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: color.BorderColor,
    height: 40,
    marginHorizontal: 25,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25
  },
  searchInner: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})