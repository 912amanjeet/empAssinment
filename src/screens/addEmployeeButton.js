import React from 'react';

import {
    SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AddEmployeeButton =()=>{
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('AddEmployeeScreen'); // Navigate to the target screen
      };
    
  return(
    <SafeAreaView  style={{flex:1}}>
  <View style={{flex:1,backgroundColor:"green",alignItems:"center",justifyContent:"center"}}>
<TouchableOpacity style={{width:"50%",height:"5%",backgroundColor:"#2a6f21",alignItems:"center",justifyContent:"center"}} onPress={handleNavigate} >
    <Text style={{color:"white",fontSize:20}}>ADD EMPLOYEE</Text>
</TouchableOpacity>
  </View>
  </SafeAreaView>
  )
}

export default AddEmployeeButton;
