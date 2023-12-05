import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import { Detail, Delete } from './api/agent';
import AppbarOption_Page from './AppbarOptionsPage';

const Detail_Page = ({navigation,_id}) => {
    return (
        <View>
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Detail" />
            <Appbar.Action icon="dots-vertical" onPress={() => navigation.navigate('AppbarScreen')} />
        </Appbar.Header>
        <View>
            <View style={{flexDirection: 'row'}}> <Text variant="bodyLarge">Service name: </Text><Text variant="labelSmall">dad</Text></View>
            <View style={{flexDirection: 'row'}}> <Text variant="bodyLarge">Price: </Text><Text variant="labelSmall">dad</Text></View>
            <View style={{flexDirection: 'row'}}> <Text variant="bodyLarge">Creator: </Text><Text variant="labelSmall">dad</Text></View>
            <View style={{flexDirection: 'row'}}> <Text variant="bodyLarge">Created: </Text><Text variant="labelSmall">dad</Text></View>
            <View style={{flexDirection: 'row'}}> <Text variant="bodyLarge">Updated:</Text><Text variant="labelSmall">dad</Text></View>
        </View>
        </View>
    );
};
export default Detail_Page;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#307ecc',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});