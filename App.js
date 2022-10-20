import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/routes'
import {NavigationContainer} from '@react-navigation/native'
import AuthProvider from './src/contexts/auth'

export default function App() {

  
  return (
    <NavigationContainer>
      
      
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      
  
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({})