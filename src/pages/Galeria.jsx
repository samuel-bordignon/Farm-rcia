import "./Galeria.css"

function Galeria() {
    return (
        <div className="galeria-container">
            <div className='sesao-container-galeria'>
                <div className="titulo-container-galeria">
                    <h2>Galeria</h2>
                    <hr />
                </div>
                <div className='colunas-container'>
                    <div className="coluna" id='coluna-um'>
                        <img className='img-galeria' id='img-esquerda' src="./images/farmarcia-camiseta.png" alt="" />
                        <img className='img-galeria' id='img-esquerda' src="./images/farmarcia-camisetas.png" alt="" />

                    </div>
                    <div className="coluna" id='coluna-dois'>
                        <img className='img-galeria' id='img-direira' src="./images/farmarcia-cartoes.png" alt="" />
                        <img className='img-galeria' id='img-direira' src="./images/farmarcia-placa.png" alt="" />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Galeria;
