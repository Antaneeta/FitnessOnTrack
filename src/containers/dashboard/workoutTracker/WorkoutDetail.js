import {View, Text, StyleSheet, Animated, ScrollView, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import * as color from '../../../Themes/colors';
import {Layout, Header, WorkoutTrainCard} from '../../../components';
import {hp, wp} from '../../../utils/screenResponsiveFunctions';
import WorkoutCatogoryCard from '../../../components/common/WorkoutCatogoryCard';
import * as images from '../../../assets/image';

const BANNER_H = 350;

const WorkoutDetail = () => {
  const scrollA = useRef(new Animated.Value(0)).current;

  const [workout, setWork] = useState(ITEMS)
  const [train, setTrain] = useState(ITEMSET)

  const renderItem = ({ item, index }) => (
    <WorkoutCatogoryCard item={item} />
  )

  const renderTrain = ({ item, index }) => (
    <WorkoutTrainCard item={item} />
  )

  return (
    <Layout>
      <View style={styles.topContainer}>
        <Header title={'Workout Tracker'} />
        <Animated.ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollA}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}>
          <Animated.View style={styles.banner(scrollA)}>
            <LineChart
              data={data}
              width={wp(95)}
              height={hp(40)}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              style={{padding: 10}}
              bezier
            />
          </Animated.View>
          <View
            style={{
              backgroundColor: color.White,
              height: hp(200),
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            <View style={styles.blueCard}>
              <Text style={styles.cardText}>Daily Workout Schedule</Text>
              <View style={styles.subcard}>
                <Text style={styles.cardSubText}>Check</Text>
              </View>
            </View>
            <View style={styles.upcomingTitle}>
                <Text style={styles.upcomigText}>Upcoming Workout</Text>
                <Text>See more</Text>
            </View>
            <View>
              <FlatList
                data={workout}
                renderItem={renderItem}
                keyExtractor={(item, index) => index?.toString()}
              />
            </View>
            <View style={styles.upcomingTitle}>
              <Text style={styles.upcomigText}>What Do You Want to Train</Text>
             
            </View>
            <View>
            <FlatList
                data={train}
                renderItem={renderTrain}
                keyExtractor={(item, index) => index?.toString()}
              />
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </Layout>
  );
};

export default WorkoutDetail;

const chartConfig = {
  backgroundGradientFrom: color.TextGreen,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: color.TextGreen,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 0.01) => `rgba(255,255,255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 1,
  useShadowColorFromDataset: true, // optional
};

const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [20, 45, 28, 67, 25, 89, 40, 78],
      color: (opacity = 0.1) => `rgba(255,255,255, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Workout'], // optional
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: color.TextGreen,
  },
  subcard: {
    backgroundColor: color.TextGreen,
    borderRadius: 15,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueCard: {
    backgroundColor:`rgba(66,215,66, 0.3)`,
    borderRadius: 18,
    marginHorizontal: 25,
    marginVertical: 20,
    borderColor: color.LightBlue,
    height: 65,
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '100%',

    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 1, 0.5],
        }),
      },
    ],
  }),
  cardText: {
    color: color.TextPrimaryColor,
    fontSize: 16,
  },
  cardSubText: {
    color: color.White,
    fontSize: 13,
  },
  upcomingTitle:{
      marginHorizontal:25,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  upcomigText:{
      fontSize:18,
      color:color.Black,
      fontWeight:'800'
  },
  
});

const ITEMSET = [
  {
    image:images.fullbodyWorkout,
    catogory:'Fullbody Workout',
    rep:'11 Exercises | 32mins',
    status:true,
  },
  {
    image:images.lowerbodyWorkout,
    catogory:'Upperbody Workout',
    rep:'12 Exercises | 40mins',
    status:false,
  },
  {
    image:images.AbWorkout,
    catogory:'Upperbody Workout',
    rep:'14 Exercises | 20mins',
    status:false,
  }
]
const ITEMS = [
  {
    image:images.workout1,
    catogory:'Fullbody Workout',
    dateTime:'Today, 03:00pm',
    status:true,
  },
  {
    image:images.workout2,
    catogory:'Upperbody Workout',
    dateTime:'Today, 03:00pm',
    status:false,
  }
]
