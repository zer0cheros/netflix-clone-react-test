import React, {useEffect, useState} from 'react'
import {auth, db} from './firebase-config'
import {getDocs, collection, query, where, onSnapshot} from 'firebase/firestore'
import { async } from '@firebase/util'

function ProfileComponet() {
    const dbref = collection(db, 'favorites')
    const [favorites , setFavorites] = useState([])
    const getData = async()=>{
      const q = query(collection(db, "favorites"))
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
              setFavorites([change.doc.data()])
          }
          if (change.type === "modified") {
              console.log("Modified city: ", change.doc.data());
          }
          if (change.type === "removed") {
              console.log("Removed city: ", change.doc.data());
          }
        })
      })
    }
    useEffect(()=>{
        getData()   
    }, [])
    return (
    <div>
        {favorites.map(favorite=>(
          <div key={favorite.movieID}>
            <h1 className='texts'>{favorite.name}</h1>
          </div>
          ))}
    </div>
  )
}

export default ProfileComponet