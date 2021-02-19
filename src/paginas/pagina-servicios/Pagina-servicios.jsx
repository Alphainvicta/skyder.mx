import React from 'react';

import Lista from '../../componentes/tarjetas/Tarjetas-lista.jsx';

const Servicios = () => (
    <div className='servicios'>
        <div className='servicios-texto-contenedor'>
            <div className='servicios-texto'>
                <h1>Servicios</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo minus id odit laudantium. Facere ut, eaque ipsum aut saepe illo consequatur voluptate commodi culpa accusamus aliquam debitis nam est.</span>
            </div>
        </div>

        <div className='servicios-buscador-contenedor'>
            <div className='servicios-buscador'>

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