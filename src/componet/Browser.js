import React, {createElement, useEffect, useState} from 'react'
import {db} from './firebase-config'
import {getDocs, collection, query, setDoc} from 'firebase/firestore'
import profilePic from '../img/icon.png'
import kidsPic from '../img/kids.jpg'
import add from '../img/add.PNG'
import Modal from './Modal'


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
      console.log('false');
    }else{
      setVisible(true)
      console.log('true')
    }
    
  }
  useEffect(()=>{
    fetchUserProfile()
  },[])
  return (
    <div className='browse'>
        <h1 className='who'>Vem är det som tittar?</h1>
        <div className='middle'>
        {profile.map((p)=> (
        <div key={p} className='profile'>
          {console.log(p)}
          <img onClick={()=>{
            window.location.assign('/home')
          }} src={profilePic}></img>
            <h1>{p.name}</h1>
        </div>
         )
          )}
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
        {visible ? <><Modal show={visible} /><button className='close' onClick={()=>{
          setVisible(false)
        }}>Close</button></> : null}
    </div>
  )
}

export default Browser