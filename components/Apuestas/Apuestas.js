import { React, useEffect, useState } from 'react';
import AppService from '../../services/app.service';
import dayjs from 'dayjs';

const Apuestas = () => {

    const dotaImageBase = "https://cdn.cloudflare.steamstatic.com";

    const [apuestas, setApuestas] = useState([]);
    const [heroes, setHeroes] = useState({});

    const [searching, setSearching] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [finishing, setFinishing] = useState(false);

    const getApuestas = () => {
        setApuestas([]);
        setSearching(current => !current);
        let s = new AppService();
        s.makeGet('apuestas', {}, true).then(res=>{
            setApuestas(res.data.map(item=>{ item.created_at = dayjs(item.created_at).format('DD/MM/YYYY hh:mm a'); item.match_start_time = dayjs(item.match_start_time * 1000).format('DD/MM/YYYY hh:mm a'); return item; }));
            setSearching(current => !current);
        });
    }

    const terminarApuestas = () => {
        setFinishing(current=>!current);
        let s = new AppService();
        s.makeGet('apuesta/review', {}, true).then(res=>{
            if(res.data.success){
                getApuestas();
                setFinishing(current=>!current);
            }
        });
    }

    const procesarApuestas = async () => {
        let _apuestas = [...apuestas];
        let filter_apuestas = _apuestas.filter(i=>i.match_id==null);
        if(filter_apuestas.length < 1){
            alert("No hay apuestas por procesar");
        } else {
            setProcessing(current=>!current);
            let s = new AppService();
            for(const i=0;i<filter_apuestas.length;i++){
                try {
                    let res = await s.makePost('partidadota/' + filter_apuestas[i].partidaid, {}, true);
                } catch (e){}
            }

            setProcessing(current=>!current);
            getApuestas();
        }
    }

    useEffect(()=>{
        fetch("/json/heroes.json").then(resp=>{
            return resp.json();
        }).then(json => {
            setHeroes(json);
        });

        getApuestas();
    }, []);


    return (
        <>
            <div>
                <div style={{textAlign:'right'}}>
                    <button className="btn" onClick={ getApuestas }>Recargar</button>&nbsp;
                    <button className="btn" onClick={ procesarApuestas }>
                        { processing && 'Procesando' }
                        { !processing && 'Procesar apuestas' }
                    </button>&nbsp;
                    <button className="btn" onClick={ terminarApuestas }>
                        { finishing && 'Terminando' }
                        { !finishing && 'Terminar apuestas' }
                    </button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Monto apostado</th>
                            <th>Partida</th>
                            <th>Estado</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        { searching && <tr><td colSpan="5">Buscando apuestas</td></tr> }
                        { !searching && apuestas.length < 1 && <tr><td  colSpan="5" className="gc-record-not-found">No has realizado apuestas</td></tr> }
                        { !searching && apuestas.map(apuesta=>{
                            return <tr key={'partida_' + apuesta.partidaid}>
                                <td>{ apuesta.created_at }</td>
                                <td>USD { apuesta.monto }</td>
                                <td>
                                    { apuesta.match_id && <>
                                        <div className="d-match">
                                            <img src={ dotaImageBase + heroes[apuesta.match_hero_id]?.img } className="hero_img" />
                                            <div className="d-match-body">
                                                <h5>{ heroes[apuesta.match_hero_id]?.localized_name }</h5>
                                                <div>{ apuesta.match_start_time }</div>
                                            </div>
                                        </div>
                                    </>}
                                    { !apuesta.match_id && <span>-</span>}
                                </td>
                                <td>{ apuesta.estado == '0' && apuesta.match_id == null ? 'Sin procesar' : (apuesta.estado == '0' ? 'En proceso' : 'Terminado')}</td>
                                <td>{ apuesta.estado == '0' ? '-' : (apuesta.estado == '1' ? 'Ganador' : 'Perdedor') }</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <style jsx>
                {
                    `
                    table {
                        width: 100%;
                        margin-top: 20px;
                    }
                    
                    th {
                        color: #fff;
                        opacity: 0.48;
                        border-bottom: 1px solid white;
                    }
                    td {
                        color: #fff;
                        text-align: center;
                        padding: 10px 20px;
                    }
                    th, td {
                        font-family: 'Roboto Mono', monospace;
                    }

                    .hero_img {
                        width: 70px;
                    }

                    .d-match {
                        display: flex;
                        flex-direction: row;
                    }

                    .d-match-body {
                        text-align: left;
                        padding-left: 10px;
                    }

                    .d-match-body h5 {
                        font-weight: bold;
                        margin-bottom: 5px;
                    }

                    .d-match-body div{
                        font-size: 12px;
                    }
                    `
                }
            </style>
        </>
    );
}

export default Apuestas;