import React from 'react'
import Browser from '../componet/Browser'
import Logo from '../componet/Logo'

function Browse() {
  return (
    <div className='container'>
        <div className='browse-container'>
            <Logo/>
            <Browser/>
        </div>    
    </div>
  )
}

export default Browse