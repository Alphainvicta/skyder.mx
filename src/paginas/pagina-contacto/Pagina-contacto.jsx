import React from 'react';
import Formulario from '../../componentes/formularos/Formulario.jsx';

const Contacto = () => (
    <div className='contacto'>
        <div className='contacto-texto-contenedor'>
            <div className='contacto-texto'>
                <h1>Contacto</h1>
            </div>
        </div>

        <div className='contacto-formulario-contenedor'>
            <div className='contacto-formulario-texto'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias ipsum praesentium nisi reprehenderit officia ullam laboriosam. Repudiandae quidem quaerat, impedit officiis, explicabo veniam exercitationem fuga autem, facere quod incidunt.</h2>
            </div>
            <div className='contacto-formulario'>
                <Formulario/>
            </div>
        </div>

        <div className='contacto-whatsapp-contenedor'>
            <div className='contacto-whatsapp-texto'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, earum aliquid recusandae repellendus consequuntur assumenda provident sint veritatis accusamus corporis alias. In animi soluta neque ullam unde ab, nobis alias!</h2>
            </div>
            <div className='contacto-whatsapp'>

            </div>
        </div>
    </div>
)

export default Contacto;