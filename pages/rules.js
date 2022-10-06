import React from 'react'

import Layout from './layout';


export default function rules() {

    

    const date = new Date();
    const b = date.toLocaleDateString('en-GB');

  return (

    <>

        <Layout>
                    <div className='interface'>

                        <div className='rules-container'>

                            <h2 className='rules-title'>Términos y Condiciones</h2>
                            <p>Actualizado al {b}.  </p>
                            
                            <div className='terms-link-container'>
                                <img src='/pdf-blue.png' className='terms-img' />
                                <a href='/terms-apuestadota.pdf' target={'_blank'} className='terms-link'>Terminos y condiciones - Apuestadota.com</a>
                            </div>
                        </div>

                    </div>

        </Layout>


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

    text-shadow: 2px 2px 2px #000;
}

.rules-container p {
    margin-bottom: 4rem;
}

.terms-link-container {
    padding: 1rem 2rem;
    background-color: #b6ff40;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 540px;
    border-radius: 20px;
    transition: all 0.3s ease;
}
.terms-link-container:hover {
    background-color: #fff;
}

.terms-link {
    color: #000;
    font-family: Bebas Neue,cursive;
    font-size: 26px;
}


@media screen and (max-width: 500px) {
    .terms-link {
        font-size: 20px;
    }
    .terms-link-container {
        width: 100%;
        padding: 1rem;
    }
}


        `}</style>

    </>

  )

}

