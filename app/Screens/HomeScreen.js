import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
    TouchableOpacity,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../redux/slice';


const App = ({navigation}) => {

    let List = useSelector((item) => item.ShiftsList.Shifts);
    console.log(List.length);
    return (
        <SafeAreaView style={{flex:1}}>
        <Text>Hi</Text>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

});


export default App;
