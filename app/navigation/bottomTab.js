/* eslint-disable*/
import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,Dimensions,
    TouchableOpacity,Platform,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AvailableShifts from '../Screens/AvailableShifts';
import MyShift from '../Screens/Myshifts';

import { Colors, FontSizes} from '../utils/utils';

const Tab = createBottomTabNavigator();
const App = ({navigation}) => {

    

    const windowWidth = Dimensions.get('window').width
    const tabBarHeight = () => {
        if (Platform.OS == 'ios') {
            if (windowWidth < 500) return 100
            else return '8%'
        }
        else {
            return '8%'
        }
    }

    return (
        <Tab.Navigator
        initialRouteName="MyShift"
        screenOptions={({ route }) => ({
            tabBarLabelPosition: "beside-icon",
            tabBarStyle: {
                height: tabBarHeight(),
                backgroundColor:Colors.grey5,
            },
            tabBarIconStyle: { display: "none" },
            tabBarLabelStyle: {
                fontSize: 18,
                marginRight:18
            },
        })}>
            <Tab.Screen name="My Shift" component={MyShift} options={{headerShown: false, headerTitleAlign: 'center', headerShadowVisible: false, headerStyle: { height: 70 } }}/>
            <Tab.Screen name="Available Shifts" component={AvailableShifts} options={{headerShown: false, headerTitleAlign: 'center', headerShadowVisible: false, headerStyle: { height: 70 } }}/>
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({

});


export default App;
