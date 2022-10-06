import React from 'react';
import Leftbar from '../components/LeftBar/Leftbar';
import Navbar from '../components/Navbar/Navbar';
import PaymentReceived from '../components/paymentReceived/paymentReceived';
import withAuth from '../interceptors/auth';
import StoreProvider from '../store/storeProvider';

const PaymentSuccess = () => {
    return (
        <>
            <div>
                <Navbar />
                <StoreProvider>
                    <div className='main--1'>
                    <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor' />
                        <div className='interface'>
                            <PaymentReceived />
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

export default withAuth(PaymentSuccess);
