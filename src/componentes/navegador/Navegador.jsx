import React from 'react';
import { Link } from 'react-router-dom';
import inicio from './inicio.png'

const Navegador = () => (
    <div className='navegador'>
        <Link to='/'>
            <img src={inicio} alt='navegador'/>
        </Link>

        <div>
            <Link to='/nosotros'>
                <h1>Nosotros</h1>
            </Link>   
        </div>
    </div>
)

export default Navegador;