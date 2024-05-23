import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconCard from '../../components/IconCard';
import PullToRefresh from '../../components/PullToRefresh';
import Chart from '../../components/Chart';

export default function DashBoard() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

  // Define data for charts
  const studentsData = {
    labels: ['2018','2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [150, 120, 280, 200, 150, 250, 300], // Sample data for students pursuing a certain course
      },
    ],
  };
  

  return (
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
      <View>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.line} />
      
        <View style={styles.longCard}>
          <Text style={styles.longCardText}>Welcome Admin!</Text>
          <View style={styles.nestedCard}>
            <Text style={styles.nestedCardText}>Academic year 2022-2023</Text>
            <Text style={styles.nestedCardText}>1st Semester</Text>
          </View>
        </View>

        <View style={styles.container}>
          <IconCard
            iconName="user"
            title="Students"
            content="Manage students"
            number={1234}
          />
          <IconCard
            iconName="people"
            title="Lecturers"
            content="Manage lecturers"
            number={103}
          />
          <IconCard
            iconName="book-open"
            title="Courses"
            content="View courses"
            number={6}
          />
        </View>
        <View style={styles.graphContainer}>
        <Chart chartData={studentsData} title="Performance of students" />
        </View>
        <View style={styles.container}>
          <IconCard
            iconName="user"
            title="Departments"
            content="Manage Departments"
            number={4}
          />
          <IconCard
            iconName="people"
            title="Faculties"
            content="Manage Faculties"
            number={13}
          />
          <IconCard
            iconName="book-open"
            title="Logs"
            content="Manage Logs"
          />
        </View>
      </View>
    </PullToRefresh>
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
    backgroundColor: '#dbb6ee',
    borderLeftWidth: 2,
    borderLeftColor: 'purple',
    paddingLeft: 8,
    borderRadius: 3,
    marginBottom: 10,
  },
  nestedCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
    
  },
  additionalFeatures: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  additionalFeaturesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4b1c71',
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  graphContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    margin: 10,
    alignSelf: 'stretch'
  },
  graphTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4b1c71',
  },
  placeholderGraph: {
    backgroundColor: 'lightgrey',
    height: 200,
    borderRadius: 5,
  },
});
