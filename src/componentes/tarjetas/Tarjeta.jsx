import React from 'react';
import {Link} from 'react-router-dom';

const Tarjeta = ({ categoria, servicio, fondo }) => (
    <Link to='/servicios/servicio'>
        <li className='tarjeta' style={{ backgroundImage: `url(${ fondo })`}} >
            <div className='tarjeta-categoria-contenedor'>
                { categoria }
            </div>
        
            <div className='tarjeta-texto-contenedor'>
                <h2>{ servicio }</h2>
            </div>
        </li>
    </Link>
    
)

export default Tarjeta;