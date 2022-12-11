import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text, View,
    TouchableOpacity,
    FlatList,
} from 'react-native';

const moment = require('moment');
import AvailableShiftItem from '../components/AvailableShiftItem';
import TitleAvailable from '../components/TitleAvailable';

import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../redux/slice';

import { Colors, FontSizes} from '../utils/utils';

import Spinner from 'react-native-loading-spinner-overlay';
import { getShift, bookShift, cancelShift } from '../api/shiftsapi';


const App = ({navigation}) => {

    // let List = useSelector((item) => item.ShiftsList.Shifts);
    const [filters, setfilters] = useState([]);
    const [filtercount,setfiltercount] = useState([]);
    const [selected,setselected] = useState(0);
    const [mainList, setMainList] = useState([]);

    const [loading,setLoading] = useState(false);
    const [list,setList] = useState([]);

    useEffect(()=>{
        const getShifts = async () =>{
            setLoading(true);
            const res = await getShift();
            if (res && res.length > 0) {
                setMainList(res);
                // console.log(res)
                const map = new Map();
                for (let i = 0; i < res.length; i++){
                    if (map.has(res[i].area)) {
                        map.set(res[i].area, map.get(res[i].area) + 1);
                    }
                    else {
                        map.set(res[i].area, 0);
                    }
                }
                let arr1 = [];
                let arr2 = [];
                for (let [key, value] of map) {
                    arr1.push(key);
                    arr2.push(value);
                }
                setfilters(arr1);
                setfiltercount(arr2);
                const temparr = res.filter((item)=>{
                    return arr1[0] === item.area;
                });
                setList(temparr);
            }
            setLoading(false);
        };
        getShifts();
    },[]);

    const changeList = (index) => {
        const temp = mainList.filter((item)=>{
            return filters[index] === item.area;
        });

        setList(temp);
    };

    const book = async (id) => {
        setLoading(true);
        // const res = await bookShift(id);
        console.log(id);
        setLoading(false);
    };




    return (
        <SafeAreaView style={{flex:1}}>
            <Spinner
                visible={loading}
                textContent={'Please Wait...'}
                textStyle={{ color: '#FFF' }}
            />
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
                        let t = item + ' (' + filtercount[index] + ')';
                        return (
                            <TouchableOpacity onPress={()=>{
                                setselected(index);
                                changeList(index);
                            }}>
                                <Text style={{
                                    color:index === selected ? Colors.blue : Colors.grey3 ,
                                    fontSize:FontSizes.h2,
                                }}>{t}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <FlatList
            data={list}
            renderItem={({item,index})=>{
                // console.log(index)
                if (index > 0){
                    let nowdate = moment.unix(item.startTime).format('MM/DD');
                    return (
                        <View>
                            <TitleAvailable text={nowdate}/>
                            <AvailableShiftItem data = {item} click={()=> book(item.id)}/>
                        </View>
                    );
                }
            }}/>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

});


export default App;
