import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = ({ children }) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000000',
  },
});

export default DefaultText;
