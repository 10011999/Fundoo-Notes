import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomButton = ({ ButtonText, buttonClick }) => {
  return (
    <TouchableOpacity onPress={buttonClick}>
      <View>
        <Text style={styles.buttonTxt}>{ButtonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTxt: {
    color: '#00ffff',
   textAlign: 'center',
  },
});

export default CustomButton;
