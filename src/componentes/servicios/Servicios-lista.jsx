import React from 'react';
import { withRouter } from 'react-router-dom';

import video0 from './videos/prueba.mp4';

import Servicio from './Servicio.jsx';
class Lista extends React.Component {
    constructor () {
        super();

        this.state = {
            servicios : [{
                servicio : 'Comerciales',
                video : video0,
                descripcion : 'Descripcion rapida del servicio',
                link : '/servicios/comerciales',
                id : 0
            },
            {
                servicio : 'Eventos',
                video : '',
                descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid nulla harum illo eius cumque esse error similique molestiae molestias non eligendi! Ex laboriosam consequatur laborum recusandae aut ullam velit.',
                link : '/servicios/eventos',
                id : 1
            },
            {
                servicio : 'Branding',
                video : '',
                descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid nulla harum illo eius cumque esse error similique molestiae molestias non eligendi! Ex laboriosam consequatur laborum recusandae aut ullam velit.',
                link : '/servicios/branding',
                id : 2
            },
            {
                servicio : 'Tecnicos',
                video : '',
                descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid nulla harum illo eius cumque esse error similique molestiae molestias non eligendi! Ex laboriosam consequatur laborum recusandae aut ullam velit.',
                link : '/servicios/tecnicos',
                id : 3
            },
            {
                servicio : 'Operacion con Dron',
                video : '',
                descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid nulla harum illo eius cumque esse error similique molestiae molestias non eligendi! Ex laboriosam consequatur laborum recusandae aut ullam velit.',
                link : '/servicios/operacion-con-dron',
                id : 4
            }
            ]
        }
    }

    render() {
        const servicio = this.state.servicios.find(
            servicio => servicio.link === this.props.match.url
          )

          if (servicio) {
            return <Servicio { ...servicio }  />
          }
        
          return <p>Not Found</p>
    }
}

export default withRouter(Lista);