import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../components/Card';

export default function DashBoard() {
  return (
    <View>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.line} />
      
      <View style={styles.longCard}>
      <View style={styles.cardView}>
          <Text style={styles.longCardText}>Welcome </Text>
          <Text style={styles.longCardText}>Student!</Text>
        </View>

        <View style={styles.nestedCard}>
          <View style={styles.cardView}>
            <Text style={styles.nestedCardText}>Academic Year </Text>
            <Text style={styles.nestedCardText}>2022-2023</Text>
          </View>
          <View style={styles.cardView}>
            <Text style={styles.nestedCardText}>Semester </Text>
            <Text style={styles.nestedCardText}>One</Text>
          </View>
          <View style={styles.cardView}>
            <Text style={styles.nestedCardText}>Status: </Text>
            <Text style={styles.nestedCardText}>Ongoing</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>Recently Viewed CourseUnits</Text>
        </View>
        <View style={styles.cards}>
          <Card
            img={require("../../assets/bg4.jpg")}
            title="Embedded Systems"
          />  
          <Card
            img={require("../../assets/bg4.jpg")}
            title="Introduction to Programming"
          /> 
        </View>  
      </View>
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
  longCard: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    margin: 10,
  },
  longCardText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4b1c71',
  },
  nestedCard: {
    backgroundColor: '#faf3de',
    borderLeftWidth: 2,
    borderLeftColor: 'purple',
    paddingLeft: 8,
    marginBottom: 10,
  },
  nestedCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardView:{
    flexDirection: 'row',

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
    marginVertical: 8
  },
});
