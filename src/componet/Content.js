import React from 'react'

function Content() {
  return (
    <div className='content'>
      <div className='text'>
        <h1>Obegränsat med filmer, serier och annat. </h1>
        <h2>Titta var du vill. Avsluta när du vill.</h2>
        <h3>Redo att börja titta? Ange din e-postadress för att skapa eller återaktivera ett konto.</h3>
      </div>
        <form className='form-control'>
            <input className='input' placeholder='E-postadress'/>
            <button className='try'>Kom igång </button>
        </form>
    </div>
  )
}

export default Content