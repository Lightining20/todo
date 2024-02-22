import React, { useContext, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Alltask from '../screens/AllTask';
import { TabBarNavigationScreens } from '../types/navigation';
import CompeleteTask from '../screens/CompleteTask';
import IncompleteTask from '../screens/IncompleteTask';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme';
import { AppContext } from '../context/AppDataProvider';
import InputModel from '../components/inputModel/InputModel';
import { CustomDatePicker } from '../components';

const Tab = createMaterialTopTabNavigator<TabBarNavigationScreens>();

const TabBarNavigation = () => {
  const [modalState,setModalState]=useState<boolean>(false)

  return (
    <View style={styles.container}>
      <CustomDatePicker />
      <View style={styles.tabContainer}>
        <Tab.Navigator>
          <Tab.Screen name="All" component={Alltask} />
          <Tab.Screen name="complete" component={CompeleteTask} />
          <Tab.Screen name="Incomplete" component={IncompleteTask} />
        </Tab.Navigator>
      </View>
      <TouchableOpacity onPress={()=>setModalState(true)} style={styles.createBtn}>
        <Text style={styles.createBtnTxt}>Create Task</Text>
      </TouchableOpacity>
      <InputModel modalState={modalState}  setModalState={setModalState} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
  createBtn: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -50 }], 
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.PRIMARY,
  },
  createBtnTxt: {
    color: COLORS.WHITE_100,
  },
});

export default TabBarNavigation;
