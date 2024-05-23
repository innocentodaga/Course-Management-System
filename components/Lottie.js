// CustomLottie.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'; // Import LottieView from 'lottie-react-native'

const Lottie = ({ source }) => {
  return (
    <View style={styles.lottie}>
      <LottieView
        source={source} // Pass the Lottie animation JSON source
        autoPlay
        loop
        onLoop={() => console.log('Animation looped')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 65,
    width: '90%', 
    height: 250,
  },
});

export default Lottie;
