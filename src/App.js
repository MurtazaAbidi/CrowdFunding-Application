import React, { useEffect, useState } from 'react'
import './App.css'
import HomePage from './Routes/HomePage'
import LoginSignup from './Routes/LoginSignup'

const App = () => {
  const [loading, setLoading] = useState (true)
  const [JWTAuthentication, setJWTAuthentication] = useState(false)
  useEffect(()=>{
    setLoading(true)
    // ----------API CALL------------
    let API_Response = true
    // ------------------------------
    setJWTAuthentication(API_Response)
    setLoading(false)
  },[])

  return <>{loading?null:JWTAuthentication?(<HomePage/>):(<LoginSignup/>)}</>
}

export default App