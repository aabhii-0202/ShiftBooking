import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';

import AvailableShiftItem from '../components/AvailableShiftItem';
import TitleAvailable from '../components/TitleAvailable';

import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../redux/slice';

import { Colors, FontSizes} from '../utils/utils';


const App = ({navigation}) => {

    let List = useSelector((item) => item.ShiftsList.Shifts);
    console.log(List.length);
    const filters = ['Helsinki(5)', 'Tampere(8)', 'Turku(5)'];
    const [selected,setselected] = useState(0);


    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-around',
                paddingVertical:24,
                backgroundColor:Colors.white,
                borderBottomColor:Colors.grey2,
                borderBottomWidth:1,
            }}>
                {
                filters.map((item,index) =>{
                    console.log(index);
                    return (
                        <TouchableOpacity onPress={()=>{
                            setselected(index);
                        }}>
                            <Text style={{
                                color:index === selected ? Colors.blue : Colors.grey3 ,
                                fontSize:FontSizes.h2,
                            }}>{item}</Text>
                        </TouchableOpacity>
                    );
                })
                }
            </View>
        <ScrollView>
            <TitleAvailable/>
            <AvailableShiftItem/>
        </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

});


export default App;
