import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
export default function GetStarted({ navigation }) {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const handleCardPress = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  const cardStyles = isCardExpanded
    ? [styles.card, styles.cardExpanded]
    : styles.card;

  const buttonText = isCardExpanded ? 'Show Less' : 'Show More';

  return (
    // <ImageBackground
    //   source={require('../assets/bg5.jpg')}
    //   style={styles.backgroundImage}
    // >
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={cardStyles}
        onPress={handleCardPress}
        activeOpacity={0.8}
      >
        <Image
          style={styles.image}
          source={require('../assets/tyson-.png')}
        />
        {isCardExpanded && (
          <View>
            <Text style={styles.additionalDetails}>Innocent Odaga</Text>
            <Text style={styles.additionalDetails}>  2101003158</Text>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCardPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
    // </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7f4ca5'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#e3d5ff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cardExpanded: {
    height: width * 0.68,
  },
  image: {
    marginTop: 20,
    borderRadius: 120,
    width: width * 0.3,
    height: width * 0.3,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3b246b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalDetails: {
    color: '#663399',
    marginTop: 10,
    fontSize: 14,
  },
  getStartedButton: {
    backgroundColor: '#663399',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
 
});
