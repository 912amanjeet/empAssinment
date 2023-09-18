// App.js
import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import DrawerNavigator from './src/navigation/drawerNavigation';


const AppWrapper = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeeReducer.employees.length);
console.log("employeescount",employees)

  useEffect(() => {
    const initialRoute = employees.length > 0 ? 'EmployeeListScreen' : 'AddEmployeeButton';
    dispatch({ type: 'SET_INITIAL_ROUTE', payload: initialRoute });
  }, [dispatch, employees]);

  return (
    <NavigationContainer>
     <DrawerNavigator/>

    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

export default App;
