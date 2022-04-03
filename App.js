import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import Routes from './src/navigation';
import {setUser} from './src/redux/actions/authActions';

const App = props => {
  const dispatch = useDispatch();

  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    dispatch(setUser(user));
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return <Routes />;
};

export default App;
