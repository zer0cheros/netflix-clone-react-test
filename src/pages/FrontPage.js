import React, {useState, useEffect} from 'react'
import Body from '../componet/Body';
import {useHistory} from 'react-router-dom'
import ContentUnder from '../componet/ContentUnder';

function FrontPage() {
  return (
    <div className='container'>
      <Body/>
      <ContentUnder/>
    </div>
  )
}

export default FrontPage