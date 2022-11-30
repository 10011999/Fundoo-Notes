import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import AuthStack from '../navigation/AuthStack';
import CustomButton from '../component/CustomButton';
import CustomButText from '../component/CustomButText';
import TextVal from '../component/TextVal';
import { AuthContext } from '../navigation/AuthProvider';
//import ResetPassword from './ResetPassword';

const Login = ({ navigation }) => {
  const [email, setUserInput] = useState(' ');
  const [error, setError] = React.useState({});
  const [password, setPwd] = React.useState('');

  const { login } = useContext(AuthContext);

  const validation = () => {
    let regxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regxPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    const array = {};
    let valid = true;
    if (email === '' || !regxEmail.test(email)) {
      array.user = 'Please Enter valid gmail';
      valid = false;
    }

    if (email.length < 9 && email.length > 1 ) {
      array.user = 'Please enter gmail more than 6 character';
      valid = false;
    }

    if (password === '' || !regxPassword.test(password)) {
      array.pwd = 'Please Enter valid password';
      valid = false;
    }
    if (password.length < 6 && password.length > 1) {
      array.pwd = 'Please enter password more than 6 character';
      valid = false;
    }
    setError(array);
    return valid;
  };

  const onSignIn = () => {
    if (validation()) {
      console.log('Login successfully');
      navigation.navigate('HomePage');
      login(email,password);
    }
  };
  const onForgotPass = ()=>{
    navigation.navigate('ResetPassword');
  };
  const onRegistrationPage = ()=>{
    navigation.navigate('Registration');
  };

  console.log( email);
  return (
    <View style={styles.mainBody}>
      <View style={styles.subView}>
        <Text style={styles.title}> Fun-Do Notes </Text>
      </View>
      <View >
        <Text style={{ fontWeight: 'bold' }}>Gmail or Phone</Text>
      </View>
      <View>
        <TextVal
          placeholder="Enter Gmail"
          setValue={text => setUserInput(text)} value={email} />
        <Text style={{ color: 'red'}}>{error.user}</Text>
      </View>
      <View>
        <TextVal
          placeholder="Enter Password"
          setValue={text => setPwd(text)} value={password} />
        <Text style={{ color: 'red', margin: 5 }}>{error.pwd}</Text>
        <CustomButton MyText="LogIn" buttonOnClick={()=>{onSignIn();}} />
      </View>
        <View>
        <CustomButText ButtonText="Create Account" buttonClick={()=>{onRegistrationPage();}}/>
        </View>
        <View>
        <CustomButText ButtonText="Forgot Password?" buttonClick={onForgotPass}/>
      </View>
      <View>
      <CustomButText ButtonText="Forgot Password?" buttonClick={onForgotPass}/>
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
   // backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00ffff',
  },
});
export default Login;
