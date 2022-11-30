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
    marginTop: 10,
    padding: 10,
    width: '100%',
    borderColor: 'black',
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 5,
},
});

export default TextVal;
