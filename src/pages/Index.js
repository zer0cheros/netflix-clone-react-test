import React, {useState, useEffect} from 'react'
import FetchUser from '../componet/FetchUser'
import axios from 'axios'
import {auth} from '../componet/firebase-config'
import {useHistory} from 'react-router-dom'
import MovieBackgound from '../componet/MovieBackground'
import NavBar from '../componet/Navbar';
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../componet/firebase-config'


function Index({profile}) {
  const FBtoken = localStorage.token 
  const history = useHistory() 
  const imageURL = 'https://image.tmdb.org/t/p/w500'
  const dbRef = collection(db, 'favorites')
  const [trendingMovies, setTrendingMovies] = useState([])
  const [trendingMoviesNow, setTrendingMoviesNow] = useState([])
    const fetchTrendingMovies = async ()=>{
        const res = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=9a1e89b1e00d29700a09837834e245cf&language=en-US&page=1', {headers: { 'Content-Type': 'application/json'}})
        setTrendingMovies([...res.data.results])
    }
    const fetchTrendingMoviesNow = async ()=>{
      const res = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=9a1e89b1e00d29700a09837834e245cf&language=en-US&page=4')
      setTrendingMoviesNow([...res.data.results])
  }
    useEffect(()=>{
      if(FBtoken){
        fetchTrendingMovies()
        fetchTrendingMoviesNow()
      }else{
        history.push('/login')
      }
    },[])
  return (
    <div>
      <NavBar/>
      <MovieBackgound/>
      <h1 className='trending-h1' >Populärt på Netflix</h1>
      <div className='trending'>
        {trendingMovies.map(movie=>(
          <div key={movie.id} className='trending-movies'>
            {console.log(movie)}
          <img src={imageURL + movie.poster_path} onClick={()=>{
            addDoc(dbRef, {
              movieID: movie.id,
              name: movie.name,
              text: movie.overview,
              image: imageURL + movie.poster_path,
              uid: auth.currentUser.uid
            }).then(()=>{console.log('saved');})
          }}/>
          </div>
        ))}
      </div>
      <h1 className='trending-h1-now' >Populärt just nu</h1>
      <div className='trending-now'>
        {trendingMoviesNow.map(movie=>(
          <div key={movie.id} className='trending-movies'>
          <img src={imageURL + movie.poster_path} onClick={()=>{
            addDoc(dbRef, {
              movieID: movie.id,
              name: movie.name,
              text: movie.overview,
              image: imageURL + movie.poster_path,
              uid: auth.currentUser.uid
            }).then(()=>{console.log('saved');})
          }}/>
          </div>
        ))}
      </div>
      <h1 className='watchlist-h1' >Fortsätt titta som </h1>
    
    </div>
  )

}

export default Index


