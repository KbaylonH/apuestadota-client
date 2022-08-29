import React from 'react';
import Leftbar from '../components/LeftBar/Leftbar';

import Navbar from '../components/Navbar/Navbar';
import With from '../components/with/with';
import withAuth from '../interceptors/auth';

const Withdraw = () => {
    return (
        <>
            <div>
                <Navbar />

                <div className='main--1'>
                    <Leftbar classWitdraw={'left-container-body-anchor left-body-anchor-active'}  c2={'left-container-body-anchor'} c3={'left-container-body-anchor'}  c4={'left-container-body-anchor'}/>
                    <div className='interface'>
                        <With/>

                        <img className='help-c' src='/icons/help-with-circ.svg'></img>
                    </div>
                    
                </div>
                
            </div>

        <style jsx>
        {`
        
            .mode-play {
                height: 100vh;
                overflow-y: hidden;
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


            @media (max-width: 768px) { 
            
            .mode-play {
                overflow-x: hidden;
                overflow-y: scroll;
            }
            .help-c {
                        margin-top: -60px;
                    }
    }
        `}
        </style>
        </>
    );
}

export default withAuth(Withdraw);
