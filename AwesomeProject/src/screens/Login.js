import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import AuthStack from '../navigation/AuthStack';
import Registration from './Registration';
import CustomButton from '../component/CustomButton';
import TextVal from '../component/TextVal';

const Login = ({ navigation }) => {
  const [gmail, setUserInput] = useState(' ');
  const [error, setError] = React.useState({});
  const [pwd, setPwd] = React.useState('');

  const validation = () => {
    const array = {};
    let valid = true;
    if (gmail === '' ) {
      array.user = 'Please Enter valid gmail';
      valid = false;
    }

    if (gmail.length < 9 && gmail.length > 1 ) {
      array.user = 'Please enter gmail more than 6 character';
      valid = false;
    }

    if (pwd === '') {
      array.pwd = 'Please Enter valid password';
      valid = false;
    }
    if (pwd.length < 6 && pwd.length > 1) {
      array.pwd = 'Please enter password more than 6 character';
      valid = false;
    }
    setError(array);
    return valid;
  };

  const onSignIn = () => {
    if (validation()) {
      console.log('Login successfully');
      navigation.navigate('Registration');
    }
  };

  console.log( gmail);
  return (
    <View style={styles.mainBody}>
      <View style={styles.subView}>
        <Text style={styles.text}> Fun-Do Notes </Text>
      </View>
      <View >
        <Text style={{ fontWeight: 'bold' }}>Gmail or Phone</Text>
      </View>
      <View>
        <TextVal
          placeholder="Enter Gmail"
          setValue={text => setUserInput(text)} value={gmail} />
        <Text style={{ color: 'red', alignSelf: 'center', margin: 5 }}>{error.user}</Text>
      </View>
      <View>
        <TextVal
          placeholder="Enter Password"
          setValue={text => setPwd(text)} value={pwd} />
        <Text style={{ color: 'red', alignSelf: 'center', margin: 5 }}>{error.pwd}</Text>
      </View>
      <Text style={{ marginBottom: 50 }}>App will share your name gmail address and details</Text>
      <View>
        <CustomButton MyText="LogIn" buttonOnClick={onSignIn} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log();
          }}>
          <Text style={{ color: '#635b30', textAlign: 'center', marginBottom: 15 }}>Create account?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('');
          }}>
          <Text style={{ color: '#635b30', textAlign: 'center' }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    padding: 5,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  subView: {
    width: '100%',
    height: 50,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textIn: {

  },
});
export default Login;
