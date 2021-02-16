import React from 'react';
import Logos from './Logos';

class Lista extends React.Component {
    constructor() {
        super();

        this.state = {
            enlistado : [{
                imagen : './imagenes/0.png',
                id : 0
            },
            {
                imagen : './imagenes/1.png',
                id : 1
            },
            {
                imagen : './imagenes/2.png',
                id : 2
            },
            {
                imagen : './imagenes/3.png',
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