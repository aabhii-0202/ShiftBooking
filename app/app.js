/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useEffect, useState} from 'react';
import BottomTab from './navigation/bottomTab';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = ({navigation}) => {

  return (
    <NavigationContainer>
    <Provider store = {store}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false, headerTitleStyle: { fontSize: 18, fontFamily: 'Montserrat-Medium', color: 'black' }, headerBackTitleVisible: false, headerTintColor: 'black' }}>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Provider>
    </NavigationContainer>
  );
};


export default App;
