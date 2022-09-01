import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Provider } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';

import Routes from './src/navigation';
import { setUser } from './src/redux/actions/authActions';
import toastConfig from './src/utils/configs/toastConfig';

const App = props => {

  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    if (user) {
      firestore()
        .collection('Profile')
        .doc(user.uid)
        .get()
        .then(documentSnapshot => {
          console.log('User exists: ', documentSnapshot.exists);

          if (documentSnapshot.exists) {
            dispatch(setUser({ user, userProfile: documentSnapshot.data() }))
            console.log('User data: ', documentSnapshot.data());
          } else {
            dispatch(setUser({ user, userProfile: null }))
          }
        })
        .finally(() => {
          if (initializing) setInitializing(false);
        })

    } else {
      dispatch(setUser({ user: null, userProfile: null }))
      if (initializing) setInitializing(false);
    }

  };

  const getToken = () => {
    messaging().getToken()
      .then(console.log)
      .catch(console.error)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    getToken()
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  if (initializing) return null;

  return (
    <><Routes />
      <Toast />
    </>
  );
};

export default App;
