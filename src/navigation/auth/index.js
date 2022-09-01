import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Screen from '../../containers'
import { screens } from '../../constants'

const Stack = createNativeStackNavigator()

const AuthStack = props => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name={screens.ONBOARD} component={Screen.OnboardScreen} />
      <Stack.Screen name={screens.SIGN_IN} component={Screen.SignIn} />
      <Stack.Screen name={screens.SIGN_UP} component={Screen.SignUp} />
      {/* <Stack.Screen name={screens.PROFILE_COMPLETE} component={Screen.ProfileComplete}/> */}
      {/* <Stack.Screen name={screens.WELCOME} component={Screen.Welcome}/> */}
      {/* <Stack.Screen name={screens.DASHBOARD} component={Screen.DashBoard}/> */}

    </Stack.Navigator>
  )
}

export default AuthStack