import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Toast from 'react-native-toast-message';
import RNPickerSelect from 'react-native-picker-select';


import * as permissions from '../../../utils/functions/permissions';
import {
  GreenButton,
  Header,
  Layout,
  TextInputWithIcon,
  TextInputSmall,
} from '../../../components';
import * as colors from '../../../Themes/colors';
import { set } from 'react-native-reanimated';

const AddCustome = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [equipment, setEquipments] = useState(null);
  const [equipmentError, setEquipmentsError] = useState();
  const [muscle, setMuscle] = useState(null);
  const [muscleError, setMuscleError] = useState(null);
  const [category, setCategory] = useState(null);
  const [des, setDes] = useState(null);
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const setToDefault = () => {
    setName('');
    setMuscle(null);
    setEquipments(null);
    setCategory(null);
    setSets('');
    setReps('');
    setWeight('');
    setImage(null);
    setCategory(null)
    setDes('')
  }


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
          if (!response.didCancel && response?.assets?.length > 0) {
            setImage({
              uri: response?.assets[0]?.uri,
              fileName: response?.assets[0]?.fileName,
            });
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
          if (!response.didCancel && response?.assets?.length > 0) {
            setImage({
              uri: response?.assets[0]?.uri,
              fileName: response?.assets[0]?.fileName,
            });
          }
        },
      );
    }
  };

  const validate = () => {
    let error = false

    if (
      name.trim() === '' ||
      muscle === '' ||
      equipment === '' ||
      category === '' ||
      image === null ||
      sets.trim() === "" ||
      reps.trim() === "" ||
      weight.trim() === ""
    ) {
      error = true
      setNameError(name.trim() === '')
      Toast.show({
        type: 'error',
        text1: 'mandotory field required ',
      });
    }
    return error
  }

  const onCreate = () => {

    if (validate()) return

    const uploadPath = 'workouts/' + image?.fileName;
    const imageRef = storage().ref(uploadPath);
    imageRef
      .putFile(image?.uri)
      .then(snapshot => {
        const workout = {
          name,
          equipment,
          muscle,
          category,
          image: uploadPath,
          sets: parseInt(sets),
          reps: parseInt(reps),
          weight: parseInt(weight),
          des,
        };
        firestore()
          .collection('Workout')
          .add(workout)
          .then(result => {
            setToDefault()
            console.log(result);
          })
          .catch(error => {
            console.error(error);
            Toast.show({
              type: 'error',
              text1: 'Something Went Wrong 🙄',
            });
          });
      })
      .catch(error => console.error('uploading image error => ', error));
  };

  return (
    <Layout>
      <Header title={'Create Custom Workout'} titleStyle={styles.titleStyle1} />
      <ScrollView>
        <View style={styles.primaryView}>
          <Text style={styles.primaryTitle}>Lets Add New Workout</Text>
          <MaterialCommunityIcons
            name="dumbbell"
            size={30}
            color={colors.TextGreen}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInputWithIcon
            textInput={{
              onChangeText: text => { setName(text); setNameError(false) },
              placeholder: 'Name of the Exercise',
              value: name,
            }}
            error={nameError}
          />
          <View>
          {/* <RNPickerSelect
            onValueChange={(itemValue, itemIndex) => {
              setMuscle
            }}
            value={muscle}
            items={
              firestore()
                .collection('Equipment')
                .get()
                .then(result => {
                  setEquipments(result)
                  console.log(result);
                })
            }
          //         countries.(county => {
          //         return {
          //   label: county?.counmaptryName,
          // value: county.countryName,
          //         };
          //       })}
          // placeholder={{
          //   label: 'Select the country',
          //   value: muscle
          // }}
       /> */}
          </View>
          <TextInputWithIcon
            textInput={{
              onChangeText: setMuscle,
              placeholder: 'Muscle',
              value: muscle,
            }}
          />
          <TextInputWithIcon
            textInput={{
              onChangeText: setEquipments,
              placeholder: 'Equipments',
              value: equipment,
            }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInputSmall
              textInput={{
                onChangeText: setSets,
                placeholder: 'Sets',
                value: sets,
              }}
            />
            <TextInputSmall
              textInput={{
                onChangeText: setReps,
                placeholder: 'Reps',
                value: reps,
              }}
            />
            <TextInputSmall
              textInput={{
                onChangeText: setWeight,
                placeholder: 'Weight',
                value: weight,
              }}
            />
          </View>

          <TextInputWithIcon
            textInput={{
              onChangeText: setCategory,
              placeholder: 'category',
              value: category,
            }}
          />
          
          <TextInputWithIcon
            textInput={{
              onChangeText: text => { setName(text); setNameError(false) },
              placeholder: 'Add description',
              value: name,
            }}
            error={nameError}
          />
          
          <View>
            <Text style={styles.primaryTitle}>Add Photo or Video</Text>
            {image === null ? (
              <View style={styles.attachment}>
                <TouchableOpacity
                  style={{ marginHorizontal: 25 }}
                  onPress={chooseFromLibrary}>
                  <MaterialCommunityIcons
                    name="image-plus"
                    size={40}
                    color={colors.TextGreen}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginHorizontal: 25 }}
                  onPress={chooseFromCamera}>
                  <MaterialCommunityIcons
                    name="camera-plus"
                    size={40}
                    color={colors.TextGreen}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.attachment}>
                <Image
                  style={{ width: 220, height: 220, borderRadius: 10 }}
                  source={{
                    uri: image?.uri,
                  }}
                />
              </View>
            )}
          </View>
          <View style={{ alignItems: 'center', marginVertical: 25 }}>
            <GreenButton
              title={'Create'}
              titleStyle={styles.primaryTextTitle}
              onPress={onCreate}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default AddCustome;

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
    marginVertical: 20,
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
});
