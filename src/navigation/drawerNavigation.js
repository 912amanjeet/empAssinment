// DrawerNavigator.js
// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import EmployeeListScreen from "../screens/employeeListScreen"; // Assuming this is in the same directory
// import AppNavigation from '../navigation/index';

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {



//   return (
//     <Drawer.Navigator screenOptions={{  headerShown: false,}}>
//       <Drawer.Screen name="Employee" component={AppNavigation} />

//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;

// DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EmployeeListScreen from "../screens/employeeListScreen";
import AppNavigation from '../navigation/index';
import CustomDrawerContent from "../navigation/customDrawer"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="Employee"
        component={AppNavigation}
        options={{
          drawerLabel: 'Employee',
          drawerContent: ({ navigation }) => (
            <CustomDrawerContent navigation={navigation} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

