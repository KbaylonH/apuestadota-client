import React from 'react';
import Link from 'next/link'
import Head from 'next/head';


const Home = () => {
    return (
        <>
        <Head>
            <title>Apuesta Dota</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="App">
        <div className="main">
            <div className="navbar">
                <img className="logo" src="apuesta-logo.png" alt="logo" />
                <div>
                <Link href={'/login'}>
                     <a>
                        <button className="btn outline">Ingresar</button>
                    </a>
                </Link>
                    
                    
                    <button className="btn btn-md">Registrarse</button>
                </div>
            </div>

            <div className="fixed-button-container"> 
            {/* CAMBIAR */}
                <Link href="/play">
                    <a>
                        <button className="fixed-button" id="fixed-button">
                        EMPEZAR
                        </button>
                    </a>
                </Link> 
            </div>
          <section className="first-section"> 
         
              <div className="intro">
                  <h1 className="title-1">Apuesta, juega <br/> y gana</h1>
                  <p className="subtitle-1">
                     Cansado de que te digan que busques un trabajo?  <br/> Gana dinero jugando Dota 2. 
                  </p>
                  
              </div>
              <video autoPlay muted loop id="myVideo">
                  <source src="esports_on_demand.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
              <img src='vertical-p.jpg' id='myVideo2'/>
              
          <div>
          <div className="marquee-center"> 
                    <div className="animatetext marquee"> 
                        <p className="p-animatedtext"> &nbsp; &nbsp;&nbsp; &nbsp;   JUEGA SOLO O CON AMIGOS    &nbsp;  &nbsp; &nbsp;  &nbsp;  GANA DINERO MIENTRAS DOTEAS     &nbsp; &nbsp; &nbsp; &nbsp;   DISFRUTA DE TUS HABILIDADES  &nbsp; &nbsp; </p>
                    </div>
                    <div className="animatetext marquee"> 
                        <p className="p-animatedtext"> &nbsp; &nbsp;&nbsp; &nbsp;    JUEGA SOLO O CON AMIGOS   &nbsp;   &nbsp; &nbsp;  &nbsp;  GANA DINERO MIENTRAS DOTEAS     &nbsp; &nbsp; &nbsp;  &nbsp;  DISFRUTA DE TUS HABILIDADES   &nbsp;&nbsp; </p>
                    </div>
            </div>
          </div>
          <h1 className="title-1 cursive center mtop">
                      <span className="blue">CóMO</span> EMPEZAR ?
                      <p className="poppins center font-m hgray"> Apuesta y aprovecha al maximo tus habilidades doteras. </p>
                  </h1>
            
          </section>

          <section className="second-section">
              <div>
                  <div className="grid-content">
                      
                      <div className="second-section-img" >
                      <img src="heros/invoker.png" alt="lion" id="id-single-img" />
                      </div>
                      <div className='mt-ss'>
                          <div className="info-cont">
                              <h3 className="title-2 cursive"><span className="blue">1.</span> APUESTA A TU PROPIA PARTIDA DE RANKED</h3>
                              {/* <p className="poppins">Sacale provecho a tus habilidades </p> */}
                          </div>
                          <div className="info-cont">
                              <h3 className="title-2 cursive"><span className="blue">2.</span> GANA Y TE PAGAMOS EL 40% DE TU APUESTA</h3>
                              {/* <p className="poppins">No cobramos comision por retiro</p> */}
                          </div>
                          <div className="info-cont">
                              <h3 className="title-2 cursive"><span className="blue">3.</span> DISFRUTA DE TU DINERO EN ALCOHOL Y MUJERES</h3>
                              {/* <p className="poppins">O ayuda a tu mamita</p> */}
                          </div>

                      </div>
                      
                  </div>
              </div>
          </section>

          <section className="third-section">
              <div   className="third-section-large-header">
                <img src="aa-banner.jpg" alt="sas" className="top-image" />

                <div className="third-section-intro-content">
                      <h1 className="title-1 cursive center">
                          <span className="blue">LISTO</span> para comenzar ?
                          <p className="poppins center font-m"> Juega como si estuvieras en el International. </p>
                      </h1>
               
                      


                        <div className='info---c'>
                            <div className="info-cont">
                                <h3 className="title-2 cursive"><span className="blue">1.</span> DALE CLICK EN EMPEZAR</h3>
                                
                            </div>
                            <div className="info-cont">
                                <h3 className="title-2 cursive"><span className="blue">2.</span>HAZ UN DEPOSITO DESDE 10 DOLARES </h3>
                    
                            </div>
                            <div className="info-cont">
                                <h3 className="title-2 cursive"><span className="blue">3.</span> RETIRA TUS GANANCIAS Y DISFRUTA DE TU EXITO</h3>
                                
                            </div>

                      </div>
                </div>
              </div>        
          </section>    

           
               
      </div>
    </div>

    </>
    );
}

export default Home;
