import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { Colors, FontSizes} from '../utils/utils';

import MyShiftItem from '../components/MyShiftItem';
import Title from '../components/Title';

import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../redux/slice';

const App = ({navigation}) => {

    let List = useSelector((item) => item.ShiftsList.Shifts);
    console.log(List.length);
    return (
        <SafeAreaView style={{flex:1,backgroundColor:Colors.grey5}}>
        <Title/>
        <MyShiftItem/>
        <MyShiftItem/>
        <Title/>
        <MyShiftItem/>
        <MyShiftItem/>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

});


export default App;
