import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const EnrollmentTable = () => {
  const [data, setData] = useState([
    { 'EnrollmentID': '301', 'StudentID': '2101003158', 'StudentName': 'John Doe', 'CourseName': 'Computer Science', 'Programme': 'BSc', 'EnrollmentDate': '2024-03-25' },
    { 'EnrollmentID': '302', 'StudentID': '2101003159', 'StudentName': 'Jane Smith', 'CourseName': 'Data Science', 'Programme': 'MSc', 'EnrollmentDate': '2024-03-26' },
    { 'EnrollmentID': '303', 'StudentID': '2101003160', 'StudentName': 'Alice Johnson', 'CourseName': 'Information Technology', 'Programme': 'BEng', 'EnrollmentDate': '2024-03-27' },
  ]);

  const renderRowItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={[styles.cell, { width: 100 }]}>{item.EnrollmentID}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.StudentID}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.StudentName}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.CourseName}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.Programme}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.EnrollmentDate}</Text>
        <View style={[styles.actionCell, { width: 120 }]}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Enrollment</Text>
      </View>
      <View style={styles.line} />
      <View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add Enrollment</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerText, { width: 100 }]}>Enrollment ID</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Student ID</Text>
            <Text style={[styles.headerText, { width: 200 }]}>Student Name</Text>
            <Text style={[styles.headerText, { width: 200 }]}>Course Name</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Programme</Text>
            <Text style={[styles.headerText, { width: 200 }]}>Enrollment Date</Text>
            <Text style={[styles.headerText, { width: 120 }]}>Action</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderRowItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4b1c71',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
  },
  addButton: {
    backgroundColor: '#be58cf',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#7f4ca5',
    paddingVertical: 8,
    paddingHorizontal: 2,
    marginTop: 10,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    fontSize: 14,
    justifyContent: 'space-between',
  },
  actionCell: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});


export default EnrollmentTable;
