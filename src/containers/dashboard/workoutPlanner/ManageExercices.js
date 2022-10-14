import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Layout, Header, AddIcon, Catogory, Shedule, GreenButton } from '../../../components';
import * as color from '../../../Themes/colors';
import * as images from '../../../assets/image'
import { screens } from '../../../constants';
import { hp } from '../../../utils/screenResponsiveFunctions';
import { useSelector } from 'react-redux';

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
    <TouchableOpacity style={[styles.cardContainer, { backgroundColor: color.BorderColor }]}>
      <Image source={item?.image} style={{ width: 90, height: 70 }} />
      <Text style={styles.titleBtn}>{item?.name}</Text>
      <TouchableOpacity>

      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const CardWorkotItem = ({ item }) => {
  const navigation = useNavigation()

  console.log({ item })
  const onclick = () => {
    // navigation.navigate(screens.WORKOUT_DETAIL, {
    //     name: item?.name,
    // })
  }

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
  }, []);

  return (
    <TouchableOpacity onPress={onclick} style={[styles.cardWorkoutContainer, {}]}>
      <Image source={{ uri: item?.image }} style={{ width: 60, height: 60, marginRight: 10 }} />
      <View>
        <Text numberOfLines={1} style={styles.titleBtn}>{item?.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text numberOfLines={1} style={[styles.titleStyle2, { marginRight: 10}]}>{item?.muscle}</Text>
          <Text numberOfLines={1} style={styles.titleStyle2}>{item?.category}</Text>
        </View>
      </View>

      <TouchableOpacity>

      </TouchableOpacity>
    </TouchableOpacity>
  );
}


const ManageExercices = props => {
  const [user, setUser] = useState();
  // const [empty, setEmpty] =useState([]);
  const title = props.route.params?.title;
  console.log(title)
  const onBackClick = () => {
    props.navigation.navigate(screens.WORKOUT_ROUITINE)
  }

  const empty = useSelector(state => state.auth.workoutRoutines)

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
      <View style={{ flex: 1 }}>
        <Header
          onPress={onBackClick}
          title={title}
          onRightPress={onRightPress}
          titleStyle={styles.titleStyle1}
          rightIcon={() => <AddIcon />}
        />
        <Shedule />

        {empty.length === 0 ? (
          <View style={{ alignItems: 'center', justifyContent: 'center', height: hp(50), paddingHorizontal: 50 }}>
            <AntDesign name={'file1'} size={80} color={color.TextSecoundaryColor} />
            <Text style={{ fontSize: 17, textAlign: 'center', marginTop: 20, color: color.TextSecoundaryColor }}> 📪 You are not added Any workout to this routine. Please click on + button to find Workouts</Text>
          </View>
        ) :
          (
            <View style={{ flex: 1 }}>
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
                <Text style={{ color: '#000' }}>2 items</Text>
              </View>
              <FlatList
                flex={1}
                horizontal={false}
                data={empty}
                renderItem={renderWorkoutItem}
                // renderItem={() => <View><Text style={{ color: 'red'}}>hhh</Text></View>}
                keyExtractor={(item, index) => index}
                // contentContainerStyle={{ backgroundColor: 'blue' }}
              />
            </View>
          )}
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            zIndex: 1,
            marginBottom: 40
          }}>

          <GreenButton title={'Start'} titleStyle={styles.titleStyle} />
        </View>
      </View>
    </Layout>
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
    fontSize: 17,
    color: color.DarkPurple,
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
    height: 150,
    width: 180
  },
  cardWorkoutContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 35,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: color.White,
    // justifyContent: 'space-between',
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
    name: 'dumbbell',
    primaryName: 'Easy',
    id: '1',
    time: '7 am',
    day: 'Today',
    image: images.Eq1
  },
  {
    name: 'Barbell',
    primaryName: 'hard',
    id: '2',
    time: '7 am',
    day: 'Today',
    image: images.Eq2

  },
  
]