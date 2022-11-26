import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../component/CustomButton';


const ResetPassword = () =>{
    const [details, setUserInput] = useState(' ');
    return (
      <View style={styles.mainBody} >
      <View style={styles.subView}>
        <Text style={styles.text}> Reset your password </Text>
      </View>
      <View>
          <TextInput
            style={styles.input}
            placeholder="Gmail or Phone"
            onChangeText={value => setUserInput(value)}
          />
        </View>
        <View>
          <CustomButton
            onPress={() => {
              console.log('');
            }}
            text="Next"
          />
        </View>
        <View>
          <CustomButton
            onPress={() => {
              console.log('');
            }}
            text="Back to sign in"
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
        backgroundColor: 'gold',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
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
export default ResetPassword;
