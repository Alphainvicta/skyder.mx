import React from 'react';
import { ReactComponent as Regresar } from './iconos/regresar.svg';
import { ReactComponent as Facebook } from './iconos/facebook.svg';
import { ReactComponent as Instagram } from './iconos/instagram.svg';
import { ReactComponent as Youtube } from './iconos/youtube.svg';
import { ReactComponent as Behance } from './iconos/behance.svg';

const Pie = () => (
    <footer class="footer navbar-static-bottom">
      <div class="pie-contenedor">
        <a href="#top" class="back-to-top">
            <Regresar />
        </a>
        <div class="links-sociales">
          <a href="https://www.facebook.com/skydergdl/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/skydergdl/" target="_blank">
            <Instagram />
          </a>
          <a href="https://www.youtube.com/channel/UCCtnY2p8i9SQHMrIV-KGjCw" target="_blank">
            <Youtube />
          </a>
          <a href="https://www.behance.net/skyder" target="_blank">
            <Behance />
          </a>
        </div>

        <hr />
        <p class="pie-texto">Descubre nuestras redes sociales</p>
      </div>
    </footer>
)

export default Pie;