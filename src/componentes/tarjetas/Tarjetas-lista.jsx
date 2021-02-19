import React from 'react';
import Tarjeta from './Tarjeta.jsx';

import { ReactComponent as Comercial } from './iconos/comercial.svg'
import { ReactComponent as Industrial } from './iconos/industrial.svg' 
import { ReactComponent as Residencial } from './iconos/residencial.svg'

import fondo0 from './imagenes/fondo0.png';
import fondo1 from './imagenes/fondo1.png';
import fondo2 from './imagenes/fondo2.png';
import fondo3 from './imagenes/fondo3.png';
import fondo4 from './imagenes/fondo4.png';

class Lista extends React.Component {
    constructor() {
        super();

        this.state = {
            tarjetas : [{
                fondo : fondo0,
                categoria : [ <Comercial /> ],
                servicio : 'Comerciales',
                id : 0
            },
            {
                fondo : fondo1,
                categoria : [ <Comercial />, <Residencial /> ],
                servicio : 'Eventos',
                id : 1
            },
            {
                fondo : fondo2,
                categoria : [ <Industrial />, <Comercial/> , <Residencial/> ],
                servicio : 'Branding',
                id : 2
            },
            {
                fondo : fondo3,
                categoria : [ <Industrial /> ],
                servicio : 'Tecnicos',
                id : 3
            },
            {
                fondo : fondo4,
                categoria : [ <Industrial />, <Comercial /> ],
                servicio : 'Operacion con dron',
                id : 4
            }
            ]
        }
    }

    render() {
        return (    
            this.state.tarjetas.map(({ fondo, categoria, servicio, id }) => (
                <Tarjeta key={ id } servicio={ servicio } categoria={ categoria } fondo={ fondo }/>
            ))
        )
    }
} 

export default Lista;