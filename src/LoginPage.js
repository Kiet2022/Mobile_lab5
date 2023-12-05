import 'react-native-gesture-handler';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import styles from './Style';
  import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

  const LoginPage = ({navigation}) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    async function LoginAcc() {
        await fetch('https://kami-backend-5rs0.onrender.com/auth', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: '0373007856',
                password: '123'
            })
        })
            .then(response => response.json())
            .then(async data => {
                    console.log(data);
                    await AsyncStorage.setItem('token',data.token);
                    await navigation.navigate('HomeScreen');
            }
            )
            .catch(error => console.error(error));
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>

            <TextInput style={styles.input} placeholder='Phone'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={LoginAcc()}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
  };
  
  export default LoginPage;