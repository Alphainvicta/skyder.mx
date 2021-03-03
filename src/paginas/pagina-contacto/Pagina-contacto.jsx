import React from 'react';
import Formulario from '../../componentes/formularos/Formulario.jsx';
import { ReactComponent as Whatsapp} from './whatsapp.svg';

const Contacto = () => (
    <div className='contacto'>

        <div className='contacto-titulo-contenedor'>
            <div className='contacto-titulo'>
                <h1>Contactanos</h1>
            </div>
        </div>

        <div className='contacto-contenedor-general'>
            <div className='contacto-formulario-contenedor'>
                <div className='contacto-formulario-texto'>
                    <h2>Llena el siguiente formulario para seguir hablando por correo</h2>
                </div>
                <div className='contacto-formulario'>
                    <Formulario/>
                </div>
            </div>

            <div className='linea'/>

            <div className='contacto-whatsapp-contenedor'>
                <div className='contacto-whatsapp-texto'>
                    <h2>Mandanos un whatsapp</h2>
                </div>
                <div className='contacto-whatsapp'>
                    <a href='https://wa.me/523317516117?text=Hola,%20quiero%20cotizar%20un%20proyeto' target='_blank' rel='noreferrer'>
                        <Whatsapp className='whatsapp'/>
                    </a>
                </div>
            </div>
        </div>

    </div>
)

export default Contacto;