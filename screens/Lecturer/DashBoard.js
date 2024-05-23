import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import SmallCards from '../../components/SmallCards';

export default function DashBoard() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.line} />
      <View style={styles.inputText}>
        <TextInput style={styles.input}
          placeholder="search"
          placeholderTextColor= "#e3d5ff"        
        />
      </View>
      <ScrollView >
        <View style={styles.longCard}>
          <Text style={styles.longCardText}>Welcome Lecturer!</Text>
          <View style={styles.nestedCard}>
            <Text style={styles.nestedCardText}>Academic year 2022-2023</Text>
            <Text style={styles.nestedCardText}>Semester One</Text>
          </View>
        </View>
        <View style={styles.container}>
          <SmallCards
              iconName="user"
              title="Students"
              content="Manage students"
          />
          <SmallCards
              iconName="book-open"
              title="CourseUnit"
              content="View courseunit"

          />
          <SmallCards
              iconName="book-open"
              title="CourseUnit"
              content="View courseunit"

          />
        </View>
        <SmallCards
              iconName="book-open"
              title="CourseUnit"
              content="View courseunit"

          />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    flexWrap: 'wrap'

  },

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
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingHorizontal: 10,
    borderRadius: 8,
    color: '#3b246b',
    margin: 10,
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

  container:{
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }

});
