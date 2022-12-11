import React from 'react';

import {
    StyleSheet,
    Text,View,
} from 'react-native';
import { Colors, FontSizes} from '../utils/utils';


const App = ({text1, text2}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.t1}>{text1}</Text>
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
