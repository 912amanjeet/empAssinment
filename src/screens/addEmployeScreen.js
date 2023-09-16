// AddEmployeeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button ,SafeAreaView, TouchableOpacity,Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../actions/addEmployeeAction';
import uuid from 'react-native-uuid';

const AddEmployeeScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  const dispatch = useDispatch();

  const saveEmployee = () => {
    if (!firstName || !jobTitle ) {
        alert('Please fill in all mandfields before saving.');
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
   <SafeAreaView style={{flex:1}}>
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <TextInput style={{width:"60%",height:40,borderBottomWidth:1,borderBottomColor:"green"}}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput style={{width:"60%",height:40,borderBottomWidth:1,borderBottomColor:"green"}}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput style={{width:"60%",height:40,borderBottomWidth:1,borderBottomColor:"green"}}
        placeholder="Job Title"
        value={jobTitle}
        onChangeText={(text) => setJobTitle(text)}
      />
      <TextInput style={{width:"60%",height:40,borderBottomWidth:1,borderBottomColor:"green"}}
        placeholder="Salary"
        value={salary}
        onChangeText={(text) => setSalary(text)}
      />
   
      <TouchableOpacity  style={{width:"70%",height:40,backgroundColor:"green",marginTop:"10%",alignItems:"center",justifyContent:"center"}}onPress={saveEmployee}><Text>Save</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default AddEmployeeScreen;
