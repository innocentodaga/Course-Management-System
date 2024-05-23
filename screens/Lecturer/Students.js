import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Students() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Students</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>View Courses</Text>
        </View>
        <View style={styles.cards}>
          <View style={styles.card}>
            {/* First Card Content */}
          </View>
          <View style={styles.card}>
            {/* Second Card Content */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4b1c71', // header background color
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white', // text color
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc', // border color
    borderRadius: 5,
    margin: 10,
    overflow: 'hidden', // ensure border doesn't overlap with cards
  },
  cardHeader: {
    backgroundColor: '#f2f2f2', // header background color
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // border color
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // text color
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff', // card background color
    padding: 15, // Increased padding to make the cards bigger
    margin: 10, // Added margin
    borderRadius: 10, // Rounded corners
  },
});
