import MovieBackgound from '../componet/MovieBackground'
import NavBar from '../componet/Navbar';
import Moives from '../componet/Moives'
import Moives2 from '../componet/Movies2'


function Index() {
return (
<div className='index'>
  <NavBar/>
  <MovieBackgound/>
  <h1 className='trending-h1' >Populärt på Netflix</h1>
  <div className='trending'>
    <Moives/>
  </div>
  <h1 className='trending-h1-now' >Populärt just nu</h1>
  <div className='trending-now'>
    <Moives2/>
  </div>
</div>
)
}

export default Index


