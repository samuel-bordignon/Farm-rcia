import React from 'react'
import Logo from './Logo'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <Logo />
      <div className="op-container ">
        <button className="op-icon " id="op-home">
          <i class="bi bi-house"></i>
           Início
        </button>
        <button className="op-icon " id="op-contato">
          <i class="bi bi-telephone"></i>
           Fale-conosco
        </button>
        <button className="op-icon " id="op-galeria">
        <i class="bi bi-columns"></i>
           Galeria
        </button>
      </div>
    </div>
  )
}

export default Header
