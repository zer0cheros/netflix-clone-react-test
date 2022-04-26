import React, {useEffect, useState} from 'react'
import {db, auth} from './firebase-config'
import {getDocs, collection, query, setDoc, where} from 'firebase/firestore'
import profilePic from '../img/icon.png'
import profilePic2 from '../img/Netflix-avatar.png'
import kidsPic from '../img/kids.jpg'
import add from '../img/add.PNG'
import Modal from './Modal'
import { useAuthState } from 'react-firebase-hooks/auth';


function Browser() {
  const [user, loading, error] = useAuthState(auth);
  const dbref = collection(db, 'Profile')
  let array = []
  const [profile, setProfile] = useState([])
  const [visible, setVisible] = useState(false)
  const fetchUserProfile = ()=>{
    const q = query(dbref, where('uid', '==', user.uid))
    getDocs(q).then((data)=>{
      data.forEach(element => {
        array.push(element.data())
      })
      setProfile(array)
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
    if(loading) return '..loading'
    if(user){
    fetchUserProfile()
    }
  },[user, loading])
  return (
    <div className='browse'>
        <h1 className='who'>Vem är det som tittar?</h1>
        <div className='middle'>
        {profile.map((p)=> (
        <div key={Math.floor(Math.random()* 999)} className='profile'>
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
        {visible ? <><Modal show={visible} /><button className='close signin-button' onClick={()=>{
          setVisible(false)
        }}>Close</button></> : null}
    </div>
  )
}

export default Browser