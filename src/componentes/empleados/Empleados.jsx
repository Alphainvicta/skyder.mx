import React from 'react';

const Empleados = ({ foto, nombre, ocupacion }) => (
    <ul className='empleados'>
        <li className='empleados-contenedor'>
            <div className='empleados-foto'>
                <img src={ foto } alt='foto' />   
            </div>
            <div className='empleados-texto'>
                <h1>{ nombre }</h1>
                <span>{ ocupacion }</span>
            </div>
        </li>
    </ul>
    
)

export default Empleados;