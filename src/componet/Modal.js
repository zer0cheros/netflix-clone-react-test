import React, { useState } from 'react'
import {db, auth} from './firebase-config'
import {setDoc, addDoc, collection} from 'firebase/firestore'

function Modal({show}) {
    const [username, addUsername] = useState('')
    const addUser = (e)=>{
        e.preventDefault()
        const dbref = collection(db, 'Profile')
        addDoc(dbref, {
            name: username,
            profileImage:'./img/icon.png',
            uid: auth.currentUser.uid
        }).then((data)=>{
            console.log('saved')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
    <div className='modal'>
        <form onSubmit={addUser}>
        <label>Lägg till användare</label>
        <input onChange={({target})=>{
            addUsername(target.value)
        }}/>
        <button type='submit'>Lägg till</button>
        </form>
    </div>
  )
}

export default Modal