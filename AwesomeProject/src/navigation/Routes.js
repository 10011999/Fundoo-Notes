/* eslint-disable no-shadow */
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';
import {AuthContext, AuthProvider} from './AuthProvider';
import AppStack from './AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initilizing, setInitilizing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initilizing) {setInitilizing(false);}
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },
  );
  if (initilizing) {return null;}
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
      {/* <AppStack/> */}
    </NavigationContainer>
  );
};

export default Routes;
