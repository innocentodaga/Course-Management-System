import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const IconCard = ({ iconName, title, content, number }) => {
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
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 15,
    elevation: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    borderLeftWidth: 2,
    borderLeftColor: 'purple',
  },
  iconContainer: {
    marginRight: 15,
    marginTop: 10
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b1c71',
    marginBottom: 2,
  },
  content: {
    fontSize: 16,
    color: 'black',
  },
  number: {
    fontSize: 24,
    color: '#7f4ca5',
    margin: 8,
  },
});

export default IconCard;
