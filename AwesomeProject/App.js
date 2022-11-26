import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AuthStack from './src/navigation/AuthStack';
//import Login from './src/screens/Login';
//import ResetPassword from './src/screens/ResetPassword';

const App = () => {
  return (
    <View style={styles.body}>
      <AuthStack/>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default App;
