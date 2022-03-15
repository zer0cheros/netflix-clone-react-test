import React, {useEffect, useState} from 'react'
import {db} from './firebase-config'
import {getDocs, collection, query, setDoc} from 'firebase/firestore'
import profilePic from '../img/icon.png'
import kidsPic from '../img/kids.jpg'
import add from '../img/add.PNG'


function Browser() {
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
    <div className='browse'>
        <h1 className='who'>Vem är det som tittar?</h1>
        <div className='middle'>
        <div className='profile'>
          <img src={profilePic}></img>
          {profile.map(p=> (
            <h1 key={p}>{p.name}</h1>
          ) )}
        </div>
        <div className='children'>
          <img src={kidsPic}></img>
          <h1>Barn</h1>
        </div>
        <div className='add-profile'>
          <img src={add}></img>
          <button>Lägg till profil</button>
        </div>
        </div>
        <button className='handle-profile'>Hantera profiler</button>
    </div>
  )
}

export default Browser