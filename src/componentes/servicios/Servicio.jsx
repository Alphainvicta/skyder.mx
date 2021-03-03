import React from 'react';
import { Link } from 'react-router-dom';

const Servicio = ({ servicio, video, descripcion }) => (
    <div className='servicio'>
            <div className='servicio-contenedor-general'>

                <div className='servicio-titulo'>
                    <h1>{ servicio }</h1>
                </div>

            </div>

            <div className='servicio-contenedor-descripcion'>
                <div className='servicio-contenedor-video'>
                    <div className='servicio-video'>
                        <video src={ video } muted autoPlay loop/>
                    </div>
                </div>

                <div className='servicio-descripcion'>
                    <h2>{ descripcion }</h2>

                    <div className='servicio-boton'>
                        <Link to='/contacto'>
                            <button type="button" class="btn btn-outline-light">Contactanos</button>
                        </Link>
                    </div>

                </div>
            </div>
    </div>
)

export default Servicio;