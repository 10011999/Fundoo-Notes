import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../component/CustomButton';

const Registration = () => {
  const [details, setUserInput] = useState(' ');
  return (
    <View style={styles.mainBody}>
      <View style={styles.subView}>
        <Text style={styles.text}> Registration Form </Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First "
          onChangeText={(value) => setUserInput(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last "
          onChangeText={(value) => setUserInput(value)}
        />
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}> Choose your username</Text>
        <TextInput
          style={styles.input}
          placeholder="GmailId "
          onChangeText={(value) => setUserInput(value)}
        />
        <Text style={{ color: 'red', marginBottom: 20 }}>
          I prefer to use my current email address
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Create a password</Text>
        <TextInput
          style={styles.input}
          placeholder="password "
          onChangeText={(value) => setUserInput(value)}
        />
        <Text style={{ fontWeight: 'bold' }}>Confirm your password</Text>
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={(value) => setUserInput(value)}
        />
      </View>
      <View>
        <CustomButton MyText="REGISTER"  />
      </View>
        <TouchableOpacity
          onPress={() => {
            console.log('');
          }}>
          <Text style={{ color: 'blue' }}>Already Register? Login</Text>
        </TouchableOpacity>
      </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  subView: {
    width: '100%',
    height: 50,
    backgroundColor: 'gold',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    marginTop: 5,
    padding: 10,
    width: '100%',
    boborderColor: 'black',
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    rderWidth: 2,
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 1,
  },
});
export default Registration;
