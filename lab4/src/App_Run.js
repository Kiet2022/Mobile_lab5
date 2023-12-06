import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {
    Text
} from 'react-native';

import Login_Page from './LoginPage';
import AddSer_Page from './AddPage';
import DetailSer_Page from './DetailPage';
import EditSer_Page from './EditPage';
import Home_Page from './HomePage';
import AppbarOption_Page from './AppbarOptionsPage';

const Stack = createStackNavigator();
const Transaction = () => <Text>Music</Text>;
const Customer = () => <Text>Albums</Text>;
const Setting = () => <Text>Recents</Text>;


function HomeScreens() {
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={MyTabs}
            />
            <Stack.Screen
                name='AddService'
                component={AddSer_Page}
            />
            <Stack.Screen
                name='DetailService'
                component={DetailScreen}
            />
        </Stack.Navigator>
    )
}

function AppbarOptionScreen() {
    return (
        <Stack.Navigator
            initialRouteName='AppbarOptionScreen'
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='AppbarOption'
                component={AppbarOption_Page}
            />
            <Stack.Screen
                name="UpdateService"
                component={EditSer_Page}
            />

        </Stack.Navigator>
    )
}
function DetailScreen() {
    return (
        <Stack.Navigator
            initialRouteName='DetailScreen'
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Detail'
                component={DetailSer_Page}
            />
            <Stack.Screen
                name="AppbarScreen"
                component={AppbarOptionScreen}
            />
        </Stack.Navigator>
    )
}



const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen_Run'
            barStyle={{ backgroundColor: "blue" }}

        >
            <Tab.Screen 
                name="Home"
                component={Home_Page}
                options={{
                    tabBarIcon: 'home',
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Transaction}
                options={{
                    tabBarIcon: 'home',
                }}
            />
            <Tab.Screen
                name="Customer"
                component={Customer}
                options={{
                    tabBarIcon: 'home',
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: 'home',
                }}
            />
        </Tab.Navigator>
    )
}
function App_Run() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="AppScreen"
                activeColor="#e91e63"
                labelStyle={{ fontSize: 12 }}
                style={{ backgroundColor: 'tomato' }}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='LoginScreen'
                    component={Login_Page}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreens}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App_Run;