import React  from 'react';
import {View} from 'react-native';
import HomePage from '../screens/HomePage';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Login from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Tabs from './Tabs';
//import { DrawerActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
    //   <Drawer.Navigator>
    //   <Drawer.Screen name="Home" component={HomePage} />
    //  </Drawer.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    );
  };
  export default AppStack;

