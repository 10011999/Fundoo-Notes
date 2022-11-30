import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import ResetPassword from '../screens/ResetPassword';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

const AuthStack = ()=> {
  return (
     <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Registration" component={Registration} />
           <Stack.Screen name="ResetPassword" component={ResetPassword} />
           <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
  );
};
export default AuthStack;
