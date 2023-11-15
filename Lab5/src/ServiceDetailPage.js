import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, TouchableHighlight, Text, Image} from 'react-native';

const ServiceDetailPage =()=>{
    const [serviceName,setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState(0);
    const [serviceCreator, setServiceCreator] = useState('');
    const [time, setTime] = useState('');
    const [finalUpdate, setFinalUpdate] = useState('');



    return(
        <View>
            <Text>Login</Text>

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

export default ServiceDetailPage;