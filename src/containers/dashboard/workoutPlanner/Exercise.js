import {View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState, useFocusEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import ToggleSwitch from 'toggle-switch-react-native';
import LinearGradient from 'react-native-linear-gradient';

import * as permissions from '../../../utils/functions/permissions';
import {
  GreenButton,
  Header,
  Layout,
  TextInputWithIcon,
  TextInputSmall,
  AddIcon,
} from '../../../components';
import * as colors from '../../../Themes/colors';
import { screens } from '../../../constants';
import { useDispatch } from 'react-redux';

const Exercise = props => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [equipment, setEquipments] = useState('');
  const [muscle, setMuscle] = useState('');
  const [category, setCategory] = useState('');
  const [sets, setSets] = useState(null);
  const [reps, setReps] = useState(null);
  const [weight, setWeight] = useState('');
  const [time, setTime] = useState('');
  const [image, setImage] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const item = props.route.params;

  console.log(props.route.params)

 const chooseFromLibrary = async () => {
    function split(str, index) {
      const result = [str.slice(0, index), str.slice(index)];

      return result[0];
    }

    if (
      (await permissions.requestExternalStorageReadPermission()) &&
      (await permissions.requestExternalStorageWritePermission())
    ) {
      launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: true,
          // maxHeight: 200,
          // maxWidth: 200,
          saveToPhotos: true,
        },
        response => {
          if (!response.didCancel) {
            const temp = response.assets.map((image, index) => ({
              id: Date.now(),
              imageData: image.base64,
              url: image.uri,
              FileName: image.fileName,
              FileType: 'png',
            }));
            setImage(temp);
          }
        },
      );
    }
  };

  const chooseFromCamera = async () => {
    function split(str, index) {
      const result = [str.slice(0, index), str.slice(index)];

      return result[0];
    }
    if (await permissions.requestCameraPermission()) {
      launchCamera(
        {
          mediaType: 'photo',
          includeBase64: true,
          // maxHeight: 200,
          // maxWidth: 200,
        },
        response => {
          if (!response.didCancel) {
            const temp = response?.assets?.map((image, index) => ({
              id: Date.now(),
              imageData: image.base64,
              url: image.uri,
              FileName: split(image.fileName, 20),
              FileType: 'png',
            }));
            setImage(temp);
          }
        },
      );
    }
  };

  const onBackClick = () => {
    props.navigation.navigate(screens.ADD_EXERCISES);
  }

  const onCreate = () => {
    const workout = {
      name,
      equipment,
      muscle,
      category,
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseInt(weight),
    };
    // firestore()
    //   .collection('Workout')
    //   .add(workout)
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    dispatch({ type: 'SET_WORKOUT_ROUTINE', payload: item })
    props.navigation.navigate(screens.MANAGE_EXERCICES)
  };

  return (
    <Layout>
      <Header title={item?.name} titleStyle={styles.titleStyle1} onPress = {onBackClick}/>
      <ScrollView>
        <View style={styles.subContainer}>
          <TextInputWithIcon
            textInput={{
              onChangeText: setName,
              placeholder: 'Name of the Exercise',
              placeHolderTextColor: colors.LightBlue,
              value: item?.name,
            }}
          />
          <TextInputWithIcon
            textInput={{
              onChangeText: setMuscle,
              placeholder: 'Muscle',
              placeHolderTextColor: colors.Gray2,
              value: item?.muscle,
            }}
          />
          <TextInputWithIcon
            textInput={{
              onChangeText: setEquipments,
              placeholder: 'Equipments',
              placeHolderTextColor: colors.Gray2,
              value: item?.equipment,
            }}
          />

          <TextInputWithIcon
            textInput={{
              onChangeText: setCategory,
              placeholder: 'category',
              placeHolderTextColor: colors.Gray2,
              value: item?.category,
            }}
          />
          <View>
            <Text style={styles.primaryTitle}>Photo Or video</Text>
            <Image style={styles.attachment} source={{ uri: item?.image }} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 25,
            }}>
            <TextInputSmall
              textInput={{
                onChangeText: setSets,
                placeholder: 'Sets',
                placeHolderTextColor: colors.Gray2,
                value: item?.sets?.toString(),
              }}
            />
            <TextInputSmall
              textInput={{
                onChangeText: setReps,
                placeholder: 'Reps',
                placeHolderTextColor: colors.Gray2,
                value: item?.reps?.toString(),
              }}
            />
            <TextInputSmall
              textInput={{
                onChangeText: setWeight,
                placeholder: 'Weight',
                placeHolderTextColor: colors.Gray2,
                value: item?.weight ? item?.weight?.toString() : '',
              }}
            />
          </View>
          <View style={styles.rowVew}>
            <AddIcon /><Text style={[styles.primaryTitle,{fontSize:15}]}>Add Different Set</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: '700', color:colors.DarkPurple}}>
              Rest between sets
            </Text>
            <View>
              <LinearGradient
                colors={isEnabled ? ['#C58BF2', '#EEA4CE'] : ['grey', 'grey']}
                style={{borderRadius: 20}}>
                <ToggleSwitch
                  isOn={isEnabled}
                  onColor="trasparent"
                  offColor="trasparent"
                  labelStyle={{color: 'black', fontWeight: '700'}}
                  size="large"
                  onToggle={isOn => setIsEnabled(isOn)}
                />
              </LinearGradient>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text style={{color:colors.Black}}>Time</Text>
            <TextInput placeholder="1 min / 60 secounds" />
          </View>
          <View>
            <Text style={styles.primaryTitle}>Descriptions</Text>
            <Text>
              {item.desc}
            </Text>
          </View>
          <View style={{alignItems: 'center', marginVertical: 25}}>
            <GreenButton
              title={'Add to Routine'}
              titleStyle={styles.primaryTextTitle}
              onPress={onCreate}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  titleStyle1: {
    color: colors.Black,
  },
  attachment: {
    backgroundColor: colors.BorderColor,
    borderColor: colors.BorderColor,
    borderWidth: 1,
    borderRadius: 15,
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    flexDirection: 'row',
  },
  subContainer: {
    marginHorizontal: 25,
    marginVertical: 20,
  },
  primaryTitle: {
    fontWeight: '700',
    color: colors.Black,
    fontSize: 19,
    marginRight: 15,
    marginVertical: 25,
  },
  primaryTextTitle: {
    fontWeight: '700',
    color: colors.White,
    fontSize: 19,
    marginRight: 15,
  },
  primaryView: {
    flexDirection: 'row',
    marginHorizontal: 25,
    alignItems: 'center',
  },
  rowVew: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:25
  },
});
