// CustomDrawerContent.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import constanst from '../constants/constanst';
import styles from '../navigation/styles'
const CustomDrawerContent = () => {
  const employeeCount = useSelector((state) => state.employeeReducer.employees.length);
  const favoriteEmployees = useSelector((state) => state.favoriteEmployees);

  return (
    <View style={styles.customDrawerView}>
      <Text style={styles.drawerText}>{constanst.EMP_COUNT} {employeeCount}</Text>
      <Text style={styles.drawerText}>{constanst.FAV_EMP_COUNT} {favoriteEmployees.length}</Text>
    </View>
  );
};

export default CustomDrawerContent;
