import React, {useEffect, useState} from 'react'
import {db} from './firebase-config'
import {getDocs, collection, query, setDoc} from 'firebase/firestore'

function FetchUser() {
    const dbref = collection(db, 'Profile')
    const [profile, setProfile] = useState([])
    const fetchUserProfile = ()=>{
      const q = query(dbref)
      getDocs(q).then((data)=>{
        data.forEach(element => {
          setProfile([element.data()])
        });
      })
    }
    useEffect(()=>{
        fetchUserProfile()
      },[])
    return (
    <div>{profile.map(p=> (
        <h1 key={p}>{p.name}</h1>
      ) )}</div>
  )
}

export default FetchUser