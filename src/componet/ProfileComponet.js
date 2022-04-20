import React, {useEffect, useState} from 'react'
import {auth, db} from './firebase-config'
import {getDocs, collection, query, where} from 'firebase/firestore'

function ProfileComponet() {
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const getData = ()=>{
        const col = collection(db, 'favorites')
        //const  col2 = where(col, "uid" === auth.currentUser.uid)
        const q = query(col)
        getDocs(q).then((snapshot)=>{
            snapshot.forEach(snap=>{
                console.log(snap.data());
            })
        })
    }
    useEffect(()=>{
        getData()
    }, [])
    return (
    <div>
        
    </div>
  )
}

export default ProfileComponet