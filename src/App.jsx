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
import NewsContentItem from "./Components/Content/NewsContentItem";
import TeamContentItem from "./Components/Content/TeamContentItem";
import CodeContentItem from "./Components/Content/CodeContentItem";
import FilesContentItem from "./Components/Content/FilesContentItem";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Артём Акжигитов",
            logged_in: true,
            new_notifs: true,
            notifs: [
                {
                    caption: "Новая версия регламента",
                    text: "доступна для загрузки в разделе «Материалы»"
                },
                {
                    caption: "Тестовое уведомление",
                    text: "надо подумать над дизайном и механикой прочтения и удаления"
                },
            ],
            active_content_item:0,
            team_status:3
        }

        this.elevateNotifs = this.elevateNotifs.bind(this)
        this.elevateLogout = this.elevateLogout.bind(this)
        this.elevateLogin = this.elevateLogin.bind(this)
        this.elevateMenuItemClick = this.elevateMenuItemClick.bind(this)
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

    elevateMenuItemClick(e_id) {
        this.setState({
            active_content_item: e_id
        });
    }

    render() {
        return (
            <AppContainer>
                <AppBar>
                    <LogoBarItem/>
                    <div className="appbar-inner">
                        <FeedbackBarItem/>
                        <NotificationsBarItem available={this.state.new_notifs} notifs={this.state.notifs}
                                              elevateNotifs={this.elevateNotifs}/>
                        {this.state.logged_in &&
                            <AccountBarItem elevateLogout={this.elevateLogout} username={this.state.username}/>
                        }
                        {!this.state.logged_in &&
                            <AuthBarItem elevateLogin={this.elevateLogin}/>
                        }
                    </div>
                </AppBar>
                <AppPage>
                    <AppMenu>
                        <NewsMenuItem active={this.state.active_content_item} elevate={this.elevateMenuItemClick}/>
                        {this.state.logged_in &&
                            <div>
                                <TeamMenuItem active={this.state.active_content_item} elevate={this.elevateMenuItemClick}/>
                                <CodeMenuItem active={this.state.active_content_item} elevate={this.elevateMenuItemClick}/>
                                <FilesMenuItem active={this.state.active_content_item} elevate={this.elevateMenuItemClick}/>
                            </div>
                        }
                    </AppMenu>
                    <AppContent>
                        <NewsContentItem active={this.state.active_content_item}/>
                        <TeamContentItem status={this.state.team_status} active={this.state.active_content_item}/>
                        <CodeContentItem active={this.state.active_content_item}/>
                        <FilesContentItem active={this.state.active_content_item}/>
                    </AppContent>
                </AppPage>
            </AppContainer>
        );
    }
}

export default App;
