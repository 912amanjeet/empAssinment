import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AddEmployeeButton from '../screens/addEmployeeButton/addEmployeeButton'
import AddEmployeeScreen from '../screens/addEmployeeScreen/addEmployeScreen'
import EmployeeListScreen from '../screens/employeeListScreen/employeeListScreen'
import DrawerNavigator from '../navigation/drawerNavigation';


import AppNavigation from './appNavigation';

export default AppNavigation;


