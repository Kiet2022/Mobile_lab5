import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, ScrollView, FlatList } from 'react-native';
import styles from './Styles';
import { Button } from "react-native-paper";


const HomePage = ({navigation}) => {
    const [data, setData] = useState([])
    const filePath = 'https://kami-backend-5rs0.onrender.com/services';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('NetWork response was not ok')
                }
                return response.json();
            })
            .then((d) => {
                console.log(d);              
                setData(d);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const Item = ({ title }) => (
        <View>
            <Text >{title.name}</Text>
            <Text >{title.price}</Text>            
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Huyen Trinh</Text>
            <Text>Danh sach cac dich vu</Text>
            <Button style={styles.button}
                    title="+"
                    onPress={() => navigation.navigate('Services')}/>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item title={item} />}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    );
};
export default HomePage;