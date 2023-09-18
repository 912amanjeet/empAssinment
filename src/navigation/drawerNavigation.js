import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import AppNavigation from './appNavigation';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import constanst from '../constants/constanst';
import styles from '../navigation/styles'
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const employeeCount = useSelector((state) => state.employeeReducer.employees.length);
   const favoriteEmployees = useSelector((state) => state.employeeReducer.favoriteEmployees.length);
console.log("fav",favoriteEmployees)
  const CustomDrawer = () => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.drawerText}>{constanst.EMP_COUNT} {employeeCount}</Text>
          <Text style={styles.drawerText}>{constanst.FAV_EMP_COUNT} {favoriteEmployees}</Text>
        </DrawerContentScrollView>
      </View>
    )
  }



  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, swipeEnabled: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Employee" component={AppNavigation} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;