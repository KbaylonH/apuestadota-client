import { React } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Leftbar from '../components/LeftBar/Leftbar';    
import ProfileSettings from '../components/profileSettings/ProfileSettings';
import withAuth from '../interceptors/auth';

const Profile = () => {

    return (
        <>
            <div>
                <Navbar />

                <div className='main--1'>
                <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor  left-body-anchor-active'/>
                    <div className='interface'>
                    
                        <ProfileSettings/>
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
            
            @media (max-width: 768px) { 
            
            .mode-play {
                overflow-x: hidden;
                overflow-y: scroll;
            }
        }
        @media (max-width: 375px) {
            .interface {
                width: 375px;
            }
        }
        `}
        </style>
        </>
      
    );
}

export default withAuth(Profile);
