import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform} from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { useState, useContext } from 'react'
import {useNavigation} from '@react-navigation/native'
import { AuthContext } from '../contexts/auth'









export default function SignIn() {
const navigation = useNavigation()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleLogin (){
    
  }

  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      >
        <Image style={styles.logo}
        source={require('../assets/Logo.png')}
        />

        <View style={styles.imputArea}>
          <TextInput style={styles.imput}
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='none'
          value={email}
          onChangeText={(text)=> setEmail(text)}
          />
        </View>

        <View style={styles.imputArea}>
          <TextInput style={styles.imput}
          placeholder='Senha'
          autoCorrect={false}
          autoCapitalize='none'
          value={password}
          onChangeText={(text)=> setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.submitButton}
        onPress={handleLogin}
        >
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link}
        onPress={()=> navigation.navigate('SignUp')}
        >
          <Text style={styles.linkText}>Criar uma conta</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#EEE',

  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    marginBottom:15
  },
  imputArea:{
    flexDirection:'row'
  },
  imput:{
    backgroundColor: '#FFF',
    width: 390,
    fontSize:17,
    color:'#000',
    marginBottom:15,
    padding:10,
    borderRadius:7,

  },
  submitButton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#00B94A',
    width:390,
    height:45,
    borderRadius:7,
    marginTop: 10
  },
  submitText:{
    fontSize:20,
    color: '#000'
  },
  link:{
    marginTop:10,
    marginBottom:10
  },
  linkText:{
    color:'#000'
  },

})