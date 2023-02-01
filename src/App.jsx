import React, {Component} from 'react';

import "./Assets/Styles/App.css"

import AppContainer from "./Components/AppСontainer";
import AppBar from "./Components/AppBar";
import LogoBarItem from "./Components/AppBar/LogoBarItem";
import FeedbackBarItem from "./Components/AppBar/FeedbackBarItem";
import NotificationsBarItem from "./Components/AppBar/NotificationsBarItem";
import AccountBarItem from "./Components/AppBar/AccountBarItem";
import AuthBarItem from "./Components/AppBar/AuthBarItem";
import AppMenu from "./Components/AppMenu";
import NewsMenuItem from "./Components/AppMenu/NewsMenuItem";
import AppPage from "./Components/AppPage";
import AppContent from "./Components/AppContent";
import TeamMenuItem from "./Components/AppMenu/TeamMenuItem";
import CodeMenuItem from "./Components/AppMenu/CodeMenuItem";
import FilesMenuItem from "./Components/AppMenu/FilesMenuItem";
import NewsContentItem from "./Components/AppContent/NewsContentItem";
import TeamContentItem from "./Components/AppContent/TeamContentItem";
import CodeContentItem from "./Components/AppContent/CodeContentItem";
import FilesContentItem from "./Components/AppContent/FilesContentItem";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_content_item: 0,
            team_status: 0,
            username: null,
            uuid: null,
            token: null,
            logged_in: false,
            new_notifs: false,
            notifs: [],
            team_info:{}
        }

        this.elevateNotifs = this.elevateNotifs.bind(this)
        this.elevateLogout = this.elevateLogout.bind(this)
        this.elevateLogin = this.elevateLogin.bind(this)
        this.elevateBadToken = this.elevateBadToken.bind(this)
        this.elevateUpdate = this.elevateUpdate.bind(this)
        this.elevateMenuItemClick = this.elevateMenuItemClick.bind(this)
        this.getCookie = this.getCookie.bind(this)
        this.setCookie = this.setCookie.bind(this)
    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, options = {}) {
        options = {
            path: '/',
            ...options
        };
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }

    componentDidMount() {
        let u_token = this.getCookie('auth_token')
        if (typeof u_token !== 'undefined') {
            this.setState({
                token: u_token
            });
        }
    }

    elevateNotifs() {
        this.setState({
            new_notifs: false
        });
    }

    elevateLogout() {
        this.setState({
            username: '',
            uuid: '',
            token: '',
            logged_in: false,
            new_notifs: false,
            notifs: [
                {
                    caption: "Капитанам команд",
                    text: "доступна форма загрузки данных о команде и её участниках"
                }
            ],
            active_content_item: 0,
            team_status: 0,
        });
        this.setCookie('auth_token', '')
    }

    elevateLogin(g_username, g_uuid, g_token, g_new_notifs, g_notifs, g_team_status, g_team_info) {
        this.setState({
            username: g_username,
            uuid: g_uuid,
            token: g_token,
            logged_in: true,
            new_notifs: Boolean(g_new_notifs),
            notifs: [
                {
                    caption: "Капитанам команд",
                    text: "доступна форма загрузки данных о команде и её участниках"
                }
            ],
            active_content_item: 0,
            team_status: Number(g_team_status),
            team_info: g_team_info
        });
        this.setCookie('auth_token', g_token)
    }

    elevateBadToken() {
        this.setState({
            logged_in: false
        });
        this.setState({
            username: ''
        });
        this.setCookie('auth_token', 'you are bad')
    }

    elevateUpdate(){
        this.setState({
            team_status: 2
        });
    }

    elevateMenuItemClick(e_id) {
        this.setState({
            active_content_item: e_id
        });
    }

    render() {
        return (
            <AppContainer>
                <div className="vertical-ruler"><div id="v-linear" className="vertical-ruler-co"> </div> </div>
                <div className="horizontal-ruler"><div id="h-linear" className="horizontal-ruler-co"> </div> </div>
                <AppBar>
                    <LogoBarItem/>
                    <div className="appbar-inner">
                        <FeedbackBarItem/>
                        {this.state.logged_in &&
                            <NotificationsBarItem available={this.state.new_notifs} notifs={this.state.notifs}
                                                  elevateNotifs={this.elevateNotifs}/>
                        }
                        {this.state.logged_in &&
                            <AccountBarItem elevateLogout={this.elevateLogout} username={this.state.username}/>
                        }
                        {!this.state.logged_in &&
                            <AuthBarItem token={this.state.token} elevateBadToken={this.elevateBadToken}
                                         elevateLogin={this.elevateLogin}/>
                        }
                    </div>
                </AppBar>
                <AppPage>
                    <AppMenu>
                        <NewsMenuItem active={this.state.active_content_item} elevate={this.elevateMenuItemClick}/>
                        {this.state.logged_in &&
                            <div>
                                <TeamMenuItem active={this.state.active_content_item}
                                              elevate={this.elevateMenuItemClick}/>
                                {/*<CodeMenuItem active={this.state.active_content_item}*/}
                                {/*              elevate={this.elevateMenuItemClick}/>*/}
                                <FilesMenuItem active={this.state.active_content_item}
                                               elevate={this.elevateMenuItemClick}/>
                            </div>
                        }
                    </AppMenu>
                    <AppContent>
                        <NewsContentItem active={this.state.active_content_item}/>
                        {this.state.logged_in &&
                            <div>
                                <TeamContentItem
                                    status={this.state.team_status}
                                    active={this.state.active_content_item}
                                    uuid={this.state.uuid}
                                    team_info={this.state.team_info}
                                    elevateUpdate={this.elevateUpdate}
                                />
                                {/*<CodeContentItem active={this.state.active_content_item}/>*/}
                                <FilesContentItem active={this.state.active_content_item}/>
                            </div>
                        }
                    </AppContent>
                </AppPage>
            </AppContainer>
        );
    }
}

export default App;
