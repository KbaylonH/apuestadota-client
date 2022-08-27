import React from 'react';

const With = () => {
    return (
        <>
                    <h2 className="intro-title">
                        RETIRO DE FONDOS.
                    </h2> 

                    <div className="deposit-container">
                        <div className="deposit-container-item" id="method01">
                            <img src="/visa-svg.svg" alt="visa" />
                        </div>
                        <div className="deposit-container-item withdraw-unacive" id="method02">
                            <img src="/mastercard-svg.svg" alt="visa" />
                        </div>
                        <div className="deposit-container-item withdraw-unacive" id="method03">
                            <img src="/bitcoin-svg.svg" alt="visa" />
                        </div>
                       <div className="deposit-container-item withdraw-unacive" id="method04">
                            <img src="/bank-svg.svg" alt="visa" />
                        </div> 
                    </div>


                    <div className="deposito-min-max">
                        <h4>Retiro con Visa</h4>
                        <div className='deposit-min-max-sl'>
                            <h4><span className="green-b">min. </span>10 USD </h4>
                            <h4><span className="green-b">max.</span> 2000 USD </h4>
                        </div>
                    </div>
                    
                        
                    <h4 className="intro-subtitle">
                        Monto de retiro:
                    </h4>  

                    <div className="deposit-amount">
                        <div className="deposito-amonunt-item">
                            <h4>
                                10$
                            </h4>
                            
                        </div>
                        <div className="deposito-amonunt-item">
                            <h4>
                                25$
                            </h4>
                        </div>
                        <div className="deposito-amonunt-item">
                            <h4>
                                50$
                            </h4>
                        </div>
                        <div className="deposito-amonunt-item">
                            <h4>
                                100$
                            </h4>
                        </div>
                        <div className="deposito-amonunt-item">
                            <input type="number" placeholder="Ingresar Monto" />
                        </div>
                    </div>

                    <div>
                        <button className="deposit-btn-submit">Retirar</button>
                    </div>

                    <a className='w-conditions m-left underline m-bot'> Condiciones de Retirada</a>
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
    height:100px;
}

.deposit-active {
    border: 5px solid #b6ff40;
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
}
.deposit-min-max-sl {
                    display:flex;
                    gap: 10px;
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
    margin: 4rem 2rem;
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

.help-c {
    margin-top: -75px;
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

export default With;
