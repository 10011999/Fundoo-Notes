import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomButton = ({ MyText, buttonOnClick }) => {
  return (
    <TouchableOpacity onPress={buttonOnClick}>
      <View style={styles.button}>
        <Text style={styles.buttonTxt}>{MyText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00ffff',
    alignItems: 'center',
    padding: 9,
    margin: 10,
    width: 380,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CustomButton;
