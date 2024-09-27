import React from 'react'
import Header from '../components/Header'
import './LandingPage.css'


function LandingPage() {
    return (
        <div className='landing-container'>
            <Header />
            <div className="secao-container">
                <div className="infos-container">

                    <div className="titulo-container">
                        <h1>A Far<span>márcia</span> está de cara nova!</h1>
                    </div>
                    <div className="descricao-container">
                        <p>Uma gerência que o Márcio nunca irá superar</p>
                    </div>
                    <div className="btn-container">
                        <button>Descubra agora</button>
                    </div>
                   
                </div>
                <div className="img-container">
                    <img src="/images/farmarcia.PNG-removebg-preview-removebg-preview.png" alt="Imagem de remédios" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
