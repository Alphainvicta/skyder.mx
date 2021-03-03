import React from 'react';
import { ReactComponent as Regresar } from './iconos/regresar.svg';
import { ReactComponent as Facebook } from './iconos/facebook.svg';
import { ReactComponent as Instagram } from './iconos/instagram.svg';
import { ReactComponent as Youtube } from './iconos/youtube.svg';
import { ReactComponent as Behance } from './iconos/behance.svg';

const Pie = () => (
    <footer class='footer'>
      <div class='pie-contenedor'>

        <div className='regresar-arriba'>
          <a href='#top'>
            <Regresar className='regresar'/>
          </a>
        </div>
        
        <div class='links-sociales'>
          <a href='https://www.facebook.com/skydergdl/' target='_blank' rel='noreferrer'>
            <Facebook className='facebook'/>
          </a>
          <a href='https://www.instagram.com/skydergdl/' target='_blank' rel='noreferrer'>
            <Instagram className='instagram'/>
          </a>
          <a href='https://www.youtube.com/channel/UCCtnY2p8i9SQHMrIV-KGjCw' target='_blank' rel='noreferrer'>
            <Youtube className='youtube'/>
          </a>
          <a href='https://www.behance.net/skyder' target='_blank' rel='noreferrer'>
            <Behance className='behance'/>
          </a>
        </div>

        <hr />
        <div className='__texto'>
          <p>Descubre nuestras redes sociales</p>
          <p>© 2021 - Skyder</p>
        </div>
        
      </div>
    </footer>
)

export default Pie;