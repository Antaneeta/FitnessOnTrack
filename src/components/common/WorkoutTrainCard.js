import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import LinearGradient from 'react-native-linear-gradient';

import * as color from '../../Themes/colors';
import * as images from '../../assets/image';
import {colors} from '../../constants';

const WorkoutTrainCard = ({item}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const ViewmoreButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>View more</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={{justifyContent:'space-between'}}>
        <Text style={styles.workout}>{item?.catogory}</Text>
        <Text>{item?.rep}</Text>
        <ViewmoreButton />
      </View>
      <View>
        <Image source={item?.image} />
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutTrainCard;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: `rgba(66,215,66, 0.3)`,
    borderRadius: 20,
    borderColor: color.BackgroundColor,
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  workout: {
    fontSize: 16,
    color: color.Black,
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: colors.backgroundColor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    height: 35,
    width: 94,
  },
  buttonText:{
    color:color.TextGreen,
    fontSize:14,
    fontWeight:'700'
  }
});
