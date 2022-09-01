/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from "./src/redux/store";
import messaging from '@react-native-firebase/messaging';
import React from 'react';

const store = configureStore();

const FitnessApp = () => {
    LogBox.ignoreLogs(ignoreLogs)

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )

}

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => FitnessApp);

const ignoreLogs = [
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]

