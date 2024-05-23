import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import PullToRefresh from '../../components/PullToRefresh';

const LecturerTable = () => {
  const [data, setData] = useState([
    { 'LecturerID': '201', 'FirstName': 'John', 'LastName': 'Doe', 'Email': 'john@example.com', 'Address': '123 Main St' },
    { 'LecturerID': '202', 'FirstName': 'Jane', 'LastName': 'Doe', 'Email': 'jane@example.com', 'Address': '456 Elm St' },
    { 'LecturerID': '203', 'FirstName': 'Alice', 'LastName': 'Smith', 'Email': 'alice@example.com', 'Address': '789 Oak St' },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

  const renderRowItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={[styles.cell, { width: 100 }]}>{item.LecturerID}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.FirstName}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.LastName}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.Email}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.Address}</Text>
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
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lecturers</Text>
      </View>
      <View style={styles.line} />
      <View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add Lecturer</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerText, { width: 100 }]}>Lecturer ID</Text>
            <Text style={[styles.headerText, { width: 100 }]}>First Name</Text>
            <Text style={[styles.headerText, { width: 100 }]}>Last Name</Text>
            <Text style={[styles.headerText, { width: 200 }]}>Email</Text>
            <Text style={[styles.headerText, { width: 200 }]}>Address</Text>
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
    </PullToRefresh>
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


export default LecturerTable;
