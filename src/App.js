import './App.css';
import {Route} from 'react-router-dom';
import Navegador from './componentes/navegador/Navegador.jsx';
import Pie from './componentes/pie/Pie.jsx';

import Inicio from './paginas/pagina-inicio/Pagina-inicio.jsx';
import Nosotros from './paginas/pagina-nosotros/Pagina-nosotros.jsx';

function App() {
  return (
    <div>
      <div id="top"></div>
      <i class="bi-alarm"></i>
      <Navegador/>
      <Route exact path='/' component={ Inicio }/>
      <Route path='/nosotros' component={ Nosotros }/>
      <Pie/>
    </div>
  );
}

export default App;
