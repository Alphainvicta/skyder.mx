import React from 'react';

import Lista from '../../componentes/tarjetas/Tarjetas-lista.jsx';

const Servicios = () => (
    <div className='servicios'>
        <div className='servicios-titulo-contenedor'>
            <div className='servicios-titulo'>
                <h1>Servicios</h1>
                <h2>Nuestros servicios a tu disposicion</h2>
            </div>
        </div>

        <div className='servicios-tarjetas-contenedor'>
            <div className='servicios-tarjetas'>
                <ul className='tarjetas-listado'>
                     <Lista />  
                </ul>
            </div> 
        </div>
    </div>
)

export default Servicios;