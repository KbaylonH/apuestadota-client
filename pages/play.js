import React from 'react';

import Leftbar from '../components/LeftBar/Leftbar';
import Navbar from '../components/Navbar/Navbar';
import Solo from '../components/solo/solo';
import StoreProvider from '../store/storeProvider';


const Play = () => {


    return (
        <>
                <div className='mode-play'>
                    <Navbar />
                    <StoreProvider>
                        <div className='main--1'>
                            <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor left-body-anchor-active' c3='left-container-body-anchor'  c4='left-container-body-anchor' c5='left-container-body-anchor' c6='left-container-body-anchor'/>
                            <div className='interface'>
                                
                                <Solo/>
                            </div>
                        </div>
                    </StoreProvider>
                </div>
                

                <style jsx>
                {`
                
                    .mode-play {
                        height: 100vh;
                       
                    }
                    
                    .interface {
                        overflow: hidden;
                        background-image: linear-gradient(
                        0deg,
                        hsl(236deg 24% 11%) 0%,
                        hsl(233deg 24% 13%) 24%,
                        hsl(231deg 23% 15%) 42%,
                        hsl(229deg 23% 17%) 56%,
                        hsl(228deg 23% 18%) 66%,
                        hsl(226deg 23% 20%) 75%,
                        hsl(224deg 23% 22%) 81%,
                        hsl(223deg 23% 24%) 87%,
                        hsl(221deg 24% 25%) 92%,
                        hsl(220deg 24% 27%) 100%
                        );
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

//export default withAuth(Play);
export default Play;