import React from 'react';
import Lista from '../../componentes/logos/Logos-lista'
import Video from './video-prueba.mp4';
import Skyder from './skyder.png';

const Inicio = () => (
    

    <div className='inicio'>
        <div className='inicio-contenedor-video'>
            <div className='inicio-video'>
                <video src={ Video } muted autoPlay loop/>
            </div>

            <div className='inicio-video-texto'>
                <div className='inicio-skyder'>
                    <img src={ Skyder } alt='skyder'/>
                </div>
                <div className='inicio-texto'>
                    <h1>Media for everything</h1>
                    <span>Somos un espacio para la creatividad de comunicación audiovisual en Guadalajara</span>
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