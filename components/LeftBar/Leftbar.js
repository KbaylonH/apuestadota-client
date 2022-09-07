import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AppService from '../../services/app.service';

const Leftbar = (classWitdraw, c2, c3, c4) => {

    const [saldo, setSaldo] = useState("0.00");

    useEffect(()=>{
        let s = new AppService();
        if(s.getUser() !== null){
            s.makeGet('saldo', {}, true).then(res=>{
                setSaldo(res.data.saldo);
            });
        }
    }, []);

    return (
        <>
            <div className="left-container">
            <div className="left-container-header">
                <div className="pad--s">
                    <h3 className="left-container-h3">Tu Saldo:</h3>
                    <h3 className="left-container-h3 left-flex-container-h"> <img src='/icons/currency-usd-g.png' className='dollar--svg'></img><span className="fontw-l"> { saldo }</span></h3>
                </div>

                <Link href={'/extra'}>
                    <img src='/icons/right-arrow-svg.svg' className='right-arrow--svg'></img>
                </Link>
                
            </div>
            <div className="left-container-body">
                <div className="left-container-body-item">
                    <Link href="/play">
                        <a className={classWitdraw.c2}>
                            <img className="left-container-img left-img-active" src="/icons/controller-classic-l.png" alt="home" /> 
                            <h3 className="left-container-h3 left-h3-active">JUEGA</h3>
                        </a>
                    </Link>
                </div>
                <div className="left-container-body-item">
                    <Link href="/profile">
                        <a className={classWitdraw.c4} >
                            <img  className="left-container-img left-img-active" src="/icons/account-l.png" alt="home" /> 
                            <h3 className="left-container-h3  left-h3-active">PERFIL</h3>
                        </a>
                    </Link>
                </div>
                <div className="left-container-body-item">
                    <Link href="/deposit"> 
                        <a className={classWitdraw.c3}>
                            <img className="left-container-img left-img-active" src="/icons/cash-fast-l.png" alt="home" /> 
                            <h3 className="left-container-h3 left-h3-active">DEPOSITO</h3>
                        </a>
                    </Link>
                </div>
                <div className="left-container-body-item">
                    <Link href="/withdraw">
                        <a className={classWitdraw.classWitdraw} >
                            <img className="left-container-img left-img-active" src="/icons/currency-usd-l.png" alt="home" /> 
                            <h3 className="left-container-h3 left-h3-active">RETIRO</h3>
                        </a>
                    </Link> 
                </div>
                <div className="left-container-body-item disable">
                    <a href="../../pages/solo/solo.html">
                        <img className="left-container-img" src="icons/alert-outline-l.png" alt="home" /> 
                        <h3 className="left-container-h3">SOPORTE</h3>
                    </a>
                </div>
                <div className="left-container-body-item disable">
                    <a href="../../pages/solo/solo.html">
                        <img className="left-container-img" src="icons/help-box-l.png" alt="home" /> 
                        <h3 className="left-container-h3">TUTORIAL</h3>
                    </a>
                </div> 
                {/* <div className="left-container-body-item bottom-icon">
                    <Link href="/">
                    <a>
                        <img className="left-container-img" src="/icons/logout-l.png" alt="home" />   
                    </a>
                    </Link>
                </div> */}
                
            </div>
        </div>

        <style jsx> 
        {`
        
        .dollar--svg {
            height: 25px;
                 }
       

        .right-arrow--svg {
            height: 18px;
            filter: invert(100%) sepia(19%) saturate(6900%) hue-rotate(23deg) brightness(98%) contrast(108%);
            padding-right: 10px;
            align-self:center;
            cursor: pointer;
        }
        .left-flex-container-h {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .disable {
            pointer-events: none;
        }
        .left-container {
            /* border-right: 1px solid #ffffff; */
            background-color: #081325;
            border-right: 1px solid #3c5376!important;
            box-shadow: inset 0 -1px hsl(0deg 0% 100% / 10%), 8px 0 16px -4px rgb(0 0 0 / 75%);
            -webkit-box-shadow: inset 0 -1px hsl(0deg 0% 100% / 10%), 8px 0 16px -4px rgb(0 0 0 / 75%);
            position: relative;
            z-index: 4;
        }
        .interface {
            min-height: 62.5rem;
            
            background-color: rgba(22, 23, 36 ,1);
            background-image: url(https://assets.gamersclub.com.br/csgo-frontend/static/media/Background.9db68e3a.png);
            background-position: center top;
            background-size: 100%;
            background-repeat: no-repeat;

            overflow: auto;
        }

        .left-container-header {
            background: #171f30;
            border-bottom: 1px solid #3c5376;
            /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
            padding-top: 15px;
            padding-bottom: 15px;
            display: flex;
            justify-content: space-between;
        }
        .pad--s {
            padding: 1rem 3rem 1rem 1.5rem;
        }

        .fontw-l {
            font-weight: lighter;
        }
        .left-container-body-item {
            padding-left: 0.7rem;
            padding-right: 1rem;
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
        }

        .left-container-body-item a {
            padding: 0.7rem 1rem;
            
            border-radius: 20px;
        }


        .left-container-body-item:hover .left-container-body-anchor{
            background-color: #3c5376;
            
        }

        .left-container-body-item:hover .left-container-h3 {
            color: #fff;
        }
        

        .left-body-anchor-active {
            background-color: #3c5376;
        }


        .left-body-anchor-active .left-h3-active {
            color: #fff!important;
        }


        .left-body-anchor-active .left-img-active {
            filter: brightness(0%) invert(100%);
        -webkit-filter: brightness(0%) invert(100%);
        -moz-filter: brightness(0%) invert(100%);
        }

        .left-container-body-item:hover .left-container-img {
            filter: brightness(0%) invert(100%);
        -webkit-filter: brightness(0%) invert(100%);
        -moz-filter: brightness(0%) invert(100%);
        }

        .left-container-h3 {
            font-size: 14px;
            font-weight: 400;
            color: rgb(146, 162, 190);
            margin-top: 2px;
        }

        .left-container-body-item a {
            display: flex;
            gap: 10px;
        }



        .bottom-icon {
            position: absolute;
            bottom: 5px;
        }

        .bottom-icon img {
            height: 30px;
        }


        @media screen and (max-width: 767px) {
  .left-container {
    display: none;
  }
}


        `}</style>
 

    </>
    );
}

export default Leftbar;
