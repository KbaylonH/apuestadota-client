import React, { useState } from 'react';
import Swal from 'sweetalert2';
import AppService from '../../services/app.service';

const Dep = () => {

    const montos = [10, 25, 50, 100];

    const metodos = [
        {id: 'visa', label: 'Visa', img_url: '/visa-svg.svg'},
        {id: 'mastercard', label: 'Mastercard', img_url: '/mastercard-svg.svg'},
        {id: 'bitcoin', label: 'Bitcoin', img_url: '/bitcoin-svg.svg'},
        {id: 'bank', label: 'Depósito', img_url: '/bank-svg.svg'}
    ];

    const [metodo, setMetodo] = useState('visa');
    const [monto, setMonto] = useState(0);

    const handleInputMonto = event => {
        setMonto( event.target.value );
    }

    const selectMetodo = (metodo) => {
        setMetodo(metodo);
    }

    const depositar = () => {
        if(monto < 10 || monto > 2000){
            Swal.fire({
                text: 'El monto a depositar debe ser entre $10 a $2000',
                icon: 'error'
            });
            return;
        }

        Swal.fire({
            text: `¿Deseas realizar el depósito de ${ monto } por ${ metodo } ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, depositar',
            cancelButtonText: 'Cancelar'
        }).then(result=>{
            if(result.isConfirmed){
                let s = new AppService();
                s.makePost('depositar', {metodo: metodo, monto: monto}, true).then(resp=>{
                    if(resp.data?.transaccion){
                        Swal.fire({
                            text: 'Depósito realizado con éxito',
                            icon: 'success'
                        }).then(()=>{
                            setTimeout(() => {
                                location.reload();                            
                            }, 1000);
                        });
                    }
                }).catch(error=>{
                    Swal.fire({
                        text: 'Hubo un error al realizar el depósito',
                        icon: 'error'
                    });
                });
            }
        });
    };


    return (
        <>
                    <h2 className="intro-title">
                        DEPOSITAR.
                    </h2>      
                    <div className="deposit-container">
                        { metodos.map((item)=>{
                            return  <div key={`metodo_${item.id}`} onClick={ ()=>{
                                selectMetodo(item.id);
                            }} className={`deposit-container-item ${ metodo == item.id ? '' : 'withdraw-unacive' }`}>
                                <img src={item.img_url} alt={item.label} />
                            </div>
                        })}
                    </div>

                    <div className="deposito-min-max">
                        <h4>Pago con { metodos.find(i=>i.id == metodo).label }</h4>
                        <div className='deposit-min-max-sl'>
                            <h4><span className="green-b">min. </span>10 USD </h4>
                            <h4><span className="green-b">max.</span> 2000 USD </h4>
                        </div>
                    </div>

                        
                    <h4 className="intro-subtitle">
                        Monto a depositar:
                    </h4>  

                    <div className="deposit-amount">
                        { montos.map((item)=>{
                            return <div key={`monto_${item}`} className={`deposito-amonunt-item ${ monto == item ? '' : 'withdraw-unacive' }`} onClick={ ()=>{ setMonto(item) } }>
                                <h4>{ item.toFixed(2) }</h4>
                            </div>
                        })}
                        <div className="deposito-amonunt-item">
                            <input type="number" placeholder="Ingresar Monto" onChange={handleInputMonto} value={monto} />
                        </div>
                    </div>
                    

                    <div className='deposit-terms-container'>
                        <span className='deposit-terms-c w-conditions'>Acepto los <a className='w-conditions underline'>terminos y condiciones</a></span>
                        <button className="deposit-btn-submit" onClick={()=>{
                            depositar();
                        }}>Depositar</button>
                        <a className='w-conditions underline m-left m-bot'> Politica de pago</a>
                    </div>
                    

                    <style jsx>
                    {`

                    .intro-title {
                        padding: 2rem;
                        font-size: 3.5rem;
                        font-family: 'Poppins';
                    }
                                        .intro-subtitle {
                        font-size: 23px;
                        padding: 2rem;
                        color: #fff;
                        font-family: 'Roboto Mono', monospace;
                    }
                .deposit-container-item img {
                    height:70px;
                }

                .deposit-active {
                    border: 5px solid rgb(6, 255, 89);
                }

                .deposit-active img {
                    object-fit:contain;
                    width: 100%;
                    height: 100%;
                }

                .deposit-amount {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    padding-left: 2rem;
                }

                .deposit-amount div {
                    background: #131E2F;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    padding: 10px;
                }

                .deposit-amount div h4 {
                    font-family: 'Roboto Mono', monospace;
                    color: #fff;
                }

                .deposito-amonunt-item {
                    width: 120px;
                    height: 50px;
                    position: relative;
                    cursor: pointer;
                }

                .deposito-amonunt-item h4 {
                    text-align: center;
                }

                .deposito-amonunt-item span {
                    position: absolute;
                    top: -40%;
                    color: rgb(136, 136, 136);
                }

                .deposito-amonunt-item:last-child {
                    width: 170px;
                }

                .deposito-amonunt-item input {
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    border: none;
                    color: #fff;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 16px;
                    font-weight: 600;
                }
                .deposito-min-max {
                    background: #131E2F;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    margin: 3rem 2rem;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                }
                .deposito-min-max h4 {
                    color: #fff;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 16px;
                    font-weight: 600; 
                }
                .deposit-min-max-sl {
                    display:flex;
                    gap: 10px;
                }
                .deposit-terms-c {
                    margin-left: 2rem;
                    margin-top: 2rem;
                }
                
                .deposit-terms-container {
                    display: flex;
                    flex-direction: column;
                    align-items: start;    
                }

                @media (max-width: 768px) {
                    .intro-title {
                        font-size: 3rem;
                    }
                    .deposit-container {
                        flex-direction: column; 
                        margin-left: 30%;
                    }
                    .deposito-min-max {
                        width: 90%;
                }
                    .deposit-amount {
                        flex-wrap: wrap;
                    }

                }

                @media (max-width: 480px) {
                    .deposit-container {
                        margin-left: 27%;
                    }
                    .deposito-min-max {
                        margin: 3rem 1rem 2rem;
                    }
                    .deposito-min-max h4 {
                        font-size: 12px;
                    }

                    .deposit-amount h4 {
                        font-size: 14px;    
                    }

                  
                }


                    `}
                    </style>
        </>
    );
}

export default Dep;
