import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import {
  Header,
  Layout,
  SearchFilter,
  AddIcon,
  GreenButton,
} from '../../../components';
import * as color from '../../../Themes/colors';
import * as images from '../../../assets/image';
import { ScrollView } from 'react-native-gesture-handler';
import * as screen from '../../../containers';
import { screens } from '../../../constants';
import { ActivityIndicator } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

const CardItem = ({ item }) => {
  const currentScreen =screens.ADD_EXERCISES;
  const navigation = useNavigation()


  const [imageUrl, setImageUrl] = useState(null);

  const onclick = () => {
    navigation.navigate(screens.EXERCISE, { ...item, image: imageUrl })
  }

  useEffect(() => {
    const imageRef = storage().ref('/' + item?.image);
    imageRef
      .getDownloadURL()
      .then(url => {
        setImageUrl(url)
      })
      .catch(e => console.log('getting downloadURL of image error => ', e));
  }, []);



  return (
    <TouchableOpacity style={styles.card} onPress={onclick}>
      <Image source={{ uri: imageUrl }} style={{ width: 40, height: 40 }} />
      <View style={{ justifyContent: 'space-evenly', marginLeft: '10%' }}>
        <Text style={styles.title}>{item?.name}</Text>
        <View style={styles.dis}>
          <Text>{item?.sets}</Text>
          <Text>{' × '}</Text>
          <Text>{item?.reps}</Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name="arrow-right-drop-circle-outline"
        size={22}
        color={color.TextGreen}
        style={{ marginLeft: 'auto' }}
      />
    </TouchableOpacity>
  );
};


const AddExercises = props => {

  
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const addCustom = () => {
    props.navigation.navigate(screens.ADD_CUSTOME_WORKOUT);
  };

  const getWorkouts = () => {
    setIsLoading(true)
    firestore()
      .collection('Workout')
      .get()
      .then(response => {
        setWorkouts(response._docs);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // useEffect(() => {
    
  // }, []);

  useFocusEffect(useCallback(() => {
    getWorkouts();
  }, []))

  const onBackPress = () => {
    props.navigation.navigate(screens.MANAGE_EXERCICES)
  }

  return (
    <Layout>
      <View>
        <Header title={'Exercise '} titleStyle={styles.titleStyle1} onPress={onBackPress}/>
        <SearchFilter />
        <View style={styles.addCustom}>
          <AddIcon onPress={addCustom} />
          <Text style={styles.AddcustomeText}>Add custome</Text>
        </View>
        {isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 100 }}>
            <ActivityIndicator size={40} color={color.TextGreen} />
          </View>
        ) : (
          <FlatList
            data={workouts}
            renderItem={({ item, index }) => <CardItem item={item._data} />}
            keyExtractor={item => item.id}
          />
        )}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          zIndex: 1,
        }}>
        {/* <GreenButton title={'Start'} titleStyle={styles.titleStyle} /> */}
      </View>
    </Layout>
  );
};

export default AddExercises;

const styles = StyleSheet.create({
  titleStyle1: {
    color: color.Black,
  },
  addCustom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft:15,
    marginVertical:25
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 43,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dis: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: color.Black,
  },
  AddcustomeText: {
    fontSize: 17,
    fontWeight: '700',
    color: color.purple,
  },
  titleStyle: {
    fontWeight: '700',
    fontSize: 23,
    color: color.White,
  },
});

const Data = [
  {
    id: 1,
    image: images.ww,
    name: 'Bicycle',
    reps: 20,
    sets: 3,
  },
  {
    id: 2,
    image: images.ww1,
    name: 'Jumping Jacks',
    reps: 20,
    sets: 3,
  },
  {
    id: 3,
    image: images.ww2,
    name: 'Skipping',
    reps: 20,
    sets: 3,
  },
  {
    id: 4,
    image: images.ww3,
    name: 'Squats',
    reps: 20,
    sets: 3,
  },
  {
    id: 5,
    image: images.ww4,
    reps: 20,
    name: 'Jumping Jack',
    sets: 3,
  },
  {
    id: 6,
    image: images.ww5,
    name: 'Squats',
    reps: 20,
    sets: 3,
  },
  {
    id: 7,
    image: images.ww,
    name: 'Arm raises',
    reps: 20,
    sets: 3,
  },
];
