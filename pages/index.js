import React from 'react';

import Link from 'next/link'

import Head from 'next/head';

import NavbarFirst from '../components/Navbar/NavbarFirst';





const Home = () => {

    return (

        <>

        <Head>

            <title>Apuesta Dota</title>

            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/icons/favicon/favicon-32.png" />
        </Head>

        <div className="App">

        <div className="main">

            <NavbarFirst />

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

         <div className='videocontainer'>

            <div></div>

            <video autoPlay muted loop id="myVideo" preload='auto'>

                <source src="esports_on_demand.mp4" type="video/mp4"/>

                Your browser does not support the video tag.

            </video>

         </div>

         

         <img src='vertical-p.jpg' id='myVideo2'/>

         

     <div>

   

     </div>

     <h1 className="title-1 cursive center mtop">

                 <span className="blue">¿ Listo </span> para comenzar ?

                

             </h1>

       

     </section>



     <div className='overlay-gradient'></div>



     <section className="second-section">

         

           <img src='aegis-background.png' className='aegis-background'/>



           <div className='section2-text text-01'>

               <h3 className="title-2"> APUESTA A TU PROPIA <br/>PARTIDA DE RANKED</h3>

           </div>

           <div className='section2-text text-02'>

               <h3 className="title-2"> GANA Y TE PAGAMOS<br/>EL 40% DE TU APUESTA</h3>

           </div>

           <div className='section2-text text-03'>

               <h3 className="title-2"> DISFRUTA DE TU DINERO <br/>EN ALCOHOL Y MUJERES</h3>

           </div>

         

     </section>



     <div className='relative'>

               <h1 className="title-1 cursive center">

                   <span className="blue">¿ Como</span> empezar ?

                               

                     <p className="poppins center font-m"> APUESTA Y APROVECHA AL MAXIMO TUS HABILIDADES DOTERAS. </p>

                 </h1>

       <img src='spacer.jpg' className='spacer'/>

       

     </div>



     <section className="third-section">

         <div   className="third-section-large-header">

           <img src="swirl_bg.jpg" alt="sas" className="top-image" />



           <div className="third-section-intro-content">  

               <div className='absolute-social-c'>

                   <img src='social/social_insta.png' className='social-c'/>

                   <img src='social/social_twitter.png' className='social-c'/>

                   <img src='social/social_fb.png' className='social-c'/>

               </div>

               <div className='intro-content'> 

                       <div className="info-cont">

                           <img src='heros/shaman.png' className='info-img'/>

                           

                           

                       </div>

                       <div className="info-cont">

                           <img src='heros/shops.png' className='info-img'/>

                          

                           

                       </div>

                       <div className="info-cont">

                           <img src='heros/beast.png' className='info-img'/>

                           

                           

                       </div>

               </div>

               

           </div>

         </div>        

     </section>    



           

               

      </div>

    </div>



    <style jsx>{`

    @font-face {

        font-family: Geometrik Blk;

        src: url("font/geometric.ttf") format("opentype");

    }



    .aegis-background {

        width: 100%;

        height: 120%;

        object-fit: cover;

    }



    .section2-text {

        position: absolute;

        margin: 1rem 8rem;

    }



    .second-section {

        height: 100vh;

        margin-bottom: 9%;

    }

    .relative {

        position: relative;

    }



    .relative img {

        width: 100%;

        height: 100%;

        object-fit: cover;

    }

    .relative h1 {

        position: absolute;

        left: 30%;

        top: 20%;   

        text-shadow: 2px 2px 4px #000000;

        

    }



    .text-01 {

        top: 27%;

    }



    .text-02 {

        top: 27%;

        right: 0;

    }



    .text-03 {

        bottom: 0;

        left: 31%;

    }



    .section2-text h3 {

        text-shadow: 5px 5px 6px #000000;

        font-size: 2.2rem;

        font-family: Geometrik Blk, sans-serif;

    }



    .intro-content {

        display:flex;



    }



    .info-cont img {

        width: 350px;

        height: 350px;

        transition: all 0.3s ease;

    }



    .info-cont img:hover {

        background: -webkit-linear-gradient(#CEFCFF 10%, #2A748B 90%);

    background-clip: text;

    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

    filter: drop-shadow(0px 0px 30px #00a2ffaf);

    }



    .absolute-social-c {

        position: absolute;

        top: 0;

        left: 0;

        margin: 1rem 4rem;

    }



    .absolute-social-c img {

        margin: 1rem .5rem;

        width: 70px;

        cursor: pointer;

    }



    .absolute-social-c img:hover {

        filter: brightness(1.3);

    }

    `}</style>



    </>

    );

}



export default Home;