import React from 'react';
import Logos from './Logos';

import imagen0 from './imagenes/imagen0.png';
import imagen1 from './imagenes/imagen1.png';
import imagen2 from './imagenes/imagen2.png';
import imagen3 from './imagenes/imagen3.png';
class Lista extends React.Component {
    constructor() {
        super();

        this.state = {
            enlistado : [{
                imagen : imagen0,
                id : 0
            },
            {
                imagen : imagen1,
                id : 1
            },
            {
                imagen : imagen2,
                id : 2
            },
            {
                imagen : imagen3,
                id: 3
            }
            ]
        }
    }

    render() {
        return (    
            this.state.enlistado.map(({ imagen, id }) => (
                <Logos key={ id } imagen={ imagen } />
            ))
        )
    }
}

export default Lista;