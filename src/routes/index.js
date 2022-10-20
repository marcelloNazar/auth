import React  from 'react'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'


export default function index() {
const {signed} = useContext(AuthContext)

  return (

    signed? <AppRoutes/> : <AuthRoutes/>
  
  )
}

