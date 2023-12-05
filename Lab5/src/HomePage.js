import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Button, FAB } from "react-native-paper";
import styles from "./Styles";
import List from './api/agent';
import Add_Page from './AddPage';


const Home_Page = ({navigation}) => {
    const [data, setData] = useState([])
    setData(List());

    const Item = ({ title }) => (
        <View>
        <TouchableOpacity  onPress={() => navigation.navigate('Detail_Page')}>
            <Text >{title.name}</Text>
            <Text >{title.price}</Text>
        </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text >SERVICES</Text>
                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => navigation.navigate('Add_Page')}
                />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item title={item} />}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
        // </ScrollView>
    );
};
export default Home_Page;

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
})