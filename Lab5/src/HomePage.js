import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, TouchableHighlight, Text, Image} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const HomePage=()=>{


    return(
        <View>
            <MyTabs/>
        </View>
    );
};

export default HomePage;