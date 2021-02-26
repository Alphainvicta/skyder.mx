import React from 'react';
import { withRouter } from 'react-router-dom';

const Tarjeta = ({ categoria, servicio, fondo, link, history }) => (
    <div onClick={() => history.push(`servicios/${link}`)}>
        <li className='tarjeta' style={{ backgroundImage: `url(${ fondo })`}} >
            <div className='tarjeta-categoria-contenedor'>
                { categoria }
            </div>
        
            <div className='tarjeta-texto-contenedor'>
                <h2>{ servicio }</h2>
            </div>
        </li>
    </div>
    
)

export default withRouter(Tarjeta);