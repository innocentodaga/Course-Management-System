import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Content = ({ contentText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{contentText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Content;
