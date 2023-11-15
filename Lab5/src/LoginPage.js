import 'react-native-gesture-handler';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import styles from './Style';


  const LoginPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>

            <TextInput style={styles.input} placeholder='Phone'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
  };
  
  export default LoginPage;