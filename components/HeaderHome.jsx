// components/HeaderHome.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HeaderHome = ({ userName }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Hey, {userName}</Text>
      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 50,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  addButton: {
    backgroundColor: '#8000FF',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent:  'center', 
    borderRadius: 20,
    padding: 10,
  },
});

export default HeaderHome;