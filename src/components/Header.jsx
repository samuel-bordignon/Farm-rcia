import React from 'react'
import Logo from './Logo'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <Logo />
      <div className="op-container">
        <button className="op-home" id="op-icon">
          <i class="bi bi-house"></i>
          Início
        </button>
        <button className="op-sobre" id="op-icon">
          <i class="bi bi-info-circle"></i>
          Sobre
        </button>
        <button className="op-contato " id="op-icon">
          <i class="bi bi-telephone"></i>
          Fale-conosco
        </button>
        <button className="op-galeria " id="op-icon">
          <i class="bi bi-telephone"></i>
          Galeria
        </button>
      </div>
    </div>
  )
}

export default Header
