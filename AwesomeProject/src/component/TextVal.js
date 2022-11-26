import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextVal = ({ placeholder, setValue, value, password }) => {

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={setValue}
                value={value}
                secureTextEntry={password}
            />
        </View>
    );
};
const styles = StyleSheet.create({
input: {
    marginTop: 5,
    padding: 10,
    width: '100%',
    boborderColor: 'black',
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    rderWidth: 2,
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 1,
},
});

export default TextVal;
