import React from 'react';
const moment = require('moment');
import {StyleSheet,Text, View} from 'react-native';
import { Colors, FontSizes} from '../utils/utils';
import {CancelBtn,DissabledBtn} from '../components/Buttons';


const App = ({data,t,click}) => {

    const Btn = (type) => {
        if (type === 1){
            return (
                <CancelBtn text="Cancel" click={click}/>
            );
        }
        return (
            <DissabledBtn text="Cancel"/>
        );
    };

    const start = moment.unix(data.startTime).format('HH:MM');
    const end = moment.unix(data.endTime).format('HH:MM');

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.t1}>{start} - {end}</Text>
                <Text style={styles.t2}>{data.area}</Text>
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
