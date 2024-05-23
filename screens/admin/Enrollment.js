import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Modal, TextInput } from 'react-native';
import PullToRefresh from '../../components/PullToRefresh';

const EnrollmentTable = () => {
  const [data, setData] = useState([
    { 'EnrollmentID': '301', 'StudentID': '2101003158', 'StudentName': 'John Doe', 'CourseName': 'Computer Science', 'Programme': 'BSc', 'EnrollmentDate': '2024-03-25' },
    { 'EnrollmentID': '302', 'StudentID': '2101003159', 'StudentName': 'Jane Smith', 'CourseName': 'Data Science', 'Programme': 'MSc', 'EnrollmentDate': '2024-03-26' },
    { 'EnrollmentID': '303', 'StudentID': '2101003160', 'StudentName': 'Alice Johnson', 'CourseName': 'Information Technology', 'Programme': 'BEng', 'EnrollmentDate': '2024-03-27' },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEnrollment, setNewEnrollment] = useState({
    EnrollmentID: '',
    StudentID: '',
    StudentName: '',
    CourseName: '',
    Programme: '',
    EnrollmentDate: ''
  });

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

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

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleEnrollStudent = () => {
    setData([...data, newEnrollment]);
    setNewEnrollment({
      EnrollmentID: '',
      StudentID: '',
      StudentName: '',
      CourseName: '',
      Programme: '',
      EnrollmentDate: ''
    });
    toggleModal(); 
  };

  return (
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Enrollment</Text>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.buttonText}>Enroll Student</Text>
        </TouchableOpacity>
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
        <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Enrollment ID"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, EnrollmentID: text })}
                  value={newEnrollment.EnrollmentID}
                  />
                <TextInput
                  style={styles.input}
                  placeholder="Student ID"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, StudentID: text })}
                  value={newEnrollment.StudentID}
                />
              </View>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Student Name"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, StudentName: text })}
                  value={newEnrollment.StudentName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Course Name"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, CourseName: text })}
                  value={newEnrollment.CourseName}
                />
              </View>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Programme"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, Programme: text })}
                  value={newEnrollment.Programme}
                />
                 <TextInput
                  style={styles.input}
                  placeholder="Enrollment Date"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, EnrollmentDate: text })}
                  value={newEnrollment.EnrollmentDate}
                />
              </View>
             <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Created"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, Created: text })}
                  value={newEnrollment.Created}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Created By"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, CreatedBy: text })}
                  value={newEnrollment.CreatedBy}
                />
              </View>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Modified"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, Modified: text })}
                  value={newEnrollment.Modified}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Modified By"
                  onChangeText={(text) => setNewEnrollment({ ...newEnrollment, ModifiedBy: text })}
                  value={newEnrollment.ModifiedBy}
                />
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleEnrollStudent}>
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

export default EnrollmentTable;
