import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Leftbar from '../components/leftBar/Leftbar';    

const Extra = () => {
    return (
        <>
            <div className='mode-play'>
            <Navbar />

                <div className='main--1'>
                <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor'/>
                    <div className='interface'>
                    
                        <img src='/randomw.jpg'/>
                    </div>
                    
                </div>
            </div>
    

    <style jsx>
    {`
    
        .mode-play {
            height: 100vh;
            overflow-y: hidden;
        }
        .main--1 {
            display: grid;
            grid-template-columns: 1fr 7fr;
           
        }
    `}
    </style>
    </>
  
    );
}

export default Extra;
