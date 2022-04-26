import React from 'react'

function Logo() {
  return (
    <div onClick={()=>{
      window.location.href = '/'
    }} className='logo'></div>
    
  )
}

export default Logo