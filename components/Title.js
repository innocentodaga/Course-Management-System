import { View, Text } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View>
      <Text style={styles.title}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e3d5ff', // Purple color
    marginBottom: 20,
    alignSelf: 'center',
  },

})