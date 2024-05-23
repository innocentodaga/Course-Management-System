import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Modal, TextInput } from 'react-native';
import PullToRefresh from '../../components/PullToRefresh';

const CourseUnitTable = () => {
  const [data, setData] = useState([
    { 'CourseUnitID': '401', 'CourseUnitName': 'Introduction to Programming', 'CourseID': 'GCS101', 'LecturerID': '201', 'CreditUnits': '3' },
    { 'CourseUnitID': '402', 'CourseUnitName': 'Data Structures', 'CourseID': 'GCS102', 'LecturerID': '202', 'CreditUnits': '4' },
    { 'CourseUnitID': '403', 'CourseUnitName': 'Database Management Systems', 'CourseID': 'GCS103', 'LecturerID': '203', 'CreditUnits': '3' },
    { 'CourseUnitID': '404', 'CourseUnitName': 'Software Engineering', 'CourseID': 'GCS104', 'LecturerID': '204', 'CreditUnits': '4' },
    { 'CourseUnitID': '405', 'CourseUnitName': 'Computer Networks', 'CourseID': 'GCS105', 'LecturerID': '205', 'CreditUnits': '3' },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCourseUnit, setNewCourseUnit] = useState({
    CourseUnitID: '',
    CourseUnitName: '',
    CourseID: '',
    LecturerID: '',
    CreditUnits: ''
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
        <Text style={[styles.cell, { width: 100 }]}>{item.CourseUnitID}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.CourseUnitName}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.CourseID}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.LecturerID}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.CreditUnits}</Text>
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

  const handleAddCourseUnit = () => {
    setData([...data, newCourseUnit]);
    setNewCourseUnit({
      CourseUnitID: '',
      CourseUnitName: '',
      CourseID: '',
      LecturerID: '',
      CreditUnits: ''
    });
    toggleModal();
  };

  return (
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Course Units</Text>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.buttonText}>Add Course Unit</Text>
        </TouchableOpacity>
        <ScrollView horizontal={true}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, { width: 100 }]}>CourseUnit ID</Text>
              <Text style={[styles.headerText, { width: 200 }]}>CourseUnit Name</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Course ID</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Lecturer ID</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Credit Units</Text>
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
              <TextInput
                style={styles.input}
                placeholder="CourseUnit ID"
                onChangeText={(text) => setNewCourseUnit({ ...newCourseUnit, CourseUnitID: text })}
                value={newCourseUnit.CourseUnitID}
              />
              <TextInput
                style={styles.input}
                placeholder="CourseUnit Name"
                onChangeText={(text) => setNewCourseUnit({ ...newCourseUnit, CourseUnitName: text })}
                value={newCourseUnit.CourseUnitName}
              />
              <TextInput
                style={styles.input}
                placeholder="Course ID"
                onChangeText={(text) => setNewCourseUnit({ ...newCourseUnit, CourseID: text })}
                value={newCourseUnit.CourseID}
              />
              <TextInput
                style={styles.input}
                placeholder="Lecturer ID"
                onChangeText={(text) => setNewCourseUnit({ ...newCourseUnit, LecturerID: text })}
                value={newCourseUnit.LecturerID}
              />
              <TextInput
                style={styles.input}
                placeholder="Credit Units"
                onChangeText={(text) => setNewCourseUnit({ ...newCourseUnit, CreditUnits: text })}
                value={newCourseUnit.CreditUnits}
              />
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAddCourseUnit}>
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

export default CourseUnitTable;
