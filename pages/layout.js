import React from 'react';
import Head from 'next/head';
import Leftbar from '../components/LeftBar/Leftbar';

import Navbar from '../components/Navbar/Navbar';

import StoreProvider from '../store/storeProvider';


const Layout = (props) => {
    return (
        <>
        <Head>

            <title>Juega y Gana</title>

            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <link rel="shortcut icon" href="/icons/favicon/favicon-32.png" />

        </Head>
         <StoreProvider>
                <div className='mode-play'>
                    <Navbar />
                        
                        <div className='main--1'>
                            <Leftbar/>
                            {props.children}
                            </div>
                        
                </div>
                </StoreProvider>
                <style jsx>
                {`
                
                    .mode-play {
                        height: 100vh;
                        
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
};



export default Layout;
