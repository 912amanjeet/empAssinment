import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image,Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import styles from '../employeeListScreen/style'
import constanst from '../../constants/constanst';

const EmployeeListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const initialEmployees = useSelector((state) => state.employeeReducer.employees);
  const [employees, setEmployees] = useState([]);
  const [isDescending, setIsDescending] = useState(false); // Initially, set to ascending
  const [favoriteEmployees, setFavoriteEmployees] = useState([]);


  // Sort employees by first name and last name
  useEffect(() => {
    const sortedEmployees = [...initialEmployees].sort((a, b) => {
      const fullNameA = `${a.firstName} ${a.lastName}`;
      const fullNameB = `${b.firstName} ${b.lastName}`;
      const comparison = fullNameA.localeCompare(fullNameB);
      return isDescending ? -comparison : comparison;
    });
    setEmployees(sortedEmployees);
  }, [initialEmployees, isDescending]);


  // for loadfavrouitre employe which is already marked favrouite
  useEffect(() => {
    const loadFavoriteEmployees = async () => {
      try {
        const savedFavorites = await AsyncStorage.getItem('favoriteEmployees');
        if (savedFavorites) {
          setFavoriteEmployees(JSON.parse(savedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorite employees:', error);
      }
    };

    loadFavoriteEmployees();
  }, []);

    // for updatefavrouiteemployee 
  useEffect(() => {
    const saveFavoriteEmployees = async () => {
      try {
        await AsyncStorage.setItem('favoriteEmployees', JSON.stringify(favoriteEmployees));
        dispatch({ type: 'UPDATE_FAVORITE_EMPLOYEES', payload: favoriteEmployees });
      } catch (error) {
        console.error('Error saving favorite employees:', error);
      }
    };
    saveFavoriteEmployees();
  }, [favoriteEmployees,dispatch]);

/// function for opening drawer
  const openDrawer = () => {
navigation.openDrawer()
  };

    // Define a function to extract initials from the employee's full name
    const getInitials = (name) => {
      const nameArray = name.split(' ');
      return nameArray.map((word) => word[0]).join('').toUpperCase();
    };
  
    //Toggle the sorting order
    const toggleSortingOrder = () => {
      setIsDescending(!isDescending);
    };
    // function for navigate to addemployeescreen
    const navigateToAddEmployee = () => {
      navigation.navigate('AddEmployeeScreen');
    };
 
  // Define a function to render each item in the FlatList
  const renderItem = ({ item }) => {
    /////// function for favrouite employee 
    const toggleFavorite = () => {
      setFavoriteEmployees(prevFavorites => {
        if (prevFavorites.includes(item.id)) {
          return prevFavorites.filter(id => id !== item.id);
        } else {
          return [...prevFavorites, item.id];
        }
      });
    };
  const isEmployeeFavorite = () => {
    return favoriteEmployees.includes(item.id);
  };
    return(
    <View style={styles.flatlistMainView}>
      <View style={styles.flatlistCardStyle}>
        <Text style={styles.circleText}>{getInitials(`${item.firstName} ${item.lastName}`)}</Text>
      </View>
      <View style={styles.informationView}>
     
        <Text style={styles.infoText}>{constanst.NAME} {item.firstName} {item.lastName}</Text>
        <Text style={styles.infoText}>{constanst.JOB_TITLE} {item.jobTitle}</Text>
      </View>
      <TouchableOpacity  style={styles.starTouchableStyle} onPress={() => toggleFavorite(item.id)}>
      <Image source={isEmployeeFavorite(item.id) ? require("../../assets/starYellow.png") : require("../../assets/star.png")} />
      </TouchableOpacity>
    </View>
  );
  }

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.mainContainer}>
        <View style={styles.headerMainstyle}>
            <TouchableOpacity onPress={openDrawer} style={styles.menuTouchable}>
          <Image source={require("../../assets/menu.png")}/>
    
            </TouchableOpacity>
            <View style={styles.dotTouchable}>
                  <TouchableOpacity onPress={toggleSortingOrder} >
                    <Text style={styles.sortText}>{constanst.SORT}</Text>
          
          </TouchableOpacity>
          <Image source={require("../../assets/dots.png")}/>
          </View>
        </View>
      
        <FlatList
   
          data={employees}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} 
          showsVerticalScrollIndicator={false}
          style={{marginBottom:"10%"}}
        />


           <TouchableOpacity onPress={navigateToAddEmployee} style={styles.addEmployeeTouchable}>
            <Text style={styles.buttonText}>{constanst.ADD_EMPLOYEE}</Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmployeeListScreen;
