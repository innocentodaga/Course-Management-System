import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Modal, TextInput } from 'react-native';
import PullToRefresh from '../../components/PullToRefresh';

const StudentsTable = () => {
  const [data, setData] = useState([
    { 'StudentID': 'S101', 'FirstName': 'John', 'LastName': 'Doe', 'Address': '123 Main St', 'Country': 'USA', 'CourseID': 'C101', 'EnrollmentDate': '2024-04-01', 'Created': '2024-04-01', 'CreatedBy': 'Admin', 'Modified': '2024-04-01', 'ModifiedBy': 'Admin' },
    { 'StudentID': 'S102', 'FirstName': 'Jane', 'LastName': 'Smith', 'Address': '456 Elm St', 'Country': 'UK', 'CourseID': 'C102', 'EnrollmentDate': '2024-04-02', 'Created': '2024-04-02', 'CreatedBy': 'Admin', 'Modified': '2024-04-02', 'ModifiedBy': 'Admin' },
    { 'StudentID': 'S103', 'FirstName': 'Michael', 'LastName': 'Johnson', 'Address': '789 Oak St', 'Country': 'Canada', 'CourseID': 'C103', 'EnrollmentDate': '2024-04-03', 'Created': '2024-04-03', 'CreatedBy': 'Admin', 'Modified': '2024-04-03', 'ModifiedBy': 'Admin' },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newStudent, setNewStudent] = useState({
    StudentID: '',
    FirstName: '',
    LastName: '',
    Address: '',
    Country: '',
    CourseID: '',
    EnrollmentDate: '',
    Created: '',
    CreatedBy: '',
    Modified: '',
    ModifiedBy: ''
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
        <Text style={[styles.cell, { width: 100 }]}>{item.StudentID}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.FirstName}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.LastName}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.Address}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.Country}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.CourseID}</Text>
        <Text style={[styles.cell, { width: 150 }]}>{item.EnrollmentDate}</Text>
        <Text style={[styles.cell, { width: 150 }]}>{item.Created}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.CreatedBy}</Text>
        <Text style={[styles.cell, { width: 150 }]}>{item.Modified}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.ModifiedBy}</Text>
      </View>
    );
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAddStudent = () => {
    setData([...data, newStudent]);
    setNewStudent({
      StudentID: '',
      FirstName: '',
      LastName: '',
      Address: '',
      Country: '',
      CourseID: '',
      EnrollmentDate: '',
      Created: '',
      CreatedBy: '',
      Modified: '',
      ModifiedBy: ''
    });
    toggleModal();
  };

  return (
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Students</Text>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.buttonText}>Add Student</Text>
        </TouchableOpacity>
        <ScrollView horizontal={true}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, { width: 100 }]}>Student ID</Text>
              <Text style={[styles.headerText, { width: 100 }]}>First Name</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Last Name</Text>
              <Text style={[styles.headerText, { width: 200 }]}>Address</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Country</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Course ID</Text>
              <Text style={[styles.headerText, { width: 150 }]}>Enrollment Date</Text>
              <Text style={[styles.headerText, { width: 150 }]}>Created</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Created By</Text>
              <Text style={[styles.headerText, { width: 150 }]}>Modified</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Modified By</Text>
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
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Student ID"
                  onChangeText={(text) => setNewStudent({ ...newStudent, StudentID: text })}
                  value={newStudent.StudentID}
                />
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  onChangeText={(text) => setNewStudent({ ...newStudent, FirstName: text })}
                  value={newStudent.FirstName}
                />
              </View>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  onChangeText={(text) => setNewStudent({ ...newStudent, LastName: text })}
                  value={newStudent.LastName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Address"
                  onChangeText={(text) => setNewStudent({ ...newStudent, Address: text })}
                  value={newStudent.Address}
                />
              </View>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Country"
                  onChangeText={(text) => setNewStudent({ ...newStudent, Country: text })}
                  value={newStudent.Country}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Course ID"
                  onChangeText={(text) => setNewStudent({ ...newStudent, CourseID: text })}
                  value={newStudent.CourseID}
                />
              </View>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Enrollment Date"
                  onChangeText={(text) => setNewStudent({ ...newStudent, EnrollmentDate: text })}
                  value={newStudent.EnrollmentDate}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Created"
                  onChangeText={(text) => setNewStudent({ ...newStudent, Created: text })}
                  value={newStudent.Created}
                />
              </View>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Created By"
                  onChangeText={(text) => setNewStudent({ ...newStudent, CreatedBy: text })}
                  value={newStudent.CreatedBy}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Modified"
                  onChangeText={(text) => setNewStudent({ ...newStudent, Modified: text })}
                  value={newStudent.Modified}
                />
              </View>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Modified By"
                  onChangeText={(text) => setNewStudent({ ...newStudent, ModifiedBy: text })}
                  value={newStudent.ModifiedBy}
                />
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAddStudent}>
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
    height: 50, 
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
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '48%',
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

export default StudentsTable;
