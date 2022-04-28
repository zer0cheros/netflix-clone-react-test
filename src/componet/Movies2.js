import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {auth} from '../componet/firebase-config'
import {useHistory} from 'react-router-dom'
import {addDoc, collection, where, query, getDocs} from 'firebase/firestore'
import {db} from '../componet/firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth';

function Moives2() {
    const [user, loading, error] = useAuthState(auth)
    const imageURL = 'https://image.tmdb.org/t/p/w500'
    const dbRef = collection(db, 'favorites')
    const [trendingMoviesNow, setTrendingMoviesNow] = useState([])
    const FBtoken = localStorage.token 
    const history = useHistory() 
    const fetchTrendingMoviesNow = async ()=>{
        const res = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=9a1e89b1e00d29700a09837834e245cf&language=en-US&page=4')
        setTrendingMoviesNow([...res.data.results])
      }
    useEffect(()=>{ 
        if(loading) return '..loading'
        if(user && FBtoken){
          //fetchTrendingMovies()
          fetchTrendingMoviesNow()
        }else{
          history.push('/login')
        }
      }, [loading, user])
  return (
      <>
       {trendingMoviesNow.map(movie=>(
      <div key={movie.id} className='trending-movies'>
      <img src={imageURL + movie.poster_path} onClick={()=>{
        let check = false
        const q = query(dbRef, where('uid', '==', user.uid), where('movieID', '==', movie.id) )
        getDocs(q).then((data)=>{
          data.forEach(element => {
            if(element.data()){
                return check = true
            }else{
                return check = false
            }
          })
          if(!check){
            addDoc(dbRef, {
                movieID: movie.id,
                name: movie.name,
                text: movie.overview,
                image: imageURL + movie.poster_path,
                uid: auth.currentUser.uid
              }).then(()=>{console.log('saved')})
          }
        })
      }}/>
      </div>
    ))}
    </>
  )
}

export default Moives2