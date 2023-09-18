// AddEmployeeScreen.js
import React, { useState } from 'react';
import { View, TextInput ,SafeAreaView, TouchableOpacity,Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../actions/addEmployeeAction';
import styles from '../addEmployeeScreen/style'
import uuid from 'react-native-uuid';
import constanst from '../../constants/constanst';

const AddEmployeeScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  const dispatch = useDispatch();

  const saveEmployee = () => {
    if (!firstName || !jobTitle ) {
        alert(constanst.VALIDATION_MESSAGE);
        return;
      }
      const employeeId = uuid.v4();
    const employeeData = {
      id: employeeId,
      firstName,
      lastName,
      jobTitle,
      salary,
    };
    dispatch(addEmployee(employeeData));
    navigation.navigate('EmployeeListScreen');
  };

  return (
   <SafeAreaView style={styles.safeAreaViewStyle}>
    <View style={styles.mainView}>
      <Text style={styles.headingStyle}>{constanst.EMPLOYEE_DETAILS}</Text>
      <TextInput style={styles.addEmployeeTextinput}
        placeholder={constanst.PLACEHOLDER.FIRST_NAME}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput style={styles.addEmployeeTextinput}
        placeholder={constanst.PLACEHOLDER.LAST_NAME}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput style={styles.addEmployeeTextinput}
        placeholder={constanst.PLACEHOLDER.JOB_TITLE}
        value={jobTitle}
        onChangeText={(text) => setJobTitle(text)}
      />
      <TextInput style={styles.addEmployeeTextinput}
        placeholder={constanst.PLACEHOLDER.Salary}
        value={salary}
        onChangeText={(text) => setSalary(text)}
      />
   
      <TouchableOpacity  style={styles.saveTouchable}onPress={saveEmployee}>
        <Text style={styles.saveText}>{constanst.SAVE}</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default AddEmployeeScreen;
