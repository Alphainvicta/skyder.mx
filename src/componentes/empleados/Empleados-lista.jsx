import React from 'react';
import Empleados from './Empleados.jsx';

import foto0 from './fotos/foto0.png';
import foto1 from './fotos/foto1.png';

class Lista extends React.Component {
    constructor() {
        super();
        this.state = {
            equipo : [{
                foto : foto0,
                nombre : 'Cherk',
                ocupacion : 'Fundador',
                id : 0
            },
            {
                foto : foto1,
                nombre : 'linus',
                ocupacion : 'IT',
                id : 1
            }
            ]
        }
    }
    
    render() {
        return (
            this.state.equipo.map(({ id, ...empleadosPropiedades }) => (
                <Empleados key={ id } { ...empleadosPropiedades } />
            ))
        )
    }
}

export default Lista;