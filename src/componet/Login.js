import React, {useState} from 'react'
import NavBar from './Navbar'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'
import "./Style.css";


function LoginComponet() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((cred)=>{
            return cred.user.getIdToken()
        }).then((token)=>{
            localStorage.setItem('token', token)
            window.location.replace('/home')
        })
  }
    return (
        <div className='body'>
        <NavBar />
        <div className='content'>
        <form className='form-login'>
            <h1>Logga in</h1>
            <input placeholder='E-post eller telefonnummer' onChange={({target})=>{
                setEmail(target.value)
            }} />
            <input placeholder='Lösenord' onChange={({target})=>{
                setPassword(target.value)
            }} />
            <button onClick={handleSubmit} className="signin-button" type='submit'>Logga in</button>
            <div className='checkbox'>
                <input type='checkbox'/><p>Kom ihåg mig</p><p>Behöver du hjälp?</p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default LoginComponet