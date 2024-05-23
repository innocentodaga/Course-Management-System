import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Modal, TextInput } from 'react-native';
import PullToRefresh from '../../components/PullToRefresh';

const Course = () => {
  const [data, setData] = useState([
    { 'CourseCode': 'C101', 'DepartmentID': 'D101', 'CourseName': 'Web Development Fundamentals', 'Description': 'Introduction to web development concepts', 'StartDate': '2024-04-01', 'EndDate': '2024-04-30' },
    { 'CourseCode': 'C102', 'DepartmentID': 'D102', 'CourseName': 'Data Science Essentials', 'Description': 'Fundamental concepts of data science', 'StartDate': '2024-04-05', 'EndDate': '2024-05-05' },
    { 'CourseCode': 'C103', 'DepartmentID': 'D103', 'CourseName': 'Mobile App Development Basics', 'Description': 'Introduction to mobile app development', 'StartDate': '2024-04-10', 'EndDate': '2024-05-10' },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCourse, setNewCourse] = useState({
    CourseCode: '',
    DepartmentID: '',
    CourseName: '',
    Description: '',
    StartDate: '',
    EndDate: ''
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
        <Text style={[styles.cell, { width: 100 }]}>{item.CourseCode}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.DepartmentID}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.CourseName}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.Description}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.StartDate}</Text>
        <Text style={[styles.cell, { width: 100 }]}>{item.EndDate}</Text>
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

  const handleAddCourse = () => {
    setData([...data, newCourse]);
    setNewCourse({
      CourseCode: '',
      DepartmentID: '',
      CourseName: '',
      Description: '',
      StartDate: '',
      EndDate: ''
    });
    toggleModal();
  };

  return (
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Courses</Text>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.buttonText}>Add Course</Text>
        </TouchableOpacity>
        <ScrollView horizontal={true}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, { width: 100 }]}>Course Code</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Department ID</Text>
              <Text style={[styles.headerText, { width: 200 }]}>Course Name</Text>
              <Text style={[styles.headerText, { width: 200 }]}>Description</Text>
              <Text style={[styles.headerText, { width: 100 }]}>Start Date</Text>
              <Text style={[styles.headerText, { width: 100 }]}>End Date</Text>
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
                placeholder="Course Code"
                onChangeText={(text) => setNewCourse({ ...newCourse, CourseCode: text })}
                value={newCourse.CourseCode}
              />
              <TextInput
                style={styles.input}
                placeholder="Department ID"
                onChangeText={(text) => setNewCourse({ ...newCourse, DepartmentID: text })}
                value={newCourse.DepartmentID}
              />
              <TextInput
                style={styles.input}
                placeholder="Course Name"
                onChangeText={(text) => setNewCourse({ ...newCourse, CourseName: text })}
                value={newCourse.CourseName}
              />
              <TextInput
                style={styles.input}
                placeholder="Description"
                onChangeText={(text) => setNewCourse({ ...newCourse, Description: text })}
                value={newCourse.Description}
              />
              <TextInput
                style={styles.input}
                placeholder="Start Date"
                onChangeText={(text) => setNewCourse({ ...newCourse, StartDate: text })}
                value={newCourse.StartDate}
              />
              <TextInput
                style={styles.input}
                placeholder="End Date"
                onChangeText={(text) => setNewCourse({ ...newCourse, EndDate: text })}
                value={newCourse.EndDate}
              />
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAddCourse}>
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

export default Course;
