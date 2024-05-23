import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Modal, TextInput } from 'react-native';
import PullToRefresh from '../../components/PullToRefresh';

const Departments = () => {
  const [data, setData] = useState([
    { 'DepartmentID': '101', 'DepartmentName': 'IT', 'Faculty': 'John Doe' },
    { 'DepartmentID': '102', 'DepartmentName': 'HR', 'Faculty': 'Jane Smith' },
    { 'DepartmentID': '103', 'DepartmentName': 'Finance', 'Faculty': 'David Johnson' },
    { 'DepartmentID': '104', 'DepartmentName': 'Marketing', 'Faculty': 'Emma Brown' },
    { 'DepartmentID': '105', 'DepartmentName': 'Operations', 'Faculty': 'Michael Wilson' },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newDepartment, setNewDepartment] = useState({
    DepartmentID: '',
    DepartmentName: '',
    Faculty: ''
  });

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderRowItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={[styles.cell, { width: 100 }]}>{item.DepartmentID}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.DepartmentName}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.Faculty}</Text>
        <View style={[styles.actionCell, { width: 150 }]}>
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

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAddDepartment = () => {
    setData([...data, newDepartment]);
    setNewDepartment({ DepartmentID: '', DepartmentName: '', Faculty: '' });
    toggleModal();
  };

  return (
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Departments</Text>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
            <Text style={styles.buttonText}>Add Department</Text>
          </TouchableOpacity>
        <ScrollView horizontal={true}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, { width: 100 }]}>Department ID</Text>
              <Text style={[styles.headerText, { width: 200 }]}>Department Name</Text>
              <Text style={[styles.headerText, { width: 200 }]}>Faculty</Text>
              <Text style={[styles.headerText, { width: 150 }]}>Action</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderRowItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        <Modal visible={isModalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.input}
                placeholder="Department ID"
                onChangeText={(text) => setNewDepartment({ ...newDepartment, DepartmentID: text })}
                value={newDepartment.DepartmentID}
              />
              <TextInput
                style={styles.input}
                placeholder="Department Name"
                onChangeText={(text) => setNewDepartment({ ...newDepartment, DepartmentName: text })}
                value={newDepartment.DepartmentName}
              />
              <TextInput
                style={styles.input}
                placeholder="Faculty"
                onChangeText={(text) => setNewDepartment({ ...newDepartment, Faculty: text })}
                value={newDepartment.Faculty}
              />
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAddDepartment}>
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={toggleModal}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    height: 50, // Adjusted height for the header
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

export default Departments;
