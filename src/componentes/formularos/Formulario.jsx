import React from 'react';
import emailjs from 'emailjs-com';

const Formulario = () => {

    function enviar(e) {
        e.preventDefault();
    
        emailjs.sendForm('skyder-correos', 'formulario-correo', e.target, 'user_FairUAzw3Rg7FNhBSDodv')
          .then((result) => {
              alert('¡Se ha enviado exitosamente!');
          }, (error) => {
              alert(error.text);
          });

        const limpieza = document.getElementById('formulario-correo');
        limpieza.reset();
      }

      return (
         <form id='formulario-correo' onSubmit={enviar}>
            <input type='text' name='nombre_empresa' required/>
            <label>Nombre/Empresa*</label>
            <input type='email' name='correo' required/>
            <label>Correo*</label>
            <ul className='formulario-lista' >
                <li>
                    <input name='servicio0' type="checkbox" />
                    <label >Foto y video</label>  
                </li>
                <li>
                    <input name='servicio1' type="checkbox" />
                    <label >Dron shooting</label>
                </li>
                <li>
                    <input name='servicio2' type="checkbox" />
                    <label >Foto 360</label> 
                </li>
                <li>
                    <input name='servicio3' type="checkbox" />
                    <label >Edicion</label>
                </li>
            </ul>
            <textarea name='detalles' required />
            <label>Dellates*</label>

            <input type='submit' value='Enviar' />  
                
        </form> 
      );
}

export default Formulario;