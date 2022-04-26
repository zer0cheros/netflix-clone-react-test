import React from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'

function Content() {
  return (
    <div className='content'>
      <div className='text'>
        <h1>Obegränsat med filmer, serier och annat. </h1>
        <h2>Titta var du vill. Avsluta när du vill.</h2>
        <h3>Redo att börja titta? Ange din e-postadress för att skapa eller återaktivera ett konto.</h3>
      </div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          createUserWithEmailAndPassword(auth, e.target.email.value, 123456).then((cred=>console.log(cred)))
          e.target.email.value = ''
        }} className='form-control'>
            <input name='email' className='input' placeholder='E-postadress'/>
            <button className='try'>Kom igång </button>
        </form>
    </div>
  )
}

export default Content