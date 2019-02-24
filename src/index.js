import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import App from "App";
import Auth from './auth/Auth';
import Callback from "./callback/Callback";


import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";

import indexRoutes from "./routes/index";

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
            {/*{indexRoutes.map((prop, key) => {*/}
            {/*return <Route path={prop.path} key={key} component={prop.component}/>;*/}
            {/*})}*/}
            <Route path="/" render={(props) => <App auth={auth} {...props} />}/>
            <Route path="/home" render={(props) => <div auth={auth} {...props} />}/>
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />;
            }}/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
