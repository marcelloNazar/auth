import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createContext, useState } from 'react'


export const AuthContext = createContext({})


export default function AuthProvider({children}) {
    const [user, setUser] = useState({
        name: 'matheus'
    })

  return (
    <AuthContext.Provider value={{signed: !!user , user}} >
        {children}
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({})