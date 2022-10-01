import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import Leftbar from '../components/LeftBar/Leftbar';
import Navbar from '../components/Navbar/Navbar';
import withAuth from '../interceptors/auth';
import StoreProvider from '../store/storeProvider';

const PaymentSuccess = () => {
    const router = useRouter();

    useEffect(()=>{
        if(router.query.error){
            Swal.fire({icon: 'error', text: router.query.error, backdrop: true}).then(()=>{
                router.push('/deposit');
            });
        }
    }, [router.query]);

    return (
        <>
            <div>
                <Navbar />
                <StoreProvider>
                    <div className='main--1'>
                    <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor  left-body-anchor-active'  c4='left-container-body-anchor' />
                        <div className='interface'>
                            
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
