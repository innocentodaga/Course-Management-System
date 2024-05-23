import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Grades = () => {
  const[data, setData] = useState([
    {'Course': 'Emerging Trends', 'CourseCode': 'GCS 3102','StudentID': '2101003158', 'ExamMarks': '80', 'CourseWork':'25', 'FinalMarks':'88','Semester':'Sem one', 'GPA':'4.4','CGPA':'4.7'},
    {'Course': 'Emerging Trends', 'CourseCode': 'GCS 3102','StudentID': '2101003158', 'ExamMarks': '80', 'CourseWork':'15', 'FinalMarks':'88','Semester':'Sem one', 'GPA':'2.3','CGPA':'4.7'},
    {'Course': 'Emerging Trends', 'CourseCode': 'GCS 3102','StudentID': '2101003158', 'ExamMarks': '80', 'CourseWork':'05', 'FinalMarks':'88','Semester':'Sem one', 'GPA':'1.4','CGPA':'4.7'},
    {'Course': 'Emerging Trends', 'CourseCode': 'GCS 3102','StudentID': '2101003158', 'ExamMarks': '80', 'CourseWork':'13', 'FinalMarks':'88','Semester':'Sem one', 'GPA':'2.4','CGPA':'4.7'},
    {'Course': 'Emerging Trends', 'CourseCode': 'GCS 3102','StudentID': '2101003158', 'ExamMarks': '80', 'CourseWork':'16', 'FinalMarks':'88','Semester':'Sem one', 'GPA':'3.6','CGPA':'4.7'},
    {'Course': 'Emerging Trends', 'CourseCode': 'GCS 3102','StudentID': '2101003158', 'ExamMarks': '80', 'CourseWork':'12', 'FinalMarks':'88','Semester':'Sem one', 'GPA':'4.3','CGPA':'4.7'},
    {'Course': 'Emerging Trends', 'CourseCode': 'GCS 3102','StudentID': '2101003158', 'ExamMarks': '80', 'CourseWork':'10', 'FinalMarks':'88','Semester':'Sem one', 'GPA':'2.1','CGPA':'4.7'},
    {'Course': 'Emerging Trends', 'CourseCode': 'GCS 3102','StudentID': '2101003158', 'ExamMarks': '80', 'CourseWork':'11', 'FinalMarks':'88','Semester':'Sem one', 'GPA':'3.3','CGPA':'4.7'},
   

  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };
  const renderItem = ({item, index})=>{
    return(
      <View style={styles.row}>
        <Text style={[styles.cell, {width: 45}]}>{(index + 1).toString()}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.Course}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.CourseCode}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.StudentID}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.ExamMarks}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.CourseWork}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.FinalMarks}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.Semester}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.GPA}</Text>
        <Text style={[styles.cell, {width: 100}]}>{item.CGPA}</Text>
        <View style={[styles.cell, { width:150,justifyContent: 'space-between', flexDirection: 'row'}]}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        </View>
        

      </View>
    )
  }

  return (
    <PullToRefresh refreshing={refreshing} onRefresh={onRefresh}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Grades</Text>
      </View>
      <View style={styles.line} />
      <View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add Grade</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerText, {width: 45}]}>S/N</Text>
            <Text style={[styles.headerText, {width: 100}]}>Course</Text>
            <Text style={[styles.headerText, {width: 100}]}>Course Code</Text>
            <Text style={[styles.headerText, {width: 100}]}>Student</Text>
            <Text style={[styles.headerText, {width: 100}]}>ExamMarks</Text>
            <Text style={[styles.headerText, {width: 100}]}>CourseWork</Text>
            <Text style={[styles.headerText, {width: 100}]}>FinalMarks</Text>
            <Text style={[styles.headerText, {width: 100}]}>Semester</Text>
            <Text style={[styles.headerText, {width: 100}]}>GPA</Text>
            <Text style={[styles.headerText, {width: 100}]}>CGPA</Text>
            <Text style={[styles.headerText, {width: 150}]}>Action</Text>
          </View>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index)=> index.toString()}
            
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
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 90
  },
  buttonText: {
    color: '#fff',
  },
  tableContainer: {
    marginTop: 10,
    borderRadius: 5,
    borderColor: 'gray'
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#7f4ca5',
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
 row: {
    flexDirection: 'row',
    justifyContent:'space-between',
    elevation: 1,
    borderRadius: 1,
    textAlign: 'center',
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
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
  cell:{
    fontSize: 14,
    flex: 1,
  }
});

export default Grades;
