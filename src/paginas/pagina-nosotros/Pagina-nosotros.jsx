import React from 'react';
import Lista from '../../componentes/empleados/Empleados-lista';

const Nosotros = () => (
    <div className='nosotros'>
        <div className='nosotros-titulo-contenedor'>
            <div className='nosotros-titulo'>
                <h1>Nosotros</h1>
                <h2>Conoce el equipo skyder</h2>
            </div>
        </div>
        
        <div className='nosotros-empleados-contenedor'>
            <Lista />
        </div>

        <div className='nosotros-adam-contenedor'>
            <div className='nosotros-adam-texto'>
                <h2>“El hombre necesita a cada paso de la ayuda de sus semejantes, y es inútil que la espere tan sólo de su benevolencia: le será más fácil obtenerla si puede interesar en su favor el amor propio de aquellos a quienes recurre y hacerles ver lo que les pide”</h2>
                <span>'Adam Smith (1723-1790) Economista y Filósofo Británico'</span>
            </div>
        </div>
    </div>
)

export default Nosotros;