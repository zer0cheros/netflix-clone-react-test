import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Index() {
    const [trendingMovies, setTrendingMovies] = useState([])
    const fetchTrendingMovies = async ()=>{
        const res = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=9a1e89b1e00d29700a09837834e245cf')
        setTrendingMovies([...res.data.results])
    }
    useEffect(()=>{
        fetchTrendingMovies()
    },[])
  return (
    <div>Index
    {console.log(trendingMovies)}
    </div>
  )

}

export default Index