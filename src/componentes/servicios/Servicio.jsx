import React from 'react';

const Servicio = ({ servicio, video, descripcion }) => (
    <div className='servicio'>
            <div className='servicio-contenedor-general'>
                <div className='servicio-titulo'>
                    <h1>{ servicio }</h1>
                </div>

                <div className='servicio-salir'>
                    <button>salir</button>
                </div>
            </div>

            <div className='servicio-contenedor-video'>
                <div className='servicio-video'>
                    { video }
                </div>
            </div>

            <div className='servicio-contenedor-descripcion'>
                <div className='servicio-descripcion'>
                    <h2>{ descripcion }</h2>
                </div>
                
                <div className='servicio-boton'>
                    <button>hola</button>
                </div>
            </div>
                
    </div>
)

export default Servicio;