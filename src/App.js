import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navegador from './componentes/navegador/Navegador.jsx';
import Pie from './componentes/pie/Pie.jsx';

import Inicio from './paginas/pagina-inicio/Pagina-inicio.jsx';
import Nosotros from './paginas/pagina-nosotros/Pagina-nosotros.jsx';
import Servicios from './paginas/pagina-servicios/Pagina-servicios.jsx';
import Contacto from './paginas/pagina-contacto/Pagina-contacto.jsx';

function App() {
  return (
    <div>
      <div id="top" />
      <Navegador/>
      <Switch>
        <Route exact path='/' component={ Inicio }/>
        <Route path='/nosotros' component={ Nosotros }/>
        <Route path='/servicios' component={ Servicios }/>
        <Route path='/contacto' component={ Contacto }/>
      </Switch>
      <Pie/>
    </div>
  );
}

export default App;
