import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';

import {Header, Layout, Catogory, AddButton} from '../../../components';
import * as color from '../../../Themes/colors';
import {ScrollView} from 'react-native-gesture-handler';

const WorkoutRouitine = () => {
  const [workoutRouitine, setworkoutRouitine] = useState([
    {
      id: Date.now(),
      title: 'Workout 1',
    },
  ]);

  const addWorkout = () => {
    const workout = {
      id: Date.now(),
      title: `Workout ${workoutRouitine?.length}`,
    };
    setworkoutRouitine(workoutRouitine => [...workoutRouitine, workout]);
    // setExpand(tempworkoutRouitine.length - 1);
  };

  const renderItem = ({item, index}) => {
    return <Catogory title={item?.title} titleStyle={styles.titleStyle2} />;
  };

  return (
    <Layout>

        <View>
          <Header title={'Workout Planner'} titleStyle={styles.titleStyle1} />
        </View>
        <View style={{flex:1, position:'relative'}}>
          <FlatList
              data={workoutRouitine}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              style={{backgroundColor:'#F04'}}
            />
          
          <AddButton onPress={addWorkout} />
        </View>
          {/* <Catogory title={'Workout 1'} titleStyle={styles.titleStyle2} /> */}
          
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
});
