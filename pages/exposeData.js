import React from 'react';

import Leftbar from '../components/LeftBar/Leftbar';

import Navbar from '../components/Navbar/Navbar';



import StoreProvider from '../store/storeProvider';

const ExposeData = () => {
    return (

        <>

            <div>

                <Navbar />

                <StoreProvider>

                    <div className='main--1'>

                    <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor' />

                        <div className='interface'>

                            <div id='video'>
                            <video muted autoPlay loop className='video-bf'>

                                <source src="/tutorial/tutorialvideo02.mp4" type="video/mp4" />
                            </video>
                            </div>

                        </div>

                        

                    </div>

                </StoreProvider>

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

            .video-bf {
                width: 100%;
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

export default ExposeData;
