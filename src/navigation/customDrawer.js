// CustomDrawerContent.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const CustomDrawerContent = () => {
  const employeeCount = useSelector((state) => state.employeeReducer.employees.length);
  const favoriteEmployees = useSelector((state) => state.favoriteEmployees);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>Employee Count: {employeeCount}</Text>
      <Text style={{ fontSize: 18 }}>Favorite Employee Count: {favoriteEmployees.length}</Text>
    </View>
  );
};

export default CustomDrawerContent;
