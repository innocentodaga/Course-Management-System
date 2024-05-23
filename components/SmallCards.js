import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const SmallCards = ({ iconName, title, content, number }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <SimpleLineIcons name={iconName} size={24} color="#460066" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View><Text style={styles.number}>{number}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#dbb6ee',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    borderLeftWidth: 2,
    margin: 10,
    borderLeftColor: 'purple',
  },
  iconContainer: {
    margin: 8
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4b1c71',
    marginBottom: 2,
  },
  content: {
    fontSize: 14,
    color: 'black',
  },
  number: {
    fontSize: 24,
    color: '#7f4ca5',
    margin: 5,
  },
});

export default SmallCards;
