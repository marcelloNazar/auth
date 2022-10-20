import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform} from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { useState, useContext } from 'react'











export default function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()


  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      >

        <View style={styles.imputArea}>
          <TextInput style={styles.imput}
          placeholder='Nome'
          autoCorrect={false}
          autoCapitalize='none'
          value={name}
          onChangeText={(text)=> setName(text)}
          />
        </View>


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
        

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Cadastrar</Text>
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