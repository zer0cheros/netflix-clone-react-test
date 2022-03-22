import React from 'react'
import {db} from './firebase-config'
import {setDoc, collection} from 'firebase/firestore'

function Modal() {
    const AddUser = ()=>{
        const dbref = collection(db, 'Profile')
        setDoc(dbref, {
            name: username,
            profileImage: profileImage
        })
    }
    return (
    <div className='Modal'>

    </div>
  )
}

export default Modal