import React from 'react';
import Dep from '../components/deposit/dep';
import Leftbar from '../components/LeftBar/Leftbar';
import Navbar from '../components/Navbar/Navbar';
import withAuth from '../interceptors/auth';

const Deposit = () => {
    return (
        <>
            <div>
                <Navbar />

                <div className='main--1'>
                <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor  left-body-anchor-active'  c4='left-container-body-anchor'/>
                    <div className='interface'>
                        <Dep/>
                        
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
                background-image: url('/heros/cristal.jpg');
            }
           
            @media (max-width: 768px) { 
            
                .mode-play {
                    overflow-x: hidden;
                    overflow-y: scroll;
                }
              
        }
        `}
        </style>
        </>
    );
}

export default withAuth(Deposit);
