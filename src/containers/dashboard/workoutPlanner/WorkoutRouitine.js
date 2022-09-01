import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Header, Layout, Catogory, AddButton, PopUp } from '../../../components';
import * as color from '../../../Themes/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { screens } from '../../../constants';
import { useEffect } from 'react';

const WorkoutRouitine = props => {
  // const title = title;
  const [workout, setWorkout] = useState('')
  const [visible, setVisible] = useState(false);
  const prevScreen = screens.WORKOUT_ROUITINE
  const [workoutRouitine, setworkoutRouitine] = useState([]);

  const addWorkout = newRouting => {
    firestore()
      .collection('Routines')
      .add({
        name: workout,
      })
      .then(result => {
        setWorkout('')
        console.log(result);
        setVisible(!visible)
        getRoutings()
      })
      .catch(error => {
        console.error(error);
        Toast.show({
          type: 'error',
          text1: 'Something Went Wrong 🙄',
        });
      });
  };

  const getRoutings = () => {
    firestore()
      .collection('Routines')
      .get()
      .then(response => {
        setworkoutRouitine(response._docs);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  }

  const onCreate = () => {
    setVisible(!visible)
  }

  const onStart = () => {
    props.navigation.navigate(screens.addWorkout);
  };

  const onPress = () => {
    props.navigation.navigate(screens.MANAGE_EXERCICES, {
      prevScreen: prevScreen,
      initial: 'initial',
      title: props.route.params?.title
    });

  };

  const renderItem = ({ item, index }) => {
    const data = item._data
    return <Catogory title={data?.name} titleStyle={styles.titleStyle2} onPress={onPress} />;
  };

  const onBackPress = () => {
    props.navigation.navigate(screens.HOME)
  }

  useEffect(() => {
    getRoutings()
  }, [])

  return (
    <Layout>
      <View>
        <Header title={'Workout Routine Planner'} titleStyle={styles.titleStyle1} onPress={onBackPress}/>
      </View>
      <View style={{ flex: 1, position: 'relative' }}>
        <FlatList
          data={workoutRouitine}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        // style={{backgroundColor:'#F04'}}
        />

        <View style={styles.addButton}>
          <AddButton onPress={onCreate} />
          <PopUp setNewRouting={setWorkout} newRouting={workout} visible={visible} setVisible={setVisible} onPress={addWorkout} />
        </View>
      </View>
    </Layout>
  );
};

export default WorkoutRouitine;

const styles = StyleSheet.create({
  titleStyle1: {
    color: color.TextGreen,
  },
  titleStyle2: {
    color: color.Gray2,
    fontSize: 16,
  },
  titleStyle: {
    fontSize: 13,
  },
  addButton: {
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
