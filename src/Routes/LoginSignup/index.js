import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../../Pages/Login'
import ForgetPassword from '../../Pages/ForgetPassword'
import SignUp from '../../Pages/SignUp'

const LoginSignup = ({setJWTAuthentication}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login setJWTAuthentication={setJWTAuthentication}/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/*' element={<Navigate to={'/'} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default LoginSignup