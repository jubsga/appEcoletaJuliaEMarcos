import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';

import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';

import Routes from './src/route';
// import Home from './src/pages/Home';
import Home from './src/pages/Home';

export default function App(){
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return<AppLoading/>
  } else{
    return(
      <>
      <StatusBar style="dark" backgroundColor="transparent" translucent/>
      <Routes/>
      </>
    );
  }
} 