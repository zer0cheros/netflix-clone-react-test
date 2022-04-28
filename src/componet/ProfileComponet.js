import React, {useEffect, useState} from 'react'
import {auth, db} from './firebase-config'
import {getDocs, collection, query, where, onSnapshot} from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';


function ProfileComponet() {
    const [user, loading, error] = useAuthState(auth);
    const dbref = collection(db, 'favorites')
    let array = []
    const [favorites , setFavorites] = useState([])
    const getData = ()=>{
      const q = query(dbref, where('uid', '==', user.uid))
      getDocs(q).then((data)=>{
        data.forEach(element => {
          array.push(element.data())
        })
        setFavorites(array)
      })
    }
    useEffect(()=>{ 
      if(loading) return '..loading'
      if(user){
        getData() 
      }
    }, [loading, user])
    return (
    <div className='profile-content'>
        {favorites.map(favorite=>(
          <div className='favorite-card' key={favorite.movieID}>
            <h1 className='texts'>{favorite.name}</h1>
            <img src={favorite.image} className='favorite-image'></img>
            <div className='info'>
            <p className='texts'>{favorite.text}</p>
            </div>
          </div>
          ))}
    </div>
  )
}

export default ProfileComponet