import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { Layout, Header, AddIcon, Catogory, Shedule, GreenButton } from '../../../components';
import * as color from '../../../Themes/colors';
import * as images from '../../../assets/image'
import { screens } from '../../../constants';

const CardItem = ({ item }) => {
  const navigation = useNavigation()

  const onclick = () => {
    navigation.navigate(screens.WORKOUT_DETAIL, {
      name: item?.name,
    })
  }

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
  }, []);

  return (
    <TouchableOpacity  style={[styles.cardContainer, { backgroundColor: color.BorderColor }]}>
      <Image source={item?.image} style={{ width: 90, height: 70 }} />
      <Text style={styles.titleBtn}>{item?.name}</Text>
      <Text style={styles.titleStyle2}>{item?.primaryName}</Text>
      <Text style={styles.titleStyle2}>{item?.time}</Text>
      <TouchableOpacity>

      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const CardWorkotItem = ({ item }) => {
  const navigation = useNavigation()

  const onclick = () => {
    // navigation.navigate(screens.WORKOUT_DETAIL, {
    //     name: item?.name,
    // })
  }

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
  }, []);

  return (
    <TouchableOpacity onPress={onclick} style={[styles.cardWorkoutContainer]}>
      <Image source={item?.image} style={{ width: 60, height: 60 }} />
      <Text style={styles.titleBtn}>{item?.name}</Text>
      <Text style={styles.titleStyle2}>{item?.primaryName}</Text>
      <Text style={styles.titleStyle2}>{item?.time}</Text>
      <TouchableOpacity>

      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const ManageExercices = props => {
  const [user, setUser] = useState();
  // const title =props.route.params.title;

  const onBackClick = () => {
    props.navigation.navigate(screens.WORKOUT_ROUITINE)
  }

  const onRightPress = () => {
    props.navigation.navigate(screens.ADD_EXERCISES)
  }
  const renderItem = ({ item, index }) => (
    <CardItem item={item} />
  )

  const renderWorkoutItem = ({ item, index }) => (
    <CardWorkotItem item={item} />
  )
  return (
    <Layout>
      <View>
        <Header
          onPress={onBackClick}
          title={''}
          onRightPress={onRightPress}
          titleStyle={styles.titleStyle1}
          rightIcon={() => <AddIcon />}
        />
        <ScrollView>
          <Shedule title={'5/27, 09:00 AM'} />


          <View style={styles.topContainer}>
            <Text style={styles.titleSubStyle}>You’ll Need</Text>
            <Text>5 items</Text>
          </View>
          <View style={{ marginLeft: 25 }}>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
            />

          </View>
          <View style={styles.topContainer}>
            <Text style={styles.titleSubStyle}>Exercises</Text>
            <Text>5 items</Text>
          </View>
          <View>
            <FlatList
              horizontal={false}
              data={DATA}
              renderItem={renderWorkoutItem}
              keyExtractor={(item, index) => index}
            />

          </View>
          
        </ScrollView>
        <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              zIndex: 1,
              marginVertical: 80
            }}>

            <GreenButton title={'Start'} titleStyle={styles.titleStyle} />
          </View>
      </View>
    </Layout >
  );
};

export default ManageExercices;

const styles = StyleSheet.create({
  titleStyle1: {
    color: color.TextGreen,
  },
  titleStyle2: {
    color: color.Gray2,
    fontSize: 14,
  },
  titleStyle: {
    fontWeight: '700',
    fontSize: 23,
    color: color.White,
  },
  titleStyle1: {
    color: color.Black,
  },
  titleSubStyle: {
    color: color.Black,
    fontSize: 18,
    fontSize: 20,
    fontWeight: '600'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 30
  },
  titleBtn: {
    fontSize: 16,
    color: color.Black,
    fontWeight: '600'
  },

  checkButton: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#cefbce',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 25,
    marginVertical: 20
  },

  checkBtn: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.primaryPurple,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 25,
  },

  container: {
    marginHorizontal: 30,
    flexDirection: 'row'
  },
  textButton: {
    color: color.White,
    fontWeight: '500',
    fontSize: 15
  },
  cardContainer: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: color.LightGreen,
    shadowColor: color.purple,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.32,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderColor: color.primaryPurple,
    height: 180,
    width: 180
  },
  cardWorkoutContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 35,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: color.White,
    justifyContent:'space-between'
  },
  singleCard: {
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: color.LightGreen,
    marginVertical: 10,
    marginHorizontal: 25,
    padding: 10,
  },
});


const DATA = [
  {
    name: 'Honey Pancake',
    primaryName: 'Easy',
    id: '1',
    time: '7 am',
    day: 'Today',
    image: images.Eq1
  },
  {
    name: 'kkk',
    primaryName: 'hard',
    id: '2',
    time: '7 am',
    day: 'Today',    
    image: images.Eq2

  },
  {
    name: 'kkk',
    id: '3',
    time: '7 am',
    day: 'Today',
    image: images.Eq3

  }, {
    name: 'saman',
    id: '4',
    time: '7 am',
    day: 'Today'
  },
  {
    name: 'kkk',
    id: '5',
    time: '7 am',
    day: 'Today'
  },
  {
    name: 'kkk',
    id: '6',
    time: '7 am',
    day: 'Today'
  },
]