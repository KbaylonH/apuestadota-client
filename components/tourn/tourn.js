import React from 'react';

const Tourn = () => {
    return (
        <>
                    <div className="mode--solo">
                        <div className="mode--solo--c">
                            <div className="solo--title"> 
                                <h3>
                                    PARTICIPA EN NUESTROS TORNEOS
                                </h3>
                            </div>
                            <div className="solo--item">
                                {/* <!-- video --> */}
                                <div className="solo--item--i">
                                    <img src="../img-vid.jpg" alt="mode-solo" />
                                </div>
                                <div className="solo--item-content">
                                    <div className="solo--item-content-head">
                                        <span>lorem</span>
                                        <h2>lorem lorem</h2>
                                    </div>
                                    <div className="solo--item-content-desc">
                                        <p>Lorem ipsum dolor sit amet consectetur 
                                            adipisicing elit. Soluta ratione repudiandae molestias nemo. Molliti, 
                                          </p>
                                    </div>
                                    <div className="solo--item-content-button">
                                        <a href="#" className="solo--btn-c" id="openbutton">Iniciar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        {/* AQUI EMPIEZA TORNEO */}
                    <div className="tournament-cont">
                        <h4>Inscribete a nuestro torneo semanal</h4>
                        

                        <div className="tournament-grid grid-row-2">
                            <div className="card-container card-swe">
                                <div className="card-content">
                                    <div className="card-content-item">
                                        <h2>100 $</h2>
                                        <h3 className="card-title">Torneo semanal #2 de Agosto.</h3>
                                        <div className="card-status-container">
                                            <div className="card-status-s status-ok">
                                                Inscripciones abiertas
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-description">
                                    <div className="card-description-item"> 
                                        <p className="card-description-title">
                                            Registro hasta:
                                        </p>
                                        <span className="card-description-date">
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="TournamentListCardInfo__label"><path d="M5.5 7H6.5V9.5H5.5V10.5H8.5V9.5H7.5V6.5L7 6H5.5V7Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0.5V1.5H0.5V14.5H13.5V1.5H9.5V0.5H8.5V1.5H5.5V0.5H4.5ZM1.5 2.5H4.5V3.5H5.5V2.5H8.5V3.5H9.5V2.5H12.5V13.5H1.5V2.5Z" fill="currentColor"></path></svg>
                                            7 DE AGO DE 2022
                                        </span>

                    


                                        <p className="card-description-title">
                                            Monto de inscripcion:
                                        </p>
                                        <span className="card-description-date">
                                           <img src='/icons/dollar-sign-black.svg' className='dollar-sign-svg'></img>
                                            10 
                                        </span>
                                    </div>
                                    
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="card-footer-a  card-ff">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="PlusIcon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 9.25V0.25H11.25V9.25H20.25V10.75H11.25V19.75H9.75V10.75H0.75V9.25H9.75Z" fill="currentColor"></path></svg> 
                                        Mas Informacion
                                    </a>
                                    <button className="card-footer-button card-ff" type="button" ><svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H15.5V21.5H0.5V16.25H2V20H14V2H2V5.75H0.5V0.5ZM4.78033 6.71967L9.06066 11L4.78033 15.2803L3.71967 14.2197L6.18934 11.75H0.5V10.25H6.18934L3.71967 7.78033L4.78033 6.71967Z" fill="currentColor"></path></svg></button>
                                </div>
                            </div>
                            <img src='/heros/invoker.png' alt='Disruptor' className='hero-01-abs'/>
                            
                        </div>
                    </div>
                    <div className="tournament-cont">
                        <h4>Torneos en juego</h4>
                        
                        <div className="tournament-grid grid-row-1">
                            <div className='time-wrapper'>
                                    <h3>El torneo culmina en:</h3>
                                    <div className='digit-wrapper'>
                                        <span className='digit border-ww'>0</span>
                                        <span className='digit border-ww'>0</span>
                                        <span className='digit border-nn'>:</span>
                                        <span className='digit border-ww'>0</span>
                                        <span className='digit border-ww'>0</span>
                                        <span className='digit border-nn'>:</span>
                                        <span className='digit border-ww'>0</span>
                                        <span className='digit border-ww'>0</span>
                                    </div>
                            </div>
                            <div className="card-container card-der">
                            <img src='/heros/jugg-baby.png' alt='Juggernaut' className='hero-02-abs'/>
                                <div className="card-content">
                                    <div className="card-content-item">
                                        <h2>100 $</h2>
                                        <h3 className="card-title">Torneo semanal #1 de Agosto.</h3>
                                        <div className="card-status-container">
                                            <div className="card-status-s status-i">
                                                En proceso
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-description">
                                    <div className="card-description-item"> 
                                        <p className="card-description-title">
                                            Fecha de finalizacion:
                                        </p>
                                        <span className="card-description-date">
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="TournamentListCardInfo__label"><path d="M5.5 7H6.5V9.5H5.5V10.5H8.5V9.5H7.5V6.5L7 6H5.5V7Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0.5V1.5H0.5V14.5H13.5V1.5H9.5V0.5H8.5V1.5H5.5V0.5H4.5ZM1.5 2.5H4.5V3.5H5.5V2.5H8.5V3.5H9.5V2.5H12.5V13.5H1.5V2.5Z" fill="currentColor"></path></svg>
                                            7 DE AGO DE 2022
                                        </span>

                                        <p className="card-description-title">
                                            Cantidad de Inscritos:
                                        </p>
                                        <span className="card-description-date">
                                            <img src='/icons/person-svg.svg' className='dollar-sign-svg'></img>
                                            100
                                        </span>
                                    </div>
                                    
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="card-footer-a  card-ff">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="PlusIcon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 9.25V0.25H11.25V9.25H20.25V10.75H11.25V19.75H9.75V10.75H0.75V9.25H9.75Z" fill="currentColor"></path></svg> 
                                        Ver Tabla de posiciones
                                    </a>
                                      
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    <style jsx>
                    {`
                    .tournament-cont {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin: auto;
    width: 80%;
    margin-bottom: 50px;
    position: relative;
}

.hero-01-abs {
    
    height:600px;
    grid-area: 1 / 4 / 2 / 7;
    transform: translateY(-100px);
}

.hero-02-abs {
    position: absolute;
    height:180px;
    top: -140px;
    left: 190px;
}

.dollar-sign-svg {
    height: 15px;
    width: 14px;
    filter: invert(98%) sepia(100%) saturate(0%) hue-rotate(197deg) brightness(104%) contrast(102%);
    opacity: 0.7;
    margin-right: 8px;
}

.card-swe {
    grid-area: 1 / 2 / 2 / 4;
    margin-top: 15%;
}
.card-der {
    grid-area: 1 / 5 / 2 / 7;
    margin-top: 15%;
    position:relative;
}

.tournament-cont h4 {
   
  
  font-size: 2.25rem;
  font-family: 'Teko', sans-serif;
  text-transform: uppercase;

    margin-bottom: 80px;
    color:#fff;
    text-align: center;
}

.tournament-grid {
    display: grid;
    grid-template-rows: 1fr;
    background: rgb(15,28,48);
    background: linear-gradient(170deg, rgba(15,28,48,1) 66%, rgba(60,83,118,1) 100%);
    height: 500px;
    border-radius: 20px;
    
}
.grid-row-2 {
    
    grid-template-columns: repeat(6, 1fr);
}

.grid-row-1 {
    
    grid-template-columns: repeat(7, 1fr);
}



.card-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 21rem;
    height: 21.5rem;
    background: rgba(40, 42, 62 ,1);
    box-shadow: 0 .5rem 1rem rgba(22, 12, 12, 0.24), 0 1rem 2rem rgba(0, 0, 0, 0.16);
   
    border: 0.0625rem solid hsla(0,0%,100%,0.16);
    border-radius: 0.6rem;
   
    color: rgba(255, 255, 255,1);
}

.card-content {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 1rem;
    width: 100%;
    height: 11.5rem;
    background-image: linear-gradient( 180deg,rgba(40,42,62,0.32) 0%,rgba(40, 42, 62,1) 100% ),url("/torneo.jpg");
    background-position: center top;
    background-size: cover;
    box-sizing: border-box;
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
}

.card-content-item {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
.card-content-item h2 {
    color: #fff;
    transform-origin: center center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 72px;
    color: #B6FF40;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8),-1px -1px 0px rgba(0, 0, 0, 0.8);
}

.card-title{
    font-size: 0.75rem;
    font-family: 'Poppins';
    text-transform: inherit;
    text-align: center;
}

.card-status-container {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
}

.card-status-s {
    display: flex;
    border-radius: 0.125rem;
    
    white-space: nowrap;
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 0px 0.5rem;
    
    font-family: 'Poppins';
    cursor: default;
}

.status-ok {
    border: 0.0625rem solid #B6FF40;
    color: #B6FF40;
}

.status-i {
    border: 0.0625rem solid #f2ff40;
    color: #f2ff40;
}

.card-description {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 21rem;
    height: 5.5rem;
    border: 0.0625rem solid hsla(0,0%,100%,0.08);
}

.card-description-item {
    color: rgba(255,255,255,1);
    width: 100%;
}

.card-description-title {
    color: hsla(0,0%,100%,0.8);
    font-size: 0.75rem;
    font-family: 'Poppins';
    text-transform: uppercase;
}

.card-description-date {
    font-size: 0.75rem;
    font-family: 'Poppins';
    text-transform: uppercase;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.card-description-date svg {
    margin-right: 0.5rem;
}

.card-footer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1rem;
    margin: 0px auto;
    width: 21rem;
    height: 4.5rem;
}

.card-ff {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 0.0625rem solid hsla(0,0%,100%,.16);
    border-top: 0.0625rem solid hsla(0,0%,100%,.32);     
    border-radius: 0.125rem;
    white-space: nowrap;
    color: #fff;
    transition: background-color .25s linear;
}

.card-footer-a {
    background-color: rgba(33, 150, 253,1);
    height: 2.5rem;
    min-width: 2.5rem;
    padding-top: 0.25rem;
    text-transform: uppercase;
    line-height: 1.5rem;
    font-size: 1.25rem;
    font-family: Teko,sans-serif;
    font-weight: 400;
    width: 100%;
}

.card-footer-a:hover {
    background-color: rgb(27, 122, 205);
}
.card-footer-a svg {
    margin-right: 0.5rem;
}

.card-footer-button {
    margin-left: 0.75rem;
    padding: 0.5rem;
    background-color: #9cc00c;
}

.card-footer-button:hover {
    background-color: #728d0f;
}

.mode-create-tournament {
    background: rgba(217, 217, 217, 0.2);
    box-shadow: -25px 50px 40px rgb(0 0 0 / 25%);
    padding: 2rem 4rem 2rem 4rem;
    display: flex;
    
    justify-content: center;
    flex-direction: column;
    align-content: center;
}

.mode-create-tournament-item {
    padding: 0.6rem 4rem;
}

.mode-create-tournament-item label{
    margin-bottom: 0;
    padding: 0 5px;
    height: auto;
    min-height: 20px;
    color: #fff;
    font-size: 16px;
    position: relative;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 1;
    font-family: 'Roboto Mono', monospace;
}

.create-tournament-output {
    color: #fff;
    background-color: #191e2e;
    border-width: 2px;
    border-color: #313c60;
    width: 100%;
    display: block;
    height: 56px;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    border-radius: 0.25rem;
    font-size: 20px;
}

.time-wrapper {
    margin-top: 15%;
    grid-area: 1 / 2 / 2 / 4;
}
.digit-wrapper {
    margin-top: 30%;
    width: 400px;
}


.digit {
    font-family: 'Aldrich', sans-serif;
    display: inline-block;
    font-size: 80px;
    line-height: 1;
    
}

.border-ww {
    background-color: #3c5376;
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.8);
}
.border-nn {
  color: rgba(60,83,118,0.44);
}


                    `}</style>
        </>
    );
}

export default Tourn;
