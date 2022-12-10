import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';


const App = ({navigation}) => {


    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{paddingHorizontal:24}}>
        <Text>AvailableShifts</Text>
        </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

});


export default App;
