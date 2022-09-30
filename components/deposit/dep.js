import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link';



import AppService from '../../services/app.service';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



const Dep = () => {



    const [usuarioId , setUsuarioId] = useState();

    const [user, setUser] = useState({});

    const [codRef, setCodRef] = useState({});

    const [baseURL, setBaseURL] = useState(null);




    useEffect(()=>{

        let s = new AppService();

        setBaseURL( s.getBaseUrl() );

        s.makeGet('profile', {}, true).then(res=>{

          setUser(res.data);

        });

    }, []);



    const methods = [

        {id:'izipay', img_url: '/icons/methods/visa-mastercard.png', label: 'Pago con tarjeta'}, 

        {id:'paypal', img_url: '/icons/methods/paypal.png', label: 'Paypal'}];

       

    const [metodo, setMetodo] = useState('izipay');

    const [monto, setMonto] = useState(0);



    const [mouse, setMouse] = useState(true);

    const  refM = useRef(null);

    const  refCR = useRef(null);



    const selectMetodo = (metodo) => {    

        setMetodo(metodo);

    }



    const handleChange = (e) => {

        e.preventDefault();

        const amount = refM.current.value;

         setMonto(amount);

    }



    const handleCodRefChange = (e) => {

        e.preventDefault();

        const cod_ref = refCR.current.value.toString().toUpperCase();

        setCodRef(cod_ref);

    }



    const handleMouseEnter = (e) => {

        setMouse(!mouse);

    }

    





    return (

        <>

        { user.email == null ? 

            <>

            <div className="need-to-container">

                    <h2 className='intro-title'> Te hace falta registrar tus datos</h2>



                    <Link href='/profile'>

                        <div className={mouse ? 'return-btn' : 'return-btn return-btn-hover'}> Haz click aquí para terminar tu registro</div>

                    </Link>

            </div>   



            <div className="withdraw-container"  >

                <div className="withdraw-container-before"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}> </div>

                            <h4> Hola <span>{user.nickname}</span>, haz tu deposito:</h4>

                            <div className='withdraw-flex'>

                                <div className='withdraw-flex-payment-method'>

                                { methods.map((item)=>{

                            return  <div key={`metodo_${item.id}`} onClick={ ()=>{

                                selectMetodo(item.id);

                            }} className={`method-item ${ metodo == item.id ? '' : 'withdraw-unacive' }`}>

                                <img src={item.img_url} alt={item.label} />

                                {item.label}

                            </div>

                        })}                           

                                </div>

                                { metodo != 'izipay' ?

                                    <div className='withdraw-flex-payment-main paypal-method'>

                                        <div className='withdraw-flex-payment-main-item'>

                                            <label htmlFor="amount">Monto:</label>

                                            <input type="number" id="amount" name="amount" ref={refM} onChange={handleChange}/>

                                        </div>

                                        <PayPalScriptProvider options={{ "client-id": "test" }}>

                                            <PayPalButtons

                                                style={{ layout: "horizontal" }}

                                               

                                            />

                                        </PayPalScriptProvider>

                                        </div> 



                                    :

                                    <div className='withdraw-flex-payment-main'>                          

                                        <form className='widthdraw-form' method='post' action='http://localhost/test/pagoIncrustado.php'>

                                            

                                            <div className='withdraw-flex-payment-main-item'>

                                            <input type='hidden' name='userId' value={usuarioId} />

                                                <label htmlFor="amount">Monto:</label>

                                                <input type="number" id="amount" name="amount" ref={refM} onChange={handleChange}/>

                                            </div>



                                            <button className='btn-submit-dep' type='submit' >Depositar</button>

                                        </form>                                           

                                    </div> 



                                    }                       

                            </div>

                    </div>

            </>

        :

        <>

            <div className="withdraw-container"  >

                <h4> Hola <span>{user.nickname}</span>, haz tu deposito:</h4>

                <div className='withdraw-flex'>

                    <div className='withdraw-flex-payment-method'>

                        { methods.map((item)=>{

                            return  <div key={`metodo_${item.id}`} onClick={ ()=>{

                                selectMetodo(item.id);

                            }} className={`method-item ${ metodo == item.id ? '' : 'withdraw-unacive' }`}>

                                <img src={item.img_url} alt={item.label} />

                                {item.label}

                            </div>

                        })}                           

                    </div>

                    { metodo != 'izipay' ?

                    <div className='withdraw-flex-payment-main paypal-method'>

                        <div className='withdraw-flex-payment-main-item'>

                            <label htmlFor="amount">Monto:</label>

                            <input type="number" min="1" id="amount" name="amount" ref={refM} onChange={handleChange}/>

                        </div>

                        <div className='withdraw-flex-payment-main-item'>

                            <label htmlFor="cod_ref">Código de Referido:</label>

                            <input type="text" id="cod_ref" name="cod_ref" ref={refCR} onChange={handleCodRefChange}/>

                        </div>

                        <PayPalScriptProvider options={{ "client-id": "test" }}>

                            <PayPalButtons

                                style={{ layout: "horizontal" }}

                            />

                        </PayPalScriptProvider>

                    </div> 

                    :

                    <div className='withdraw-flex-payment-main'>                          

                        <form className='widthdraw-form' method='POST' action={ baseURL + '/depositar' }>

                            <input type='hidden' name='api_token' value={user.api_token} />

                            <input type='hidden' name='proveedor' value='izipay' />

                            <div className='withdraw-flex-payment-main-item'>

                                <label htmlFor="amount">Monto:</label>

                                <input type="number" id="amount" name="monto" ref={refM} onChange={handleChange}/>

                            </div>

                            <div className='withdraw-flex-payment-main-item'>

                                <label htmlFor="cod_ref">Código de Referido:</label>

                                <input type="text" id="cod_ref" name="ref_code" ref={refCR} onChange={handleCodRefChange} maxLength={20}/>

                            </div>

                            <button className='btn-submit-dep' type='submit'>Depositar</button>

                        </form>                                           

                    </div> 

                    }                    

                </div>

            </div>

        </>

        }

        <style jsx>

            {`



            .need-to-container {

                display: flex;

                flex-direction: column;

                justify-content: center;

                align-items: center;
            }


            .return-btn {

                background-color: #B6FF40;

                font-family: 'Roboto Mono', monospace;

                font-size: 14px;

                padding: .7rem 1rem;

                border-radius: 20px;

                font-weight: 600;

                color:#3c5376;

                cursor: pointer;

                transition: all .3s ease;

                box-shadow: 4px 4px 18px 0px rgba(0,0,0,0.75);

                -webkit-box-shadow: 4px 4px 18px 0px rgba(0,0,0,0.75);

                -moz-box-shadow: 4px 4px 18px 0px rgba(0,0,0,0.75);

            }

            .return-btn:hover {

                background-color: #3c5376;
                color: #fff;

            }

            .return-btn-hover {
                animation: myAnim 1.5s ease 0s infinite normal forwards;
            }

            @keyframes myAnim {

                0%,
                50%,
                100% {
                    background-color: #3c5376;
                    color: #fff;
                }
                25%,
                75% {
                    background-color: #B6FF40;
                    color:#3c5376;
                }
            }

            .intro-title {
                padding: 2rem;
                font-size: 3.5rem;
                font-family: 'Poppins';
            }


            .withdraw-container {

                max-width: 800px;
                position: relative;
                margin: 2rem auto 0;
                padding: 2rem;
                background-color: #131e2fd9;
                border-radius: 10px;
                position: relative;
            }

            .withdraw-container-before{

                content: '';

                position: absolute;

                top: 0;

                left: 0;

                width: 100%;

                height: 100%;

                backdrop-filter: blur(2px);

                border-radius: 10px;

                z-index: 9;

            }


            .withdraw-container h4 {

                color:#fff;
                font-size: 1.3rem;
                font-family: 'Roboto Mono', monospace;
                margin-bottom: 1rem;

            }

            .withdraw-flex {

                display:flex;
                width:100%;
    

            }

            .withdraw-flex-payment-method {        

                display: flex;

                flex-direction: column;

                gap: 20px;

                font-family: 'Teko', sans-serif;

                color: #fff;

                width: 33%;    

            }

            .method-item {

                display:flex;

                flex-direction: row;

                align-items: center;

                gap: 10px;

                padding: 1rem;

                cursor:pointer;

                 background-color: rgba(255,255,255,.9);

                border-radius: 8px;

                color: #000;
            }



            .method-item:hover {

                background-color: #fff;

                border-radius:8px;

            }

            .method-item img {

                width: 85px;

                border-radius: 8px;

            }



            .widthdraw-form {

                width: 400px;

                display: flex;

                flex-direction: column;

                align-items: center;

                padding-top: .5rem;

            }



            .text-t {

                color: rgba(255,255,255,.6);

                font-family: 'Teko', sans-serif;

                margin-top: 1rem;

            }



            .withdraw-flex-payment-main {

                padding: 1rem;

            }

            .withdraw-flex-payment-main-item {

                margin-bottom: .8rem;

                display: flex;

                flex-direction: column;

                gap: 5px;

            }



            .withdraw-flex-payment-main-item label {

                color: rgba(255,255,255,0.5);

                font-family: 'Teko', sans-serif;

            }

            .withdraw-flex-payment-main-item input {  

                border-radius: 8px; 

                background-color: #1F2E44;

                border: none;

                height: 30px;

                color: #fff;

                padding: 0.5rem;

                margin-left: 1rem;

            }



            .wallet-container {

                width: 300px;

                margin-left: 0!important;

            }

            .withdraw-flex-payment-main-item input:focus {

                font-family: 'Roboto Mono', monospace;

                outline: none;

                background-color: #3c5376;

            }







            .btn-submit-dep {

position: relative; 

padding: 1rem;

margin: 2.5rem 2rem;

background-color: #B6FF40;

color: #000;   

border-radius: 4px;

font-family: 'Roboto Mono', monospace;

font-size: 16px;

transition: all .3s ease;

}



.btn-submit-dep:hover {

background-color: transparent;

color: #B6FF40;

border: 2px solid #b6ff40;

}



.paypal-method {

padding: 5rem;

width: 64%;

}





@media screen and (max-width: 485px) {

.intro-title {

font-size: 2rem;

}

.withdraw-container {

max-width: 480px;

}

.withdraw-flex {

flex-direction: column;

}

.withdraw-flex-payment-method {

flex-direction: row;

}

.method-item img {

width: 75px;

}

}
            `}

        </style>

        </>

    );

}



export default Dep;

