import React from 'react';

import {
    StyleSheet,
    Text,View,
} from 'react-native';
import { Colors, FontSizes} from '../utils/utils';


const App = ({text1, text2}) => {


    const month = (num) => {
        const map = new Map();
        map.set('01', 'January');
        map.set('02', 'February');
        map.set('03', 'March');
        map.set('04', 'April');
        map.set('05', 'May');
        map.set('06', 'June');
        map.set('07', 'July');
        map.set('08', 'August');
        map.set('09', 'September');
        map.set('10', 'October');
        map.set('11', 'November');
        map.set('12', 'December');

        return map.get(num.substring(3));
    };

    let date;
    date = month(text1) + ' ' + text1.substring(0,2);


    return (
        <View style={styles.container}>
            <Text style={styles.t1}>{date}</Text>
            <Text style={styles.t2}>{text2}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:32,
        paddingVertical:12,
        justifyContent:'flex-start',
        backgroundColor:Colors.grey5,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:Colors.grey2,
    },
    t1:{
        fontWeight:'600',
        color:Colors.grey1,
        fontSize:FontSizes.h1,
    },
    t2:{
        color:Colors.grey2,
        fontSize:FontSizes.h2,
        alignSelf:'center',
        marginStart:20,
    },
});


export default App;
