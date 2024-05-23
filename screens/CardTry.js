import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BigCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBorder} />
      <Image
        source={require('../assets/tyson.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <View style={styles.circle}>
          <View style={styles.diamond} />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.name}>Innocent Tyson</Text>
          <Text style={styles.details}>Role: Junior Developer</Text>
          <Text style={styles.details}>Contact: +256-760-7200</Text>
          <Text style={styles.details}>Address: Gulu Laroo</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>#MessageMe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondButton]}>
          <Text style={styles.buttonText}>#FollowMe</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={ styles.getstarted}>
          <Text style={styles.buttonText}>GetStarted</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'red',
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  diamond: {
    width: 20,
    height: 20,
    backgroundColor: '#ff1cc0',
    transform: [{ rotate: '45deg' }],
  },
  textContainer: {
    alignItems: 'flex',
    marginTop: 20,

  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  details: {
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    borderWidth: 2,
    borderColor: '#ff1cc0',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 2,
    margin:5
  },
  secondButton: {
    borderColor: '#a500a4',
  },
  getstarted:{
    borderWidth: 2,
    borderColor: '#ff1cc0',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 2,
    margin:5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BigCard;
