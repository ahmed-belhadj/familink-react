import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import App from "App";
import Auth from './auth/Auth';
import Dashboard from "./layouts/Dashboard/Dashboard.jsx";


import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";

const auth = new Auth();
const hist = createBrowserHistory();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" render={(props) => <App auth={auth} {...props} />}/>
            <Route path="/home" render={(props) => <App auth={auth} {...props} />}/>
            <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                hist.replace('/dashboard');
                return <Dashboard {...props} />;
            }}/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
