import './App.css'
import Body from './components/Body'
import Logo from './components/Logo'
import FaleConosco from './pages/FaleConosco'
import Galeria from './pages/Galeria'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import { useState } from 'react'
import Atendimento from './pages/Atendimento'

function App() {
  const [pagina, setPagina] = useState(<LandingPage />)
  const [paginaAtiva, setPaginaAtiva] = useState('landing') // Estado para controlar a página ativa

  const carregarInicio = () => {
    setPagina(<HomePage />)
    setPaginaAtiva('home')
  }
  
  const carregarFaleConosco = () => {
    setPagina(<FaleConosco />)
    setPaginaAtiva('faleConosco')
  }
  
  const carregarAtendimento = () => {
    setPagina(<Atendimento />)
    setPaginaAtiva('atendimento')
  }
  
  const carregarGaleria = () => {
    setPagina(<Galeria />)
    setPaginaAtiva('galeria')
  }

  // Função para verificar se um botão está ativo
  const isActive = (paginaNome) => paginaAtiva === paginaNome ? 'op-icon active' : 'op-icon';

  return (
    <>
      <div className='header-container'>
        <Logo />
        <div className="op-container">
          <button onClick={carregarInicio} className={isActive('home')} id="op-home">
            <i className="bi bi-house"></i>
            Início
          </button>
          <button onClick={carregarFaleConosco} className={isActive('faleConosco')} id="op-contato">
            <i className="bi bi-telephone"></i>
            Fale Conosco
          </button>
          <button onClick={carregarAtendimento} className={isActive('atendimento')} id="op-atendimento">
            <i className="bi bi-clipboard-heart"></i>
            Atendimento
          </button>
          <button onClick={carregarGaleria} className={isActive('galeria')} id="op-galeria">
            <i className="bi bi-columns"></i>
            Galeria
          </button>
        </div>
      </div>

      {pagina}
    </>
  )
}

export default App
