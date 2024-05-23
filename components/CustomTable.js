import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CustomTable = ({ data, onEdit, onDelete }) => {
  return (
    <ScrollView horizontal>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          {Object.keys(data[0]).map((key, index) => (
            <Text key={index} style={[styles.headerText, styles.cell]}>
              {key}
            </Text>
          ))}
          <Text style={[styles.headerText, styles.cell]}>Actions</Text>
        </View>
        {data.map((item, index) => (
          <View key={index} style={styles.row}>
            {Object.values(item).map((value, index) => (
              <Text key={index} style={[styles.cell]}>
                {value}
              </Text>
            ))}
            <View style={styles.actionCell}>
              <TouchableOpacity style={styles.editButton} onPress={() => onEdit(index)}>
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(index)}>
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 10,
    borderRadius: 5,
    borderColor: 'gray',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#7f4ca5',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  actionCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
});

export default CustomTable;
