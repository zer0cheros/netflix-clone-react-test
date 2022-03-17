import React from 'react'
import video from '../assets/trailer.mp4'


function MovieBackgound() {
    return (
      <video loop autoPlay className='trailer' src={video} type="video/mp4">
      </video>
  )
}

export default MovieBackgound