import React from 'react';

const Empleados = ({ foto, nombre, ocupacion }) => (
    <div className='nosotros-empleados-contenedor'>
        <div className='nosotros-empleados-foto'>
          <img src={ foto } alt='foto'/>   
        </div>
        <div className='Nosotros-empleados-texto'>
            <h1>{ nombre }</h1>
            <span>{ ocupacion }</span>
        </div>
    </div>
)

export default Empleados;