import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';

import { useState } from 'react';

import AppService from '../../services/app.service';


const Navbar = () => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const handleClick = event => {
        setIsOpen(current => !current);

    }


    const logOut = () => {
        localStorage.clear();
        location.href = "/";

    };
    useEffect(()=>{
        let s = new AppService();
        let _user = s.getUser();

        if(_user !== null) setUser(_user);
    

    }, []);
    return (
        <>
            <div className={isOpen ? 'menu-navigation-media' : 'media-navbar'}>



                <div className='menu-navigation-x'>



                    <img className='close-bw' src='/icons/close-b.png'  onClick={handleClick}/>



                </div>



                <div className='menu-navigation-links'>



                    <Link href='/start'>



                        <a className='anchor'>



                            Juega



                        </a>



                    </Link>



                    <Link href='/profile'>



                        <a className='anchor'>



                            Perfil



                        </a>



                    </Link>



                   <Link href='/deposit'>



                        <a className='anchor'>



                            Depósito



                        </a>



                   </Link>



                    <Link href='/withdraw'>



                        <a className='anchor'>



                            Retiro



                        </a>



                    </Link>

                    <Link href='/tutorial'>



                        <a className='anchor'>



                            Tutorial



                        </a> 



                    </Link>   



                    <Link href='/rules'>



                        <a className='anchor'>



                            Reglas



                        </a> 



                    </Link>



                </div>



                <hr className='nav-divider'></hr>


                { user == null && <div className='menu-navigation-btn'>



                    <Link href={'/login'}>



                        <a className='anchor'>



                            Ingresar



                        </a>



                    </Link>



                 </div> }



                { user !== null && <div className='menu-navigation-btn'>


                    <button className="btn outline" onClick={ ()=>{ logOut() } }>Salir</button>



                </div>}



            </div>



        <div className='navbar play-navbar'>



            <Link href={'/'}>



                <a>



                    <img src='/apuesta-logo.png' alt='logo' className='logo'/>



                </a>



            </Link>



            



            { user == null && <div className='log-buttons'>



                <Link href={'/login'}>



                    <a><button className="btn outline">Ingresar</button></a>



                </Link>



            </div> }







            { user !== null && <div className='log-buttons'>
                <div className={
                    user.dni_status === 2 ? 'profile-photo verified' 
                    : 'profile-photo noverified' }>
                    <Link href={'/profile'}>
                        <img src={user.foto} alt={user.dni_status}  className='round-profile-img' />
                    </Link>
                </div>
                <button className="btn btn-md">Bienvenido { user.nickname }</button>
                <button className="btn outline" onClick={ ()=>{ logOut() } }>Salir</button>
            </div>}


            <div className='menu-button'>


                <a onClick={handleClick}>



                    <img src='/icons/menu-g.png' alt='menu'/>



                </a>



            </div>



        </div>


<style jsx>{`
.log-buttons {
                display: flex;
                align-items: center;
            }

.profile-photo {
                width: 55px;
                height: 55px;
                overflow: hidden;
                border-radius: 50%;
                margin-right: 1.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .round-profile-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .verified { 
                border: 3px solid #B6FF40;
            }

            .noverified {
                border: 3px solid rgba(255,255,255,0.5);
            }

            .profile-photo:hover {
                border-color: #fff;
            }
           
`}
</style>

        </>



    );



}







export default Navbar;



