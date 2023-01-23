import React, {Component} from 'react';

import "./Assets/Styles/App.css"

import AppContainer from "./Components/Common/AppСontainer";
import AppBar from "./Components/AppBar/AppBar";
import Logo from "./Components/AppBar/Logo";
import Feedback from "./Components/AppBar/Feedback";
import Notifications from "./Components/AppBar/Notifications";
import Account from "./Components/AppBar/Account";
import Auth from "./Components/AppBar/Auth";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Артём Акжигитов",
            logged_in: false,
            new_notifs: true,
        }

        this.elevateNotifs = this.elevateNotifs.bind(this)
        this.elevateLogout = this.elevateLogout.bind(this)
        this.elevateLogin = this.elevateLogin.bind(this)
    }

    elevateNotifs() {
        this.setState({
            new_notifs: false
        });
    }

    elevateLogout() {
        this.setState({
            logged_in: false
        });
        this.setState({
            new_notifs: false
        });
    }

    elevateLogin(name) {
        this.setState({
            logged_in: true
        });
        this.setState({
            username: name
        });
    }

    render() {
        return (
            <AppContainer>
                <AppBar>
                    <Logo/>
                    <div className="appbar-inner">
                        <Feedback/>
                        <Notifications available={this.state.new_notifs} elevateNotifs={this.elevateNotifs}/>
                        {this.state.logged_in &&
                            <Account elevateLogout={this.elevateLogout} username={this.state.username}/>
                        }
                        {!this.state.logged_in &&
                            <Auth elevateLogin={this.elevateLogin}/>
                        }
                    </div>
                </AppBar>
            </AppContainer>
        );
    }
}

export default App;
