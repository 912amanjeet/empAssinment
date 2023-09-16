// actions.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addEmployee = (employeeData) => async (dispatch) => {
  try {
    // Retrieve existing data from AsyncStorage
    const existingData = await AsyncStorage.getItem('employeeData');
    const parsedExistingData = JSON.parse(existingData) || [];

    // Add the new employee data
    const updatedData = [...parsedExistingData, employeeData];

    // Save the updated data back to AsyncStorage
    await AsyncStorage.setItem('employeeData', JSON.stringify(updatedData));

    // Dispatch the action to update the Redux store
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: updatedData,
    });
  } catch (error) {
    // Handle any errors here
    console.error('Error adding employee:', error);
  }
};
