import {View, Text, Switch, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import LinearGradient from 'react-native-linear-gradient';

import * as color from '../../Themes/colors';
import * as images from '../../assets/image';

const WorkoutCatogoryCard = ({ item }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={{flexDirection:'row', justifyContent:"space-between", width:'100%'}}>
        <Image source={item?.image}/>
        <Text style={styles.workout}>{item?.catogory}</Text>
        <View>
        <LinearGradient colors={isEnabled ? ['#C58BF2', '#EEA4CE'] : [ 'grey', 'grey']} style={{borderRadius:20}}>
            <ToggleSwitch
            isOn={isEnabled}
            onColor="trasparent"
            offColor="trasparent"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="large"
            onToggle={isOn => setIsEnabled(isOn)}
            />
        </LinearGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutCatogoryCard;



const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: color.LightBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.32,
    elevation: 5,
    marginVertical:10,
    marginHorizontal:25,
    padding:10,
    borderColor:color.LightBlue
  },
  workout:{
      fontSize:16,
      color:color.Black,
      fontWeight:'700'
  }
});
