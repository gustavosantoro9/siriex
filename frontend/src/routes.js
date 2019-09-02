import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Login from './pages/login';
import Home from './pages/home';
import Ocorrencias from './pages/ocorrencias';
import Usuarios from './pages/usuarios';
import Glossario from './pages/glossario';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ocorrencias" component={Ocorrencias}  />
            <Route path="/usuarios" component={Usuarios}  />
            <Route path="/glossario" component={Glossario}  />
        </Switch>
    );
}

export default Routes;

// <Route path="/" exact component={Login} />