import React from 'react';
import Lista from '../../componentes/logos/Logos-lista'
import Video from './video-pureba.mp4';

const Inicio = () => (
    

    <div className='inicio'>
        <div className='inicio-contenedor-general'>

            <div className='inicio-contenedor-video'>
               <div className='inicio-video'>
                    <video src={ Video } muted autoPlay loop />
                </div>
            </div>

            <div className='inicio-contenedor-texto'>
                <div className='inicio-texto'>
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum magni magnam mollitia consequatur odit corrupti tempora nostrum velit temporibus illo ipsum molestias repudiandae facilis atque, qui sequi voluptatibus tempore odio!</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequatur doloremque natus eaque nemo! Facere consequuntur a expedita quisquam aliquid doloremque natus repellendus explicabo velit, nostrum, nulla enim harum ut.</span>
                </div> 
            </div>
            
        </div>
        <div className='empresas-contenedor-general'>

            <div className='empresas-contenedor-texto'>
                <div className='empresas-texto'>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, suscipit explicabo officia cumque dignissimos ut porro quasi ipsum aliquid sunt enim quam molestias quaerat eius distinctio voluptatum harum qui modi!</h1>
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