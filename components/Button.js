// components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Define the Button component
const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Define the styles for the Button component
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Default blue color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF', // White text color
    fontSize: 16,
  },
});

export default Button;
