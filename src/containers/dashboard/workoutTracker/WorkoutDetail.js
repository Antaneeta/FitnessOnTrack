import {View, Text, StyleSheet, Animated, ScrollView, FlatList, Image} from 'react-native';
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
import {Layout, Header, WorkoutTrainCard, TextInputWithIcon} from '../../../components';
import {hp, wp} from '../../../utils/screenResponsiveFunctions';
import WorkoutCatogoryCard from '../../../components/common/WorkoutCatogoryCard';

import * as images from '../../../assets/image';
import * as colors from '../../../Themes/colors'

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
        <Header title={''} />
        <Animated.ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollA}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}>
          <Animated.View style={[styles.banner(scrollA),{justifyContent:'center',alignItems:'center'}]}>
            <Image source={images.meal}/>
          </Animated.View>
          <View
            style={{
              backgroundColor: color.White,
              height: hp(200),
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              paddingVertical:20
            }}>
            <View style={styles.primartView}>
              <Text style={styles.cardText}>oat bran pancake - 1 large pancake (7")</Text>
            </View>
            <View style={styles.primartView}>
              <Text style={[styles.cardText,{color:colors.DarkPurple}]}>Nutrition facts</Text>
              <View style={styles.subcard}>
                <Image source={images.kalIcon} style={{height:25,width:25}}/>
                <Text>Calories 159</Text>
                <Text style={styles.cardSubText}>Total calories</Text>
              </View>
              <View style={styles.subcard}>
                <Image source={images.FatIcon} style={{height:25,width:25}}/>
                <Text>7.4g</Text>
                <Text style={styles.cardSubText}>Total Fat</Text>
              </View>
              <View style={styles.subcard}>
                <Image source={images.ProteinIcon} style={{height:25,width:25}}/>
                <Text>4.9 grams</Text>
                <Text style={styles.cardSubText}>Protein</Text>
              </View>
              <View style={styles.subcard}>
                <Image source={images.CarboIcon} style={{height:25,width:25}}/>
                <Text>18 grams</Text>
                <Text style={styles.cardSubText}>Carbohydrates</Text>
              </View>
            </View>
            <View style={styles.primartView}>
              <Text style={styles.upcomigText}>Description</Text>
              <Text>We have some great news for you – pancakes can help you lose weight! If you use whole, natural ingredients (and hold the syrup), you can make pancakes that are great for weight loss. The key is to use whole-grain flour instead of refined flour and to avoid refined sugar</Text>
            </View>
            <View style={styles.primartView}>
              <Text style={styles.upcomigText}>Nutritionix sub-recipe for 1 large pancake (7"):</Text>
              <Text>{"Serving\t\t\t\t\t\t\t\t\t\tIngredient	\t\t\t \tCalories\n" +
                      "43.37 grams\t\t\t\t\tmilk\t\t\t\t\t\t\t\t\t\t\t\t\t22\n" +
                      "10.75 grams\t\t\t\t\trolled\t\t\t\t\t\t\t\t\t\t	41\n" +
                      "8.85 grams	\t\t\t\t\tegg\t\t\t\t\t\t\t\t\t\t\t\t	13\n" +
                      "4.96 grams	\t\t\t\t\toil\t\t\t\t\t\t\t\t\t\t\t\t\t	44\n" +
                      "8.3 grams	\t\t\t\t\t\tflour\t\t\t\t\t\t\t\t\t\t\t	30\n" +
                      "2.21 grams	\t\t\t\t\tsugar\t\t\t\t\t\t\t\t\t\t\t	9\n" +
                      "1.02 grams	\t\t\t\t\tbaking powder \t\t\t	1\n" +
                      "0.54 gram	\t\t\t\t\t\tsalt\t\t\t\t\t\t\t\t\t\t\t\t\t	0"}
              </Text>
            </View>
            <View style={styles.primartView}>
            <TextInputWithIcon
            textInput={{
              // onChangeText: text => { setName(text); setNameError(false) },
              placeholder: 'grams ',
              // value: name,
            }}
            // error={nameError}
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
    backgroundColor: color.LightGreen,
    flexDirection:'row',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical:15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:10
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
    fontSize: 20,
    fontWeight:'700'
  },
  cardSubText: {
    color: color.Black,
    fontSize: 18,

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
  primartView:{
    marginHorizontal:40,
    marginVertical:20
  }
  
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
    carbs: 7.5,
    fat:11,
    protein:28,
    size:100,
    sodium:0.073
  }
]
