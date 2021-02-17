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
                <label>Nombre/Empresa</label>
                <input name='correo' type='email' value={ this.state.correo } onChange={ this.recibir } required/>
                <label>Correo</label>
                <input name='servicios0' type="checkbox" value={ this.state.servicios }/>
                <labe>Foto y video</labe>
                <input name='servicios1' type="checkbox" value={ this.state.servicios }/>
                <labe>Droon shooting</labe>
                <input name='servicios2' type="checkbox" value={ this.state.servicios }/>
                <labe>Foto 360</labe>
                <input name='servicios3' type="checkbox" value={ this.state.servicios }/>
                <labe>Edicion</labe>
                <input name='servicios4' type="checkbox" value={ this.state.servicios }/>
                <labe>Algo mas</labe>
                <textarea name='detalles' onChange={ this.recibir } required/>

                <input type='submit' value='Enviar'/>
            </form>
        )
    }
}

export default Formulario;