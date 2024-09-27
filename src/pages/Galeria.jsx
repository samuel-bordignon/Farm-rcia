import React from 'react';
import './Galeria.css';

function Galeria() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <div className="img-container mb-3">
                        <img src="./images/farmarcia-camiseta.png" alt="Imagens de uma camiseta com o logo da farmácia" className="img-fluid" />
                    </div>
                    <div className="img-container mb-3">
                        <img src="./images/farmarcia-camisetas.png" alt="Imagem de várias camisetas com o logo da farmácia" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <div className="img-container mb-3">
                        <img src="./images/farmarcia-cartoes.png" alt="Imagem de cartões da farmácia" className="img-fluid" />
                    </div>
                    <div className="img-container mb-3">
                        <img src="./images/farmarcia-placa.png" alt="Imagem de uma placa com o logo da farmácia" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galeria;
