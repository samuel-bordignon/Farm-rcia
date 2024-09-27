import React from 'react'
import Header from '../components/Header'
import './HomePage.css'

function HomePage() {
    return (
        <div>
            <div className='homepage-container'>
                    <div className="section" id='section-header'>
                        <div>
                            <img src="./images/Gut health-pana.png" alt=""  className='img-header'/>
                        </div>
                        <div>
                            <h2>Bem-vindo à nova Farmárcia!</h2>
                            <p>
                                A Far<span class="highlight">márcia</span> está de cara nova e, convenhamos, estava na hora!
                                Depois de anos com um layout quadrado e ultrapassado, finalmente nos livramos das ideias jurássicas do antigo dono, o Mário.
                                Agora, queremos te oferecer uma experiência moderna e colorida. Preparado para descobrir um novo jeito de cuidar da saúde?
                            </p>
                        </div>
                    </div>
                    <div className="section" id='section-grid'>
                        <div><h2>Do Mário ao Márcia – uma revolução visual</h2>
                            <p>
                                Antes, a página da Farmárcia parecia mais uma lista de compras do Mário do que uma farmácia online.
                                Nós acreditamos que merecemos mais! Transformamos o caos do antigo design em algo digno de ser visitado.
                                Com cores vibrantes e uma interface amigável, agora navegar por aqui será uma experiência sem dor de cabeça – desculpa, Mário!
                            </p></div>
                        <div><h2>A última ideia do Mário? O botão de "clique aqui" gigante</h2>
                            <p>
                                Vamos ser sinceros: o antigo dono, o Mário, tinha boas intenções, mas suas escolhas de design deixavam a desejar.
                                Lembra daquele botão de "clique aqui" que parecia maior que o próprio site? Pois é, nós também.
                                Agora, com a nova gestão da <span class="highlight">Márcia</span>, trazemos uma interface simples, moderna e cheia de praticidade.
                            </p></div>
                        <div><h2>Adeus ao "estilo Mário", olá ao futuro!</h2>
                            <p>
                                Antes, a Farmárcia parecia parada no tempo, assim como o gosto do Mário por layouts cheios de tabelas e pop-ups irritantes.
                                Agora, com a nova gestão da <span class="highlight">Márcia</span>, trazemos não só uma cara nova, mas também um jeito mais fácil de fazer suas compras online.
                                Navegue com uma paleta de cores que alegra até quem está resfriado!
                            </p></div>
                    </div>
                    <div className="section" id='section-line'>
                        <div>
                            <h2>Um site tão eficiente quanto a Márcia, sem as "melhorias" do Mário</h2>
                            <p>
                                Agora que o Mário não está mais no controle, você pode respirar aliviado.
                                Nossa nova versão da <span class="highlight">Farmárcia</span> é tão eficiente quanto a Márcia no atendimento, sem aquelas 'melhorias' questionáveis do passado.
                                Cada clique é pensado para ser rápido, fácil e direto ao ponto, sem te fazer perder tempo.
                            </p>
                        </div>
                        <div>
                            <img src="./images/Medicine-amico (1).png" alt="" />
                        </div>
                    </div>
                </div>


            <footer>
                <p>&copy; 2024 Farmárcia - A sua farmácia com cara nova!</p>
            </footer>

        </div>
    )
}

export default HomePage
