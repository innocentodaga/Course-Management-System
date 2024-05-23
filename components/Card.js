import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ img, title}) => {
  return (
    <View style={styles.card}>
        <Image style = {styles.image} source = {img}/>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 5,
    margin: 10,
    borderLeftWidth: 2,
    borderLeftColor: 'purple',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b1c71',
    marginBottom: 2,
  },
});

export default Card;
