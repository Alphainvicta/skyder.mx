import React from 'react';
import Empleados from './Empleados.jsx';

import foto0 from './fotos/foto0.jpg';
import foto1 from './fotos/foto1.jfif';
import foto2 from './fotos/foto2.png';

class Lista extends React.Component {
    constructor() {
        super();
        this.state = {
            equipo : [{
                foto : foto0,
                nombre : 'Saul Aceves Escárcega',
                ocupacion : 'Jefe de operaciones',
                id : 0
            },
            {
                foto : foto1,
                nombre : 'Oscar Iván Soltero',
                ocupacion : 'Jefe de diseño creativo',
                id : 1
            },
            {
                foto : foto2,
                nombre : 'Paul Aceves Escárcega',
                ocupacion : 'Jefe de TI',
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