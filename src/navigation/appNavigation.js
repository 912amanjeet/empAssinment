import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AddEmployeeButton from '../screens/addEmployeeButton/addEmployeeButton'
import AddEmployeeScreen from '../screens/addEmployeeScreen/addEmployeScreen'
import EmployeeListScreen from '../screens/employeeListScreen/employeeListScreen'



const AppNavigation = () => {

     const initialRoute = useSelector((state) => state.navigationReducer.initialRoute);
  const AppStack = createNativeStackNavigator();
console.log("initialrouteeeee",initialRoute)

  return (
  
      <AppStack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
        }}>
    
          <AppStack.Screen name="EmployeeListScreen" component={EmployeeListScreen} />
 
          <AppStack.Screen name="AddEmployeeButton" component={AddEmployeeButton} />

        <AppStack.Screen name="AddEmployeeScreen" component={AddEmployeeScreen} />
      </AppStack.Navigator>
  
  );
};

export default AppNavigation;


