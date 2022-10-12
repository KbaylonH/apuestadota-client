import React from 'react';



const Footer = () => {

    return (

        <>

            <div className='root-footer'>

                <div className='footer-cont footer-logo'>

                    <img src='apuesta-logo.png' className='logo'/>

                </div>

                <div className='footer-cont footer-text'>

                Revolucionando el mundo de las apuestas en e-sports. <br/>

Aquí ganas según tu habilidad, va más allá del azar.  <br/>

La victoria está en tus manos. <br /> 
El sitio web www.apuestadota.com se rige por las leyes de San Vicente y las Granadinas.

                </div>

            </div>

            <style jsx>{`

                .root-footer {

                    text-align: center;

                    width: 100%;

                    z-index: 5;

                    padding: 30px 100px;

                    background-color: #000;

                }

                .footer-cont {

                    display: flex;

                    align-items: center;

                    justify-content: center;

                }

                .footer-logo {

                    width: 100%;

                    margin-bottom: 1.5rem;

                }



                .footer-text {

                    text-align: center;

                    font-size: 15px;

                    color: #777;

                    padding: 0 20px;

                    width: 500px;

                    margin: 0 auto;

                    font-family: 'Geometrik Blk';

                }

            `}</style>

        </>

    );

}



export default Footer;

