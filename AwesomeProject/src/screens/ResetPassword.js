import React, { useState,useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import CustomButton from '../component/CustomButton';
import TextVal from '../component/TextVal';
import { AuthContext } from '../navigation/AuthProvider';


const ResetPassword = ({ navigation }) => {
  const { forget } = useContext(AuthContext);
  const [email,setUserInputEmail] = useState(' ');

  // const onBackPage = () => {
  //   navigation.navigate('Login');
  // };
  return (
    <View style={styles.mainBody} >
      <View style={styles.subView}>
        <Text style={styles.title}> Reset your password </Text>
      </View>
      <View>
        <TextVal
          placeholder="Enter Email"
          setValue={text => setUserInputEmail(text)} value={email}/>
      </View>
      <View>
        <CustomButton MyText={'Change Password'} buttonOnClick={() => {forget(email)}} />
      </View>
      <View>
        <CustomButton MyText={'Back to Sign in'} buttonOnClick={() => { navigation.navigate('Login'); }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  subView: {
    width: '100%',
    height: 50,
    //backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00ffff',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
export default ResetPassword;
