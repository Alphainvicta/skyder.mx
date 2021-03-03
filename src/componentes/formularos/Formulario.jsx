import React from 'react';
import emailjs from 'emailjs-com';

const Formulario = () => {

    function enviar(e) {
        e.preventDefault();
    
        emailjs.sendForm('skyder-correos', 'formulario-correo', e.target, 'user_FairUAzw3Rg7FNhBSDodv')
          .then(() => {
            alert('¡Se envio exitosamente!')
          }, (error) => {
            alert(error.text)
          });

        const limpieza = document.getElementById('formulario-correo');
        limpieza.reset();
      }

      return (
         <form id='formulario-correo' onSubmit={enviar}>
            
            <div className='formulario-contenedor-top'>
                <div className='form-floating'>
                    <input className='form-control' id='floatingInput' placeholder="Nombre/Empresa*" type='text' name='nombre_empresa' required/>
                    <label for='floatingInput'>Nombre/Empresa*</label>
                </div>
            
                <div className='form-floating'>
                    <input className='form-control' id='floatingInput' placeholder="Correo*" type='email' name='correo' required/>
                    <label for='floatingInput'>Correo*</label>
                </div>
            </div>

            <ul className='formulario-lista' >
                <li className='form-check form-switch'>
                    <input className='form-check-input' name='servicio0' type='checkbox' id='flexSwitchCheckDefault'/>
                    <label className='form-check-label' for='flexSwitchCheckDefault'>Foto y video</label>  
                </li>
                <li className='form-check form-switch'>
                    <input className='form-check-input' name='servicio1' type='checkbox' id='flexSwitchCheckDefault'/>
                    <label className='form-check-label' for='flexSwitchCheckDefault'>Dron shooting</label>  
                </li>
                <li className='form-check form-switch'>
                    <input className='form-check-input' name='servicio2' type='checkbox' id='flexSwitchCheckDefault'/>
                    <label className='form-check-label' for='flexSwitchCheckDefault'>Foto 360</label>  
                </li>
                <li className='form-check form-switch'>
                    <input className='form-check-input' name='servicio3' type='checkbox' id='flexSwitchCheckDefault'/>
                    <label className='form-check-label' for='flexSwitchCheckDefault'>Edicion</label>  
                </li>
            </ul>

            <div className='formulario-detalles-contenedor'>
                <div className='form-floating'>
                    <textarea className='form-control' placeholder='Detalles' id='floatingTextarea2' name='detalles' required/>
                    <label for='floatingTextarea2'>Dellates*</label>
                </div>
            </div>

            <div className='formulario-boton-contenedor'>
                <button type='submit' className='btn btn-outline-light' value='Enviar'>Enviar</button>
            </div>
                
        </form> 
      );
}

export default Formulario;