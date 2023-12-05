import React, { useState, useEffect } from "react";
import styles from './Styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from "react-native";

const [data, setData] = useState([])

const ServiceDetail = () => {
    async function Details() {
        const value =await AsyncStorage.getItem('token');
        console.log(value)
        useEffect(async () => {
           await fetch('https://kami-backend-5rs0.onrender.com/services/{id}')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((d) => {
                    setData(d)
                })
                .catch((error)=> {
                    console.error('Error fetching data:', error);
                }
                )
        }
        )
    }
    return(
        <View style={styles.container}>
            <Text>Service name:</Text>
            <Text>Price:</Text>
            <Text>Time:</Text>
            <Text>Creator: </Text>
            <Text>Final update: </Text>
        </View>
    );
};
export default ServiceDetail;