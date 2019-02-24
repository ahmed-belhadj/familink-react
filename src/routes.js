import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Auth from './auth/Auth';
import history from './history';
import Dashboard from './layouts/Dashboard/Dashboard.jsx';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          history.replace('/dashboard');
          return <Dashboard {...props} /> 
        }}/>
      </div>
    </Router>
  );
}