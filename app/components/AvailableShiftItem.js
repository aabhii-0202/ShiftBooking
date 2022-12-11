import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
    TouchableOpacity,
} from 'react-native';

import { Colors, FontSizes} from '../utils/utils';

import {CancelBtn,BookBtn,DissabledBtn} from '../components/Buttons';


const App = ({data}) => {

    const Btn = (type) => {
        if (type === 1){
            return (
                <BookBtn text="Book"/>
            );
        }
        else if (type === 2){
            return (
                <CancelBtn text="Cancel"/>
            );
        }
        return (
            <DissabledBtn text="Book"/>
        );
    };

    let btntyp = 1;
    if (data.booked) {btntyp = 2;}

    return (
        <View style={styles.container}>
            <Text style={styles.t1}>14:00-16:00</Text>
            <View style={{flexDirection:'row'}}>
                {   data.booked ?
                    <Text style={{...styles.t2, color:Colors.grey1,}}>Booked</Text>
                    : null
                }
                {Btn(btntyp)}
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
        alignSelf:'center',
    },
    t2:{
        fontSize:FontSizes.h4,
        alignSelf:'center',
        marginRight:12,
        fontWeight:'500',
    },
});


export default App;
