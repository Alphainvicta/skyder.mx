import React from 'react';
import { withRouter } from 'react-router-dom';

const Tarjeta = ({ categoria, servicio, fondo, link, history }) => (
    <div className='tarjeta' onClick={() => history.push(`servicios/${link}`)} style={{ backgroundImage: `url(${ fondo })`}} >
        <li className='tarjeta-contenedor-general' >
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