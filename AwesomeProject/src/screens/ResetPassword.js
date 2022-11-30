import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import CustomButton from '../component/CustomButton';
import TextVal from '../component/TextVal';


const ResetPassword = ({ navigation }) => {
  const [setUserInput] = useState(' ');

  const onBackPage = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainBody} >
      <View style={styles.subView}>
        <Text style={styles.title}> Reset your password </Text>
      </View>
      <View>
        <TextVal
          placeholder="Enter Password"
          setValue={text => setUserInput(text)} />
      </View>
      <View>
        <CustomButton MyText={'Next'} buttonOnClick={() => { console.log(''); }} />
      </View>
      <View>
        <CustomButton MyText={'Back to Sign in'} buttonOnClick={() => { onBackPage(); }}
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
