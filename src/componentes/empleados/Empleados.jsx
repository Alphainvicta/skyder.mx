import React from 'react';

const Empleados = ({ foto, nombre, ocupacion }) => (
    <div className='empleados'>
        <div className='empleados-contenedor'>
            <div className='empleados-foto'>
                <img src={ foto } alt='foto' />   
            </div>
            <div className='empleados-texto'>
                <h1>{ nombre }</h1>
                <span>{ ocupacion }</span>
            </div>
        </div>
    </div>
    
)

export default Empleados;