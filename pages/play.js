import React, { useEffect } from 'react';
import Link from 'next/link';
import Leftbar from '../components/LeftBar/Leftbar';
import Navbar from '../components/Navbar/Navbar';
import Solo from '../components/solo/solo';
import AppService from '../services/app.service';
import { Router, useRouter } from 'next/router';
import withAuth from '../interceptors/auth';

const Play = () => {

    const router = useRouter();

    return (
        <>
                <div className='mode-play'>
                    <Navbar />
                    <div className='main--1'>
                        <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor left-body-anchor-active' c3='left-container-body-anchor'  c4='left-container-body-anchor'/>
                        <div className='interface'>
                            <div className='modes-container'>
                                <Link href={'/play'}>
                                    <div className='mode-test mode-active item-01' id='item01'>
                                        <h4 className="subtitle-active">RANKED INDIVIDUAL</h4>
                                    </div>
                                </Link>
                                <Link href={'/party'}>
                                <div className="mode-test mode-unactive  item-02" id='item02'> 
                                    <div className='ribbon ribbon--light'> <span>Pronto!</span></div>    
                                    <h4 >MODO 5 VS 5</h4>                 
                                </div> 
                                </Link>
                                <Link href={'/tournament'}> 
                                <div className="mode-test mode-unactive  item-03" id='item03'>   
                                <div className='ribbon ribbon--light'> <span>Pronto!</span></div>      
                                    <h4>TORNEO RANKED</h4>          
                                </div>
                                </Link>
                            </div>
                            <Solo active1={true} active2={false} active3={false}/>
                        </div>
                    </div>
                </div>
                

                <style jsx>
                {`
                
                    .mode-play {
                        height: 100vh;
                        overflow-y: hidden;
                    }
                    
                    .interface {
                        overflow: hidden;
                        
                    }
                    .ribbon {
                        position: absolute;
                        right: -5px;
                        top: -8px;
                        z-index: 1;
                        overflow: hidden;
                        width: 110px;
                        height: 65px;
                        text-align: right;
                    }
                    .ribbon span {
                        font-size: 0.7em;
                        font-weight: bold;
                        color: #efefef;
                        text-transform: uppercase;
                        text-align: center;
                        line-height: 20px;
                        transform: rotate(45deg);
                        -webkit-transform: rotate(45deg);
                        width: 80%;
                        display: block;
                        background: rgba(15,28,48,1);
                        background: linear-gradient(rgba(15,28,48,1) 0%, #2F3333 100%);
                        box-shadow: 0 3px 10px -5px #000F;
                        position: absolute;
                        top: 27%;
                        right: -19%; 
                        }
                        .ribbon span::before {
                            content: "";
                            position: absolute;
                            left: 0px;
                            top: 96%;
                            z-index: -1;
                            border-left: 3px solid rgba(60,83,118,1);
                            border-right: 3px solid transparent;
                            border-bottom: 3px solid transparent;
                            border-top: 3px solid rgba(60,83,118,1);
                        }
                        .ribbon span::after {   
                            content: "";
                            position: absolute;
                            right: 4px;
                            top: 102%;
                            z-index: -1;
                            border-left: 3px solid transparent;
                            border-right: 3px solid rgba(60,83,118,1);
                            border-bottom: 3px solid transparent;
                            border-top: 3px solid rgba(60,83,118,1);
                        }

                        @media (max-width: 768px) {
                        .mode-play {
                            overflow-y: scroll;
                        }
                       
                       
                        }
                   
                `}
                </style>
        </>
    );
}

export default withAuth(Play);
