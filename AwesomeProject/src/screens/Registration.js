import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import CustomButton from '../component/CustomButton';
import TextVal from '../component/TextVal';
import CustomButText from '../component/CustomButText';
import { AuthContext } from '../navigation/AuthProvider';

const Registration = ({ navigation }) => {
  const [name,setInputFirst] = useState(' ');
  const [Last,setInputLast] = useState(' ');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfitmPassword] = useState();

  const {register} = useContext(AuthContext);

  const onLogin = ()=>{
    navigation.navigate('Login');
  };
  // const onHome = () =>{
  // register(email,password);
  // navigation.navigate('HomePage');
  // };


  return (
    <View style={styles.mainBody}>
      <View style={styles.subView}>
        <Text style={styles.title}> Registration Form </Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Name</Text>
        <TextVal
          placeholder="First"
          setValue={text => setInputFirst(text)} />
        <TextVal
          placeholder="Last"
          setValue={text => setInputLast(text)} />
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}> Choose your username</Text>
        <TextVal
          placeholder="EmailId"
          setValue={text => setEmail(text)} value={email} />
        <Text style={{ color: 'red', marginBottom: 20 }}>
          I prefer to use my current email address
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Create a password</Text>
        <TextVal
          //value={userInput}
          placeholder="Password"
          setValue={text => setPassword(text)} value={password} />
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Confirm your password</Text>
        <TextVal
          placeholder="Password"
          setValue={text => setConfitmPassword(text)} value={confirmPassword} />
      </View>
      <View>
        <CustomButton MyText="REGISTER" buttonOnClick={()=> register(email,password)}/>
      </View>
      <CustomButText ButtonText="Already Register? Login" buttonClick={onLogin} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  subView: {
    height: 50,
    //backgroundColor: 'gold',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00ffff',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
export default Registration;
