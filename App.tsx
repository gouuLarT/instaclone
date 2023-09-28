import { View, StatusBar } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
import { Routes } from './src/routes';
import LoadingIndicator from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = Font.useFonts({})

  return (
    <View style={{ flex: 1}}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content' />
        {fontsLoaded ? <Routes/> : <LoadingIndicator />}
    </View>
  );
}
 


