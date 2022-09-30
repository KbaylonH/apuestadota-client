import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import AppService from '../../services/app.service';

const With = () => {

    const  refM = useRef(null);
    const refA = useRef(null);
    const refC = useRef(null); 
    const refN = useRef(null);

    const [monto, setMonto] = useState(0);
    const [acc, setAcc] = useState(" ");
    const [cci, setCii] = useState(" ");
    const [name, setName] = useState(" ");

    const methods = [
        {id: 'bcp', img_url: '/icons/methods/bcp.png', label: 'Banco de credito'}, 
        {id:'interbank', img_url: '/icons/methods/interbank.png', label: 'Interbank'}, 
        {id:'scotiabank', img_url: '/icons/methods/scotiabank.png',  label: 'Scotiabank'}, 
        {id:'bbva', img_url: '/icons/methods/bbva.png',  label: 'BBVA'}, 
        {id:'busd', img_url: '/icons/methods/binance.png',  label: 'BUSD'}]; 
    const [metodo, setMetodo] = useState('Transferencia');
    const [userId, setUserid] = useState();

    const [saldo, setSaldo] = useState("0.00");





    useEffect(()=>{
        let s = new AppService();
        let _user = s.getUser();

        if(_user !== null){
            setUserid(_user.usuarioid);
            // s.makeGet('usuarioid', {}, true).then(res=>{
            //     setUserid(res.data.usuarioid);
                
            // });
            s.makeGet('saldo', {}, true).then(resp=>{
                setSaldo(resp.data.saldo);
               
            });
        
        }
    }, []);


    const selectMetodo = (metodo) => {    
        setMetodo(metodo);
    }

    const handleChangeAcc = (e) => {
        e.preventDefault();
        const a = refA.current.value;
        a.length < 17 ?
        setAcc(a)
        :
        alert("Ingrese un numero de cuenta valido")
        
    }

    const handleChangeCci = (e) => {
        e.preventDefault();
        const c = refC.current.value;
        c.length < 21 ?
        setCii(c)
        : 
        alert("Ingrese un numero de CCI valido")
    }

    const handleChangeName = (e) => {
        e.preventDefault();
        const n = refN.current.value;
        setName(n);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const amount = refM.current.value;
         setMonto(amount);
    }
    
   

    const retirar = () => {

        let _saldo = Number(saldo);

      

        if(monto > _saldo){
            Swal.fire({
                text: 'No cuentas con saldo suficiente para realizar el retiro',
                icon: 'error'
            });
            return;
        }
        Swal.fire({
                text: `¿Deseas realizar el retiro de ${ monto } por ${ metodo } ?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, retirar',
                cancelButtonText: 'Cancelar'
            }).then(result=>{
                if(result.isConfirmed){
                    
                    fetch("https://olimporestobar.com/prod/withdraw", {
                        method: "POST",
                        mode: 'no-cors',
                        'Content-Type': 'application/json',
                        body: JSON.stringify({
                            userId: userId,
                            metodo: metodo,
                            monto: monto,
                            name: name,
                            accNumber: acc,
                            cciNumber: cci
                        })
                      }).then(res => {
                        Swal.fire({
                            text: 'Restiro solicitado con éxito',
                            icon: 'success'
                             }).then(()=>{
                            setTimeout(() => {
                            location.reload();                            
                            }, 1000);
                        });
                      }).catch(error=>{
                        Swal.fire({
                            text: 'Hubo un error al realizar el depósito',
                            icon: 'error'
                        });
                    });
                    
                }
            });
   
}

    return (
        <>
                    <h2 className="intro-title">
                        RETIRO DE FONDOS.
                    </h2> 

                    <div className="withdraw-container">
                            <h4> Ingresa tu solicitud de retiro</h4>

                            <div className='withdraw-flex'>
                                {/* <div className='withdraw-flex-payment-method'>
                                { methods.map((item)=>{
                            return  <div key={`metodo_${item.id}`} onClick={ ()=>{
                                selectMetodo(item.id);
                            }} className={`method-item ${ metodo == item.id ? '' : 'withdraw-unacive' }`}>
                                <img src={item.img_url} alt={item.label} />
                                {item.label}
                            </div>
                        })}
                                    
                                </div> */}

                                <div className='withdraw-flex-payment-main'>

                                
                                    <div className='widthdraw-form'>
                                        <div className='withdraw-flex-payment-main-item'>
                                            <label htmlFor="accNumber"> Número de cuenta: </label>
                                            <input type="number" id="accNumber" name="accNumber" ref={refA}  onChange={handleChangeAcc} />
                                        </div>
                                        
                                        <div className='withdraw-flex-payment-main-item'>
                                            <label htmlFor="cciNumber">Código Interbancario:</label>
                                            <input type="number" id="cciNumber" name="cciNumber" ref={refC} onChange={handleChangeCci}/>
                                        </div>

                                        <div className='withdraw-flex-payment-main-item'>
                                            <label htmlFor="name">Nombre completo del titular:</label>
                                            <input type="text" id="name" name="name" ref={refN}  onChange={handleChangeName} maxLength={30}/>
                                        </div>

                                        <div className='withdraw-flex-payment-main-item'>
                                            <label htmlFor="amount">Monto:</label>
                                            <input type="number" id="amount" name="amount" ref={refM} onChange={handleChange}/>
                                        </div>

                                        <button className='deposit-btn-submit' type='submit' onClick={() => retirar()}>Retirar</button>
                                    </div>
                                                             
                                </div>
                               
                                
                            </div>

                            <div className='bottom-text'>
                                    <p className='text-t'>
                                        Los retiros se realizan en un plazo de 24 horas hábiles y pueden tardar hasta 48 horas hábiles.
                                    </p>
                                    <p className='text-t'>
                                        No se puede retirar dinero a cuentas que no pertenezcan al titular de la cuenta.
                                    </p>
                                </div>
                    </div>
                   
                    <style jsx>
                    {`

                    .intro-title {
                        padding: 2rem;
                        font-size: 3.5rem;
                        font-family: 'Poppins';
                    }
                    .withdraw-container {
                        max-width: 800px;
                       
                        margin: 0 auto;
                        padding: 2rem;
                        background-color: #131e2fd9;
                        border-radius: 10px;
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
                        justify-content: center;
                       
                    }

                    .withdraw-flex-payment-method {
                        
                        display: flex;
                        flex-direction: column;
                        
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
                    }

                    .method-item:hover {
                        background-color: #1F2E44;
                        border-radius:8px;
                    }
                    .method-item img {
                        width: 50px;
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
                        
                    }

                    .w-margin {
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


                    `}
                    </style>
        </>
    );
}

export default With;
