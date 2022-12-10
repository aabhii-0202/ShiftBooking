import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Colors, FontSizes} from '../utils/utils';

export const CancelBtn = (props) => {
    return (
        <TouchableOpacity style={{...styles.container,borderColor:Colors.red2}} onPress={props.click}>
            <Text style={{...styles.text,color:Colors.red1,}}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export const BookBtn = (props) => {
    return (
        <TouchableOpacity style={{...styles.container,borderColor:Colors.green2}} onPress={props.click}>
            <Text style={{...styles.text,color:Colors.green1,}}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export const DissabledBtn = (props) => {
    return (
        <TouchableOpacity style={{...styles.container,borderColor:Colors.grey2}} onPress={props.click}>
            <Text style={{...styles.text,color:Colors.grey2}}>{props.text}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    text:{
        fontSize:FontSizes.h4,
        fontWeight:'500',
        alignSelf:'center',
    },
    container: {
        borderWidth:2,
        paddingHorizontal:28,
        paddingVertical:8,
        alignSelf:'baseline',
        alignItems:'center',
        borderRadius:24,
    },
});
