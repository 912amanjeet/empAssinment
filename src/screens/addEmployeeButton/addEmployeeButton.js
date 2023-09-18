import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../addEmployeeButton/styles'
import constanst from '../../constants/constanst';

const AddEmployeeButton =()=>{
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('AddEmployeeScreen'); 
      };
    
  return(
    <SafeAreaView  style={styles.safeAreaViewStyle}>
     <View style={styles.mainView}>
     <TouchableOpacity style={styles.addEmployeeButton} onPress={handleNavigate} >
     <Text style={styles.addEmployeeText}>{constanst.ADD_EMPLOYEE}</Text>
     </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default AddEmployeeButton;
