import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
    TouchableOpacity,
} from 'react-native';

import { Colors, FontSizes} from '../utils/utils';

import {CancelBtn,DissabledBtn} from '../components/Buttons';


const App = ({data,t}) => {

    const Btn = (type) => {
        if (type === 1){
            return (
                <CancelBtn text="Cancel"/>
            );
        }
        return (
            <DissabledBtn text="Cancel"/>
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.t1}>14:00-16:00</Text>
                <Text style={styles.t2}>Helsinki</Text>
            </View>
            <View>
                {Btn(t)}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:24,
        paddingVertical:12,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:Colors.grey2,
        backgroundColor:Colors.white,
    },
    t1:{
        fontSize:FontSizes.h1,
        color:Colors.grey1,
    },
    t2:{
        fontSize:FontSizes.h5,
        color:Colors.grey2,
    },
});


export default App;
