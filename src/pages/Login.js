import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import LoginComponet from '../componet/Login';



function Login() {
  const FBtoken = localStorage.token
  const history = useHistory()
  const checkIfUserIsLoggedIn = ()=>{
    if(FBtoken){
      history.push('/browse')
    }else{
      return
    }
  }
  useEffect(()=>{
    checkIfUserIsLoggedIn()
  }, [])
  return (
    <LoginComponet/>
  )
}

export default Login