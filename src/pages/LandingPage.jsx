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
                        <h1>A Farmárcia está de cara nova!</h1>
                    </div>
                    <div className="descricao-container">
                        <p>Com a nova Farmárcia, você pode comprar seus remédios sem sair de casa! Basta acessar o site, fazer seu pedido e aguardar a entrega. Simples assim!</p>
                    </div>
                    <div className="btn-container">
                        <button>Comprar agora</button>
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
