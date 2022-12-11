import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,FlatList,
    Text, TextInput, View, Keyboard,
TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Colors, FontSizes} from '../utils/utils';

import MyShiftItem from '../components/MyShiftItem';
import Title from '../components/Title';

import { getShift,cancelShift } from '../api/shiftsapi';

import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../redux/slice';

const App = ({navigation}) => {

    // let List = useSelector((item) => item.ShiftsList.Shifts);
    // console.log(List.length);


    const [loading,setLoading] = useState(false);
    const [list,setList] = useState([])

    useEffect(()=>{
        const getShifts = async () =>{
            setLoading(true);
            const res = await getShift();
            if (res && res.length > 0) {
                let myShifts = res.filter((item)=>{
                    return  item.booked;
                });

                setList(myShifts);
            }
            setLoading(false);
        };
        getShifts();
    },[]);

    const cancelShift = (id) => {
        setLoading(true);
        const res = cancelShift(id);
        setLoading(false);
    };


    return (
        <SafeAreaView style={{flex:1,backgroundColor:Colors.grey5}}>
            <Spinner
                visible={loading}
                textContent={'Please Wait...'}
                textStyle={{ color: '#FFF' }}
            />
            {
                list.length > 0 ?
                <FlatList
                data={list}
                renderItem={({item})=>{
                    return (
                        <MyShiftItem data={item}/>
                    );
                }}
                /> : null
                // <Text style={styles.noShift}>No Booked Shifts for now</Text>
            }
        <ScrollView>
            <Title text1="Today" text2="2 shifts, 4 h"/>
            <MyShiftItem/>
            <MyShiftItem/>
            <Title text1="Tomorrow" text2="3 shifts, 6 h"/>
            <MyShiftItem t={1}/>
            <MyShiftItem t={1}/>
            <Title text1="December 13" text2="1 shifts, 6 h"/>
            <MyShiftItem t={1}/>
            <MyShiftItem t={1}/>
            <Title text1="December 14" text2="2 shifts, 4 h"/>
            <MyShiftItem t={1}/>
            <MyShiftItem t={1}/>
        </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    noShift: {
        fontSize:FontSizes.h1,
        alignSelf:'center',
        marginTop:200,
        fontWeight:'bold',
        color:Colors.black,
    },
});


export default App;
