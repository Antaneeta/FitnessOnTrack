import { View, Text, StyleSheet, Dimensions, Button as Btn, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import * as Progress from 'react-native-progress';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as color from '../../Themes/colors';
import Button from '../../components/common/Button';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { hp, wp } from '../../utils/screenResponsiveFunctions';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../constants';

const DashBoard = props => {
  const navigation = useNavigation()

  const user = useSelector(state => state.auth.user);

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(error => console.error(error));
  };
  const showDrawer = () => {
    navigation.openDrawer();
  }

  const checkNotification = () => {
    props.navigation.navigate(screens.NOTIFICATION);
  }

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topNav}>
        <Button
          iconName={'menu'}
          iconSize={25}
          iconColor={color.TextPrimaryColor}
          onPress={showDrawer}
        />

        <View>
          <Text style={styles.welcomeText}>Welcome Back, </Text>
          <Text style={styles.name}>Antaneeta Fernando</Text>
        </View>
        <Button
          iconName={'bell'}
          iconSize={25}
          iconColor={color.TextPrimaryColor}
          onPress={checkNotification}
        />
      </View>
      <ScrollView>
        <View style={styles.greenCard}>
          <View style={{ borderRadius: 50, backgroundColor: `rgba(255, 255, 255, ${0.4})`, borderColor: `rgba(0, 0, 0, ${0.6})`, position: 'absolute', height: 70, width: 70, marginLeft: -25 }} />
          <Text style={styles.cardMainText}>BMI (Body Mass Index)</Text>
          <Text style={styles.cardSubText}>you have a Normal weight</Text>
          <Text style={[styles.cardSubText,{color:color.DarkPurple,fontSize:18}]}>23.4 kg/m2</Text>
          <ProgressChart
            data={data}
            width={wp(80)}
            height={hp(20)}
            strokeWidth={16}
            radius={40}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            hasLegend={false}
          // paddingLeft={'-20'}
          // center={[0, 50]}
          // absolute
          />
          <View style={{ borderRadius: 150, backgroundColor: `rgba(255, 255, 255, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0})`, position: 'absolute', height: 170, width: 170, justifyContent: 'flex-end', marginLeft: wp(60), marginTop: hp(15) }} />
          <View style={{ borderRadius: 150, backgroundColor: `rgba(255, 255, 255, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 15, width: 15, justifyContent: 'flex-end', marginLeft: wp(70), marginTop: hp(3) }} />
          <View style={{ borderRadius: 150, backgroundColor: `rgba(255, 255, 255, ${0.28})`, borderColor: `rgba(0, 0, 0, ${0.4})`, position: 'absolute', height: 15, width: 15, justifyContent: 'flex-end', marginLeft: wp(10), marginTop: hp(20) }} />
        </View>
        <View style={styles.blueCard}>
          <Text style={styles.cardText}>Today Target</Text>
          <View style={styles.subcard}>
            <Text style={styles.cardSubText}>Check</Text>
          </View>
        </View>

        <ContributionGraph
          values={commitsData}
          endDate={new Date("2017-04-01")}
          numDays={119}
          width={wp(100)}
          height={hp(25)}
          chartConfig={chartConfigCon}
          showMonthLabels={true}
        />
        <View style={[styles.blueCard,{height:120}]}>
          <Text style={styles.cardText}>Target</Text>
          <MaterialCommunityIcons name='cup-water' size={90}/>
          <Text style={styles.cardText}>2 l</Text>
          <View style={[styles.subcard,{marginLeft:25}]}>
            <Text style={styles.cardSubText}>Drink</Text>
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  greenCard: {
    backgroundColor: color.TextGreen,
    borderRadius: 14,
    marginHorizontal: 25,
    borderColor: color.TextGreen,
    padding: 15,
  },
  subcard: {
    backgroundColor: color.purple,
    borderRadius: 15,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    height: 35
  },
  blueCard: {
    backgroundColor: `rgba(180,	192, 254, ${0.28})`,
    borderRadius: 18,
    marginHorizontal: 25,
    marginVertical: 13,
    borderColor: color.LightBlue,
    alignItems: 'center',
    height: 65,
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardMainText: {
    color: color.White,
    fontSize: 18,
  },
  cardText: {
    color: color.TextPrimaryColor,
    fontSize: 16,
  },
  cardSubText: {
    color: color.White,
    fontSize: 13,
  },
  mainContainer: {
    backgroundColor: color.BackgroundColor,
    flex: 1,
  },
  name: {
    color: color.TextPrimaryColor,
    fontSize: 22,
    fontWeight: '800',
  },
  name2: {
    color: color.TextPrimaryColor,
    fontSize: 20,
    fontWeight: '700',
  },
  topNav: {
    flexDirection: 'row',
    marginVertical: 25,
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: '700',
    color: color.Gray2,
  },
  shadowContainer: {
    shadowColor: color.LightBlue,
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 12,
    borderRadius: 15,
    borderColor: color.BackgroundColor,
    padding: 50,
    transform: [{ rotate: "-90deg" }]
  },

});

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(200, 145, 242, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const chartConfigCon = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 0) => `rgba(200, 145, 242, ${opacity})`,
  strokeWidth: 7, // optional, default 3
  barPercentage: 0.1,
  useShadowColorFromDataset: false, // optional
};

const data2 = {
  labels: ["steps"], // optional
  data: [0.8,]
};
// const data = [
//   {
//     name: 'Under Weight',
//     population: 12.6,
//     color: '#FFF',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15,
//   },
//   {
//     name: 'over Weight',
//     population: 20.2,
//     color: '#4579',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15,
//   },
//   {
//     name: 'Obese',
//     population: 6.2,
//     color: '#F00',
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15,
//   },
//   {
//     name: 'Normal Weight',
//     population: 62.2,
//     color: color.purple,
//     legendFontColor: '#7F7F7F',
//     legendFontSize: 15,
//   },
const data = {
  labels: ["Train", "calories"],
  data: [0.4, 0.6]
}


const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 }
];