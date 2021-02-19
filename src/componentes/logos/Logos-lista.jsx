import React from 'react';
import Logo from './Logo.jsx';

import imagen0 from './imagenes/imagen0.png';
import imagen1 from './imagenes/imagen1.png';
import imagen2 from './imagenes/imagen2.png';
import imagen3 from './imagenes/imagen3.png';
class Lista extends React.Component {
    constructor() {
        super();

        this.state = {
            logos : [{
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
            this.state.logos.map(({ imagen, id }) => (
                <Logo key={ id } imagen={ imagen } />
            ))
        )
    }
}

export default Lista;