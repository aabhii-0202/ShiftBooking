import React from 'react';

import {
    StyleSheet,
    Text,View,
} from 'react-native';
import { Colors, FontSizes} from '../utils/utils';


const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.t1}>Today</Text>
            <Text style={styles.t2}>2 shifts, 4 h</Text>
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
