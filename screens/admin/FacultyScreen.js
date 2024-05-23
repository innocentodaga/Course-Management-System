import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Modal, TextInput } from 'react-native';
import PullToRefresh from '../../components/PullToRefresh';

const FacultyTable = () => {
  const [data, setData] = useState([
    { 'FacultyID': '401', 'FacultyName': 'Engineering', 'University': 'ABC University' },
    { 'FacultyID': '402', 'FacultyName': 'Business', 'University': 'XYZ University' },
    { 'FacultyID': '403', 'FacultyName': 'Computer Science', 'University': 'DEF University' },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newFaculty, setNewFaculty] = useState({
    FacultyID: '',
    FacultyName: '',
    University: ''
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
        <Text style={[styles.cell, { width: 100 }]}>{item.FacultyID}</Text>
        <Text style={[styles.cell, { width: 200 }]}>{item.FacultyName}</Text>
        <Text style={[styles.cell, { width: 150 }]}>{item.University}</Text>
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

  const handleAddFaculty = () => {
    // Add the new faculty to your data state
    setData([...data, newFaculty]);
    // Reset the newFaculty state and close the modal
    setNewFaculty({ FacultyID: '', FacultyName: '', University: '' });
    toggleModal();
  };

  return (
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Faculty</Text>
        </View>
        <View style={styles.line} />
        <View>
          <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
            <Text style={styles.buttonText}>Add Faculty</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, { width: 100 }]}>Faculty ID</Text>
              <Text style={[styles.headerText, { width: 200 }]}>Faculty Name</Text>
              <Text style={[styles.headerText, { width: 150 }]}>University</Text>
              <Text style={[styles.headerText, { width: 150 }]}>Action</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderRowItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        {/* Modal for adding new faculty */}
        <Modal visible={isModalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Faculty</Text>
              <TextInput
                style={styles.input}
                placeholder="Faculty ID"
                onChangeText={(text) => setNewFaculty({ ...newFaculty, FacultyID: text })}
                value={newFaculty.FacultyID}
              />
              <TextInput
                style={styles.input}
                placeholder="Faculty Name"
                onChangeText={(text) => setNewFaculty({ ...newFaculty, FacultyName: text })}
                value={newFaculty.FacultyName}
              />
              <TextInput
                style={styles.input}
                placeholder="University"
                onChangeText={(text) => setNewFaculty({ ...newFaculty, University: text })}
                value={newFaculty.University}
              />
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAddFaculty}>
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

export default FacultyTable;
