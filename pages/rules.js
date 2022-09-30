import React from 'react'
import Leftbar from '../components/LeftBar/Leftbar'
import Navbar from '../components/Navbar/Navbar'
import StoreProvider from '../store/storeProvider'

export default function rules() {
  return (
    <>
        <div className='mode-play'>
            <Navbar />
            <StoreProvider>
                <div className='main--1'>
                <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor' c5='left-container-body-anchor '  c6='left-container-body-anchor  ' c7='left-container-body-anchor left-body-anchor-active'/>
                    <div className='interface'>
                        <div className='rules-container'>
                            <h2 className='rules-title'>Terminos y Condiciones</h2>

                            <h2 className='rules-title'>Reglas</h2>
                        </div>
                    </div>
                </div>
            </StoreProvider>
        </div>
        <style jsx> {`
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
.rules-container {
    padding: 2rem;
}
.rules-title {
    font-family: 'Teko', sans-serif;
    font-size: 3.5rem;
}

        `}</style>
    </>
  )
}
