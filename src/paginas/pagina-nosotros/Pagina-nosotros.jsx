import React from 'react';
import Lista from '../../componentes/empleados/Empleados-lista';

const Nosotros = () => (
    <div className='nosotros'>
        <div className='nosotros-texto-contenedor'>
            <div className='nosotros-texto'>
                <h1>Nosotros</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis excepturi fugit illo soluta beatae sit consequuntur expedita iste, itaque deserunt atque id amet voluptas quasi blanditiis dicta repellat officiis!</span>
            </div>
        </div>
        
        <Lista />

        <div className='nosotros-adam-contenedor'>
            <div className='nosotros-adam-texto'>
                <h2>“El hombre necesita a cada paso de la ayuda de sus semejantes, y es inútil que la espere tan sólo de su benevolencia: le será más fácil obtenerla si puede interesar en su favor el amor propio de aquellos a quienes recurre y hacerles ver lo que les pide”</h2>
                <span>'Adam Smith (1723-1790) Economista y Filósofo Británico'</span>
            </div>
        </div>
    </div>
)

export default Nosotros;