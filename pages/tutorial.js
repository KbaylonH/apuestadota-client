import React, {useState} from 'react'
import Leftbar from '../components/LeftBar/Leftbar';
import Navbar from '../components/Navbar/Navbar';

export default function Tutorial() {

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }
    const handleClick1 = () => {
        setActive1(!active1);
    }
    const handleClick2 = () => {
        setActive2(!active2);
    }
  return (
    <>
        
    <div className='mode-play'>
            <Navbar />

            <div className='main--1'>
            <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor' c5='left-container-body-anchor  left-body-anchor-active'  c6='left-container-body-anchor'/>
                <div className='interface'>
                    <div className='faq-container'>
                        <div className='faq-container-title'>
                            <h4>Preguntas Frecuentes</h4>
                        </div>

                        <div className='faq-container-box'>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4 onClick={handleClick2}>¿Cómo puedo retirar mis ganancias?
                                        <img  className={active2 ? 'chevron chevron-top' : 'chevron'} src='/icons/chevron-down.png' alt='chevron-down'/>
                                    </h4>
                                    <p className={active2 ? 'active' : 'disable'}>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>

                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>

                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Puedo tener mas de una cuenta?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Por que necesito verificar mi cuenta?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Que documentos puedo utilizar para verificar mi cuenta?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Hay un monto de deposito minimo para abrir mi cuenta?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            


                        </div>

                    </div>
                    <div className='box-terms'>
                        <div className='box-item box-item-a'>
                                <div className='box-item-title' onClick={handleClick}>
                                    <h4>Términos y condiciones</h4>
                                    <img  className={active ? 'chevron chevron-top' : 'chevron'} src='/icons/chevron-down.png' alt='chevron-down'/>
                                </div>
                                <div className={active ? 'box-item-anchor active' : 'box-item-anchor disable'}>
                                    <a href='/terms-apuestadota.pdf' target={'_blank'}>Lee nuestros términos y condiciones en este enlace</a>
                                </div>
                        </div>    
                        <div className='box-item box-item-b'>          
                            <div className='box-item-title' onClick={handleClick1}>
                                    <h4>Reglas</h4>
                                    <img  className={active1 ? 'chevron chevron-top' : 'chevron'} src='/icons/chevron-down.png' alt='chevron-down'/>
                            </div>
                            <div className={active1 ? 'box-item-anchor active' : 'box-item-anchor disable'}>
                                    <a href='/terms-apuestadota.pdf' target={'_blank'}>Puedes ver nuestras reglas en este enlace</a>
                            </div>
                        </div>


                    </div>

            <div className='container-interface'> 

                <div className='int interface-item-01'>
                            <h4>Qué es Apuesta Dota?</h4>
                            <div className='multimedia-container'>
                                <img className='img-prueba' src='/prueba.jpg' alt='prueba'/>
                            </div>
                        </div>  
                        <div className='interface-item-02'>
                            <div className='tutorial-subtitle'>
                                <h4>¿Tienes alguna duda adicional?</h4>
                            </div>
                            <div className='tutorial-p'>
                                <p>Envianos un correo y te ayudaremos: <span className='green'>help@apuestadota.com </span></p>
                            </div>
                        </div>

                        <div className='int interface-item-03'>
                            <h4>Cómo funciona?</h4>
                            <div className='multimedia-container'>
                                <img className='img-prueba' src='/prueba.jpg' alt='prueba'/>
                            </div>
                        </div>   
                        <div className='int interface-item-04'>
                            <h4>Cómo depositar?</h4>
                            <div className='multimedia-container'>
                                <img className='img-prueba' src='/prueba.jpg' alt='prueba'/>
                            </div>
                        </div>



                    <div className='box-terms'>
                        <div className='box-item box-item-a'>
                                <div className='box-item-title' onClick={handleClick}>
                                    <h4>Términos y condiciones</h4>
                                    <img  className={active ? 'chevron chevron-top' : 'chevron'} src='/icons/chevron-down.png' alt='chevron-down'/>
                                </div>
                                <div className={active ? 'box-item-anchor active' : 'box-item-anchor disable'}>
                                    <a href='/terms-apuestadota.pdf' target={'_blank'}>Lee nuestros términos y condiciones en este enlace</a>
                                </div>
                        </div>    
                        <div className='box-item box-item-b'>          
                            <div className='box-item-title' onClick={handleClick1}>
                                    <h4>Reglas</h4>
                                    <img  className={active1 ? 'chevron chevron-top' : 'chevron'} src='/icons/chevron-down.png' alt='chevron-down'/>
                            </div>
                            <div className={active1 ? 'box-item-anchor active' : 'box-item-anchor disable'}>
                                    <a href='/terms-apuestadota.pdf' target={'_blank'}>Puedes ver nuestras reglas en este enlace</a>
                            </div>
                        </div>
                    </div>           
                    </div>   
                </div>                
            </div>
        </div>
    

    <style jsx>
    {`
    
        .mode-play {
            height: 100vh;
            overflow-y: auto;
        }

        .interface {
            background-image: url(/warlock2.jpg);
        }
        .help-c {
            height: 50px;
            position: absolute;
            right: 0;
            bottom: 15%;
            margin-right: 40px;
            margin-top: -20px;
            filter: invert(89%) sepia(77%) saturate(549%) hue-rotate(26deg) brightness(105%) contrast(103%);
        }

        .faq-container {
            padding: 4rem;
            position: relative;
        }

        .faq-container-title h4 {
                color: #fff;
                text-shadow: 2px 2px 2px #000;
                font-size: 37px;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
               
        }

        .box-terms {
            position: absolute;
            right: 0;
            top:0;
            margin: 4rem;
            width: 500px;
           
        }

        .box-item {
            background-color: #41b6e6;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            padding: 1rem 2rem;
        }

        .box-item-title {
            font-size: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 30px;
            justify-content: space-between;
        }

        .active {
            display: block;
            opacity:1;
        }

        .disable {
            display: none;
            opacity: 0;
        }
        .box-item-anchor {
            transition: all 0.5s ease;
        }
        .box-item-anchor a {
            color: #B6FF40;
            text-decoration: none;
            font-family: 'Roboto Mono', monospace;
        }

        .box-item-a {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .box-item-b {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        .chevron-top {
            transform: rotate(180deg);
        }

        .chevron {
            height: 24px;
            width: 24px;
        }

        .faq-container-box {
            width: 60%;
        }
       

       .faq-container-box-item-title h4 {
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 22px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            
       }

       .faq-container-box-item-title {
            background-color: rgba(60,83,118,1);
            border-radius: 10px;
            padding: 1rem 2rem;
            cursor:pointer;
       }

       .faq-container-box-item-title p {
            margin-top: 1rem;
            font-size: 16px;
            color: rgba(255, 255, 255, .8);
            font-family: 'Roboto Mono', sans-serif;
       }

       .faq-container-box-item-title {
            margin-top: 2rem;
       }



       .container-interface {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(6, 1fr);
                padding: 4rem;
                grid-row-gap: 30px;
       }

       .interface-item-01 {
                grid-area: 1 / 1 / 3 / 3;
            }

            .interface-item-02 {
               grid-area: 1 / 3 / 3 / 4;
            }
            .interface-item-03 {
                grid-area: 3 / 1 / 5 / 3;
            }

            .interface-item-04 {
                grid-area: 5 / 1 / 9 / 3; 
            }

            .multimedia-container {
                width: 90%;
                
            }
            .int h4 {
                color: #fff;
                font-size: 37px;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
                margin-bottom: 15px;
            }

            .tutorial-subtitle {
                color: #fff;
                background-color: #41b6e6;
                font-size: 37px;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
                padding: 1rem 2rem;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            .tutorial-p {
                
                font-size: 20px;
                padding: 2rem 2rem;
                background-color: #101f3c;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            .tutorial-p p {
                color: rgba(255, 255, 255, .8);
                font-family: 'Roboto-mono', sans-serif;
            }

            .img-prueba {
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
            }

            .green {
                color: #B6FF40;
               
            }
        @media (max-width: 768px) { 
        
            .mode-play {
                overflow-x: hidden;
                overflow-y: scroll;
            }
            .help-c {
                    margin-top: -60px;
                }
    }
    @media (max-width: 485px) { 
        
      
}
    `}
    </style>
</>
  )
}
