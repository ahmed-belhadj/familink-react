import React, {Component} from 'react';
import {Navbar, NavbarBrand, Button} from 'reactstrap';
import Landing from "layouts/Landing/Landing";

class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    componentDidMount() {
        const {renewSession} = this.props.auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    render() {
        const {isAuthenticated} = this.props.auth;

        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="">Auth0 - React</NavbarBrand>
                    <Button
                        bsstyle="primary"
                        className="btn-margin"
                        onClick={this.goTo.bind(this, 'home')}
                    >
                        Home
                    </Button>
                    {
                        !isAuthenticated() && (
                            <Button
                                bsstyle="primary"
                                className="btn-margin"
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </Button>
                        )
                    }
                    {
                        isAuthenticated() && (
                            <Button
                                bsStyle="primary"
                                className="btn-margin"
                                onClick={this.logout.bind(this)}
                            >
                                Log Out
                            </Button>
                        )
                    }
                </Navbar>
                <Landing />
            </div>
        );
    }
}

export default App;