import React from 'react';
import { withRouter } from 'react-router-dom';

import video0 from './videos/video0.mp4';
import video4 from './videos/video4.mp4';

import Servicio from './Servicio.jsx';
class Lista extends React.Component {
    constructor () {
        super();

        this.state = {
            servicios : [{
                servicio : 'Comerciales',
                video : video0,
                descripcion : 'El videomarketing busca resaltar las características de tu producto o servicio y está totalmente diseñado para aumentar tus ventas',
                contexto : 'Automotriz Mazda galerías - Spot publicitario de 30 seg. sobre su venta especial',
                link : '/servicios/comerciales',
                id : 0
            },
            {
                servicio : 'Eventos',
                video : '',
                descripcion : 'Cobertura de eventos sociales y comerciales, al aire libre o en cualquier condición',
                link : '/servicios/eventos',
                id : 1
            },
            {
                servicio : 'Branding',
                video : '',
                descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid nulla harum illo eius cumque esse error similique molestiae molestias non eligendi! Ex laboriosam consequatur laborum recusandae aut ullam velit.',
                contexto: 'Spa hotel El chante en Jocotepec -  Vídeo de 1min. ',
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
                video : video4,
                descripcion : 'Deja volar tu imaginación en operaciones en interiores, foto 360, timelapse y otras tomas especializadas',
                contexto: 'Cables y fibras - video de el interior de fábrica',
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