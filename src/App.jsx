
import './App.css'
import Body from './components/Body'
import Logo from './components/Logo'
import FaleConosco from './pages/FaleConosco'
import Galeria from './pages/Galeria'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import { useState } from 'react'

function App() {
  const [pagina, setPagina] = useState(<LandingPage />)


  return (
    <>
      <div className='header-container'>
      <Logo />
      <div className="op-container ">
        <button onClick={()=>{setPagina(<HomePage />)}} className="op-icon " id="op-home">
          <i class="bi bi-house"></i>
           Início
        </button>
        <button onClick={()=>{setPagina(<FaleConosco />)}} className="op-icon " id="op-contato">
          <i class="bi bi-telephone"></i>
           Fale-conosco
        </button>
        <button onClick={()=>{setPagina(<Galeria />)}} className="op-icon " id="op-galeria">
        <i class="bi bi-columns"></i>
           Galeria
        </button>
      </div>
    </div>
    
    {pagina}

    
    </>
  )
}

export default App
