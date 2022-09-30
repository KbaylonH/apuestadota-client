import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import AppService from '../../services/app.service';

const NavbarFirst = () => {

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
                    <Link href='/play'>
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
                            Deposito
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
      
        <div className='navbar main-navbar-desktop'>
            
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
                <button className="btn btn-md">Bienvenido { user.nickname }</button>
                <button className="btn outline" onClick={ ()=>{ logOut() } }>Salir</button>
            </div>}

            <div className='menu-button'>
                <a onClick={handleClick}>
                    <img src='/icons/menu-g.png' alt='menu'/>
                </a>
            </div>
        </div>
        </>
    );
}

export default NavbarFirst;
