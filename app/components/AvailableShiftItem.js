import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
    TouchableOpacity,
} from 'react-native';
const moment = require('moment');
import { Colors, FontSizes} from '../utils/utils';

import {CancelBtn,BookBtn,DissabledBtn} from '../components/Buttons';

const App = ({data,click,can}) => {

    const Btn = (type,id) => {
        if (type === 1){
            return (
                <BookBtn text="Book" click={click}/>
            );
        }
        else if (type === 2){
            return (
                <CancelBtn text="Cancel" click={can}/>
            );
        }
        return (
            <DissabledBtn text="Book"/>
        );
    };

    let btntyp = 1;
    if (data.booked) {btntyp = 2;}

    const start = moment.unix(data.startTime).format('HH:MM');
    const end = moment.unix(data.endTime).format('HH:MM');

    return (
        <View style={styles.container}>
            <Text style={styles.t1}>{start} - {end}</Text>
            <View style={{flexDirection:'row'}}>
                {   data.booked ?
                    <Text style={{...styles.t2, color:Colors.grey1,}}>Booked</Text>
                    : null
                }
                {Btn(btntyp, data.id)}
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
