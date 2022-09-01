import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Layout, Header } from '../../../components'
import { colors } from '../../../constants'


const NotificationCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text>{notification?.name}</Text>
      <FontAwesome name='ellipsis-v' size={23}/>
    </View>
  )
}

const Notification = props => {
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({ item }) => (
    <NotificationCard />
  );


  return (
    <Layout>
      <Header title={'Notification'} titleStyle={styles.titleStyle1} />
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 100 }}>
          <ActivityIndicator size={40} color={colors.TextGreen} />
        </View>
      ) : (
        <FlatList
          data={notification}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </Layout>

  )
}

export default Notification

const styles = StyleSheet.create({
  titleStyle1: {
    color: colors.Black,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#fff',
    borderBottomColor:colors.primaryColor,
    borderBottomWidth:1,
    marginVertical: 10,
    marginHorizontal: 25,
    padding: 10,
    flexDirection:'row'
  },
}
);

const notification = [
  {
    name: 'hhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjj',
    des: 'nnnnnnnnnnnnnnnnnnnnnnnn',
    id: 1,
  },
  {
    name: 'hhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjj',
    des: 'nnnnnnnnnnnnnnnnnnnnnnnn',
    id: 2
  },
]