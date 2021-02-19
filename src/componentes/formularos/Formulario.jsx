import React from 'react';

class Formulario extends React.Component {
    constructor () {
        super();

        this.state = {
            nombre_empresa : '',
            correo : '',
            servicios : [],
            detalles : ''
        }
    }

    enviar = event => {
        event.preventDefault();

        this.setState({ nombre_empresa : '', correo : '', servicios : [], detalles : '' })
    }

    recibir = event => {
        const { name, value } = event.target;

        this.setState({ [name] : value })
    }

    render() {
        return (
            <form onSubmit={ this.enviar }>
                <input name='nombre_empresa' type='text' value={ this.state.nombre_empresa } onChange={ this.recibir } required/>
                <label>Nombre/Empresa*</label>
                <input name='correo' type='email' value={ this.state.correo } onChange={ this.recibir } required/>
                <label>Correo*</label>
                <input name='servicios0' type="checkbox" value={ this.state.servicios }/>
                <labe>Foto y video</labe>
                <input name='servicios1' type="checkbox" value={ this.state.servicios }/>
                <label>Droon shooting</label>
                <input name='servicios2' type="checkbox" value={ this.state.servicios }/>
                <label>Foto 360</label>
                <input name='servicios3' type="checkbox" value={ this.state.servicios }/>
                <label>Edicion</label>
                <input name='servicios4' type="checkbox" value={ this.state.servicios }/>
                <label>Algo mas</label>
                <textarea name='detalles' onChange={ this.recibir } required/>
                <label>Dellates*</label>

                <input type='submit' value='Enviar'/>
            </form>
        )
    }
}

export default Formulario;