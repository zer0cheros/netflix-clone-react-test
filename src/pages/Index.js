import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {auth} from '../componet/firebase-config'
import {useHistory} from 'react-router-dom'

function Index() {
  const FBtoken = localStorage.token 
  const history = useHistory() 
  const imageURL = 'https://image.tmdb.org/t/p/w500'
  const [trendingMovies, setTrendingMovies] = useState([])
    const fetchTrendingMovies = async ()=>{
        const res = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=9a1e89b1e00d29700a09837834e245cf')
        setTrendingMovies([...res.data.results])
    }
    useEffect(()=>{
      if(FBtoken){
        fetchTrendingMovies()
      }else{
        history.push('/login')
      }
    },[])
  return (
    <div>Index
      {console.log(trendingMovies)}
      <div className='trending'>
        {trendingMovies.map(movie=>(
          <div key={movie.id} className='trending-movies'>
          <p>{movie.id}</p>
          <img src={imageURL + movie.poster_path}/>
          </div>
        ))}
      </div>
    <button onClick={()=>{
      auth.signOut()
      localStorage.removeItem('token')
      window.location.replace('/login')
    }}>Logga ut</button>
    </div>
  )

}

export default Index


