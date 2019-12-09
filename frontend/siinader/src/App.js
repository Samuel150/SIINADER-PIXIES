import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Inicio } from './Inicio';
import { Materias } from './Materias';
import { Estudios } from './Estudios';
import { Notas } from './Notas';
import { Login } from './Login';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';
import { Perfil } from './Perfil';
import { EditarPerfil } from './EditarPerfil';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route path="/:rol/inicio" component={Inicio} />
            <Route path="/:rol/materias" component={Materias} />
            <Route path="/:rol/estudios" component={Estudios} />
            <Route path="/:rol/notas" component={Notas} />
            <Route path="/:rol/perfil" component={Perfil} />
            <Route path="/:rol/editar_perfil" component={EditarPerfil} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
