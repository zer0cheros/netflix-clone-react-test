import React, {createElement, useEffect, useState} from 'react'
import {db} from './firebase-config'
import {getDocs, collection, query, setDoc} from 'firebase/firestore'
import profilePic from '../img/icon.png'
import kidsPic from '../img/kids.jpg'
import add from '../img/add.PNG'


function Browser() {
  const dbref = collection(db, 'Profile')
  const [profile, setProfile] = useState([])
  const [visible, setVisible] = useState(false)
  const fetchUserProfile = ()=>{
    const q = query(dbref)
    getDocs(q).then((data)=>{
      data.forEach(element => {
        setProfile([element.data()])
      });
    })
  }
  const showModal = ()=>{
    if(visible){
      setVisible(false)
    }else{
      setVisible(true)
    }
    
  }
  useEffect(()=>{
    fetchUserProfile()
  },[])
  return (
    <div className='browse'>
        <h1 className='who'>Vem är det som tittar?</h1>
        <div className='middle'>
        <div className='profile'>
          <img onClick={()=>{
            window.location.assign('/home')
          }} src={profilePic}></img>
          {profile.map(p=> (
            <h1 key={p}>{p.name}</h1>
          ) )}
        </div>
        <div className='children'>
          <img src={kidsPic}></img>
          <h1>Barn</h1>
        </div>
        <div className='add-profile'>
          <img onClick={showModal} src={add}></img>
          <button >Lägg till profil</button>
        </div>
        </div>
        <button className='handle-profile'>Hantera profiler</button>
        {visible ? <div className='modal'/> : null}
    </div>
  )
}

export default Browser