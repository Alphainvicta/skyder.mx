import React from 'react';
import { Link } from 'react-router-dom';

import inicio from './inicio.png'

const Navegador = () => (
    <nav className='navegador navbar navbar-expand-xl navbar-dark bg-dark' role='navigation'>
        <div className='container-fluid'>

            <div className='navegador-logo navbar-brand'>
                <Link to='/'>
                    <img src={inicio} alt='navegador'/>
                </Link>
            </div>

            <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span class='navbar-toggler-icon'/>
            </button>

            <div className='navegador-nav collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                        <Link to='/' className='nav-link'>
                            <h1>Inicio</h1>
                        </Link>
                        <Link to='/nosotros' className='nav-link'>
                            <h1>Nosotros</h1>
                        </Link>
                        <Link to='/servicios' className='nav-link'>
                            <h1>Servicios</h1>
                        </Link>
                        <Link to ='/contacto' className='nav-link'>
                            <h1>Contacto</h1>
                        </Link> 
                </div>             
            </div>

        </div>
    </nav>
)

export default Navegador;