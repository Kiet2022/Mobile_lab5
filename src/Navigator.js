import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import AddServicePage from './AddServicePage';

const Stack = createStackNavigator();

function LoginScreens() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
        >
            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
            
            />
             <Stack.Screen
                name="HomeScreen"
                component={MyTabs}
                
            />
            
        </Stack.Navigator>
    )
}
function HomeScreen_Run(){
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
            screenOptions={{
                headerShown: false
            }}
>
            <Stack.Screen 
            name="Home"
            component={HomePage}
            />
            <Stack.Screen
            name="Services"
            component={AddServicePage}/>

        </Stack.Navigator>
    )
}


const Tab = createMaterialBottomTabNavigator();
function MyTabs(){
    return (
        <Tab.Navigator
        initialRouteName='HomeScreen_Run'
         barStyle= {{backgroundColor : "blue"}}
        >
        <Tab.Screen name ="Home"
         component={HomeScreen_Run}
         options={{
            tabBarIcon: 'format-list-bulleted',
         }}
/>
<Tab.Screen
name="Transaction"
component={AddServicePage}
/>
<Tab.Screen
name="Customer"
component={HomePage}
/>
<Tab.Screen
name="Setting"
component={HomePage}
/>
        </Tab.Navigator>
    )
}
 const App_run =()=> {
    return (
        <NavigationContainer>
            <LoginPage/>
        </NavigationContainer>
    );
}
export default App_run;