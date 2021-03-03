import React from 'react';
import Lista from '../../componentes/logos/Logos-lista'
import Video from './video-prueba.mp4';

const Inicio = () => (
    

    <div className='inicio'>
        <div className='inicio-contenedor-general'>

            <div className='inicio-titulo-contenedor'>
                <div className='inicio-titulo'>
                    <h1>Skyder</h1>
                </div> 
            </div>

            <div className='inicio-contenedor-video'>
               <div className='inicio-video'>
                    <video src={ Video } muted autoPlay loop/>
                </div>
            </div>
            
        </div>
        <div className='empresas-contenedor-general'>

            <div className='empresas-contenedor-texto'>
                <div className='empresas-texto'>
                    <h1>Algunas marcas con las que hemos trabajado</h1>
                </div>
            </div>
            
            <div className='empresas-contenedor-logos'>
                <ul className='empresas-lista-logos'>
                    <Lista/>
                </ul>
            </div>
            
        </div>
    </div> 
)

export default Inicio;