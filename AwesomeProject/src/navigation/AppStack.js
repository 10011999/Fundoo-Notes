import React  from 'react';
import {View} from 'react-native';
import HomePage from '../screens/HomePage';
//import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    );
  };
  export default AppStack;

