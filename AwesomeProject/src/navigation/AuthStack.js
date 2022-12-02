import React,{useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import ResetPassword from '../screens/ResetPassword';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '564054351018-5onapmmn8vf1p9ep5b6v9ocpk4haiofs.apps.googleusercontent.com',
    });
  });
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="ResetPassword" component={ResetPassword}/>
    </Stack.Navigator>
  );
};
export default AuthStack;
