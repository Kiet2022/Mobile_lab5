import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableHighlight, Text, Image, ScrollView, TextInput, Button, TouchableOpacity} from 'react-native';
import Style from './Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddServicePage =() =>{
    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState(0);
    const [errors, setErrors] = useState({});

    
    async function Submit() {
        const value = await AsyncStorage.getItem('token');
        console.log(value);
        await fetch('https://kami-backend-5rs0.onrender.com/services', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${value}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                price: price,
            }),
        })
            .then(res => res.json())
            .then( async data => {
                 console.log(data)
                 await navigation.navigate('Home')
            })
            .catch(error => { console.log(error) });
        Alert.alert('Add successfully');
    }

    useEffect(() =>{
        let errors = "";

        if(!serviceName){
            errors += "Please input the new service name!\n"
        }

        if(!servicePrice){
            errors += "Please input the price of service!\n"
        }

        if(serviceName.length <3 || serviceName.length>24 ){
            errors += "Service name should be have at least 3 and maximum 24 characters!\n"
        }
        setErrors(errors)
    },[serviceName, servicePrice]);

    return (


        <View style={styles.container}>
            <Text style={styles.title}>Service Name*</Text>
            <TextInput style={styles.input} placeholder='Input a service name'></TextInput>

            <Text style={styles.title}>Price*</Text>
            <TextInput style={styles.input} ></TextInput>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>

            <Text style={styles.errorNotify}>{errors.toString()}</Text>
        </View>
    );
};

export default AddServicePage;