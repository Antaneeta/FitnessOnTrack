import {View, Text, StyleSheet, Dimensions, Button as Btn} from 'react-native';
import React, {useEffect} from 'react';
import * as Progress from 'react-native-progress';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../../Themes/colors';
import Button from '../../components/common/Button';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {hp, wp} from '../../utils/screenResponsiveFunctions';

const DashBoard = () => {
  const user = useSelector(state => state.auth.user);

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topNav}>
        <Button
          iconName={'navicon'}
          iconSize={40}
          iconColor={color.TextPrimaryColor}
        />

        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.name}> Antaneeta Fernando</Text>
        </View>
        <Button
          iconName={'bell'}
          iconSize={30}
          iconColor={color.TextPrimaryColor}
        />
      </View>
      <View style={styles.greenCard}>
        <Text style={styles.cardMainText}>BMI (Body Mass Index)</Text>
        <Text style={styles.cardSubText}>you have a normal weight</Text>
        <PieChart
          data={data}
          width={wp(60)}
          height={hp(20)}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          // center={[0, 50]}
          // absolute
        />
      </View>
      <View style={styles.blueCard}>
        <Text style={styles.cardText}>Today Target</Text>
        <View style={styles.subcard}>
          <Text style={styles.cardSubText}>Check</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 25}}>
        <Text style={styles.name2}>Activity Status</Text>
        <View style={styles.shadowContainer}>
          <Progress.Bar progress={0.3} width={200} style={{flexDirection:'column'}} />
        </View>
      </View>
      
      <Btn title={'Sign Out'} onPress={onSignOut} />
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
    backgroundColor: color.Gray2,
    borderRadius: 15,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
  },
  blueCard: {
    backgroundColor: color.LightBlue,
    borderRadius: 18,
    marginHorizontal: 25,
    marginVertical: 20,
    borderColor: color.LightBlue,
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
    marginHorizontal: 25,
    marginVertical: 20,
    flexDirection: 'row',
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
    borderRadius:15,
    borderColor:color.BackgroundColor,
    padding:50,
    width:wp(50)
  },
});

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = [
  {
    name: 'Seoul',
    population: 21500000,
    color: '#FFF',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: color.purple,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];
