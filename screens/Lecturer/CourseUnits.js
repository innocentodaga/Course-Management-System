import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CourseUnits() {
  return (
    <View>
      <Text style={styles.title}>CourseUnits</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
    marginLeft: 5,
    color: '#4b1c71',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    marginHorizontal: 5,
  },
});