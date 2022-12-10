/* eslint-disable*/
import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,Dimensions,
    TouchableOpacity,Platform,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../redux/slice';

import AvailableShifts from '../Screens/AvailableShifts';
import MyShift from '../Screens/Myshifts';


const Tab = createBottomTabNavigator();
const App = ({navigation}) => {

    let List = useSelector((item) => item.ShiftsList.Shifts);
    console.log(List.length);

    const windowWidth = Dimensions.get('window').width
    const tabBarHeight = () => {
        if (Platform.OS == 'ios') {
            if (windowWidth < 500) return 100
            else return '8%'
        }
        else {
            return '10%'
        }
    }

    return (
        <Tab.Navigator
        initialRouteName="MyShift"
        screenOptions={({ route }) => ({
                    
            tabBarLabelPosition:'below-icon',
            tabBarStyle: { height: tabBarHeight() },
            tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: 'OpenSans-SemiBold',
                marginBottom: 7
            },
        })}>
            <Tab.Screen name="MyShift" component={MyShift} options={{ headerTitleAlign: 'center', headerShadowVisible: false, headerStyle: { height: 70 } }}/>
            <Tab.Screen name="AvailableShifts" component={AvailableShifts} options={{ headerTitleAlign: 'center', headerShadowVisible: false, headerStyle: { height: 70 } }}/>
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({

});


export default App;
