import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image,Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const EmployeeListScreen = (props) => {

  const navigation = useNavigation();
    const employeeCount = useSelector((state) => state.employeeReducer.employees.length);
  
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
  useEffect(() => {
    const saveFavoriteEmployees = async () => {
      try {
        await AsyncStorage.setItem('favoriteEmployees', JSON.stringify(favoriteEmployees));
      } catch (error) {
        console.error('Error saving favorite employees:', error);
      }
    };

    saveFavoriteEmployees();
  }, [favoriteEmployees]);

  const openDrawer = () => {
navigation.openDrawer()
  };
 
  // Define a function to render each item in the FlatList
  const renderItem = ({ item }) => {
    console.log("itemtoggle",item,item.id)
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
    <View style={{ width: '90%',height:70, alignSelf: 'center', marginTop: '3%', flexDirection: 'row',alignItems:"center" ,borderRadius:10, shadowColor: '#000',backgroundColor:"white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,}}>
      <View style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>{getInitials(`${item.firstName} ${item.lastName}`)}</Text>
      </View>
      <View style={{ marginLeft: 10 }}>
     
        <Text>Name: {item.firstName} {item.lastName}</Text>
        <Text>Job Title: {item.jobTitle}</Text>
      </View>
      <TouchableOpacity  style={{position:"absolute",right:10}} onPress={() => toggleFavorite(item.id)}>
      <Image source={isEmployeeFavorite(item.id) ? require("../assets/starYellow.png") : require("../assets/star.png")} />
      </TouchableOpacity>
    </View>
  );
  }
  // Define a function to extract initials from the employee's full name
  const getInitials = (name) => {
    const nameArray = name.split(' ');
    return nameArray.map((word) => word[0]).join('').toUpperCase();
  };

  // Toggle the sorting order
  const toggleSortingOrder = () => {
    setIsDescending(!isDescending);
  };
  const navigateToAddEmployee = () => {
    navigation.navigate('AddEmployeeScreen'); // Replace 'AddEmployeeListScreen' with the actual screen name
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{height:100,backgroundColor:"green"}}>
            <TouchableOpacity onPress={openDrawer}>
            <Text>Open Drawer</Text>
  
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Employee Count: {employeeCount}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Favourite Count: {favoriteEmployees.length}</Text>
          <TouchableOpacity onPress={toggleSortingOrder}>
            <Text>{isDescending ? 'Sort Ascending' : 'Sort Descending'}</Text>
          </TouchableOpacity>
            </TouchableOpacity>
        </View>

       
         
   
        <FlatList
        contentContainerStyle={{bottom:20}}
          data={employees}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} 
          showsVerticalScrollIndicator={false}
        />
           <TouchableOpacity onPress={navigateToAddEmployee} style={{ width:"40%", height: 40,backgroundColor:"green",alignSelf:"center",alignItems:"center",justifyContent:"center"}}>
            <Text>Add Employee</Text>
            </TouchableOpacity>
      </View>
   
    </SafeAreaView>
  );
};

export default EmployeeListScreen;
