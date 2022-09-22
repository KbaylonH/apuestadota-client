import React from 'react'
import Leftbar from '../components/LeftBar/Leftbar'
import Navbar from '../components/Navbar/Navbar'

export default function rules() {
  return (
    <>
        <div className='mode-play'>
            <Navbar />

            <div className='main--1'>
            <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor' c5='left-container-body-anchor '  c6='left-container-body-anchor  ' c7='left-container-body-anchor left-body-anchor-active'/>
                <div className='interface'>
                    <div>
                        <h2>Terminos y Condiciones</h2>

                        <h2>Reglas</h2>
                    </div>
                </div>
            </div>
        </div>
        <style jsx> {`


        `}</style>
    </>
  )
}
