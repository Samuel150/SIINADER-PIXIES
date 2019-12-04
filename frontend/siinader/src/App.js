import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Inicio } from './Inicio';
import { Materias } from './Materias';
import { Estudios } from './Estudios';
import { Notas } from './Notas';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';


function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/materias" component={Materias} />
            <Route path="/estudios" component={Estudios} />
            <Route path="/notas" component={Notas} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
