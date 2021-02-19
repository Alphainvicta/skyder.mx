import React from 'react';
import Servicio from './Servicio.jsx';

class Lista extends React.Component {
    constructor () {
        super();

        this.state = {
            servicios : [{
                servicio : 'Servicio',
                video : '',
                descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid nulla harum illo eius cumque esse error similique molestiae molestias non eligendi! Ex laboriosam consequatur laborum recusandae aut ullam velit.',
                id : 0
            }
            ]
        }
    }

    render() {
        return (    
            this.state.servicios.map(({ servicio, video, descripcion, id }) => (
                <Servicio key={ id } descripcion={ descripcion } video={ video } servicio={ servicio }/>
            ))
        )  
    }
}

export default Lista;