import React, {Component} from 'react';

class NotificationsBarItem extends Component {
    constructor(props) {
        super(props);
        this.showNotifications = this.showNotifications.bind(this)
        this.hideNotifications = this.hideNotifications.bind(this)
    }

    showNotifications() {
        document.getElementById('notif-expandable-inner').classList.add('appbar-notifications-active');
        document.getElementById('notif-expandable-outer').classList.add('appbar-notifications-active');
        document.getElementById('notif-marker').classList.add('elem-disabled');
    }

    hideNotifications() {
        document.getElementById('notif-expandable-inner').classList.remove('appbar-notifications-active');
        document.getElementById('notif-expandable-outer').classList.remove('appbar-notifications-active');
    }

    render() {
        return (
            <div className="appbar-notifications">
                <svg onClick={this.showNotifications} className="appbar-notifications-i"
                     xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                        d="M10.2975 15.75C10.1656 15.9773 9.97638 16.166 9.74867 16.2971C9.52096 16.4283 9.26278 16.4973 9 16.4973C8.73722 16.4973 8.47904 16.4283 8.25133 16.2971C8.02362 16.166 7.83436 15.9773 7.7025 15.75M16.5 12.75H1.5C2.09674 12.75 2.66903 12.5129 3.09099 12.091C3.51295 11.669 3.75 11.0967 3.75 10.5V6.75C3.75 5.35761 4.30312 4.02226 5.28769 3.03769C6.27226 2.05312 7.60761 1.5 9 1.5C10.3924 1.5 11.7277 2.05312 12.7123 3.03769C13.6969 4.02226 14.25 5.35761 14.25 6.75V10.5C14.25 11.0967 14.4871 11.669 14.909 12.091C15.331 12.5129 15.9033 12.75 16.5 12.75Z"
                        stroke="#BAB4C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {this.props.available &&
                    <div id="notif-marker" className="appbar-notifications-available"></div>
                }
                <div id="notif-expandable-inner" className="appbar-notifications-expandable">
                    <svg className="appbar-notifications-expandable-p" xmlns="http://www.w3.org/2000/svg" width="16"
                         height="9" viewBox="0 0 16 9" fill="none">
                        <g clipPath="url(#clip0_1700_7210)">
                            <path d="M8 1L0 9H16L8 1Z" fill="#201E23"/>
                            <path d="M0 9L8 1L16 9" stroke="#635F68"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1700_7210">
                                <rect width="16" height="9" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="appbar-notifications-expandable-text">
                        {this.props.available &&
                            this.props.notifs.map((obj, i) =>
                            <div className="notif-card" key={i}>
                                <div className="notif-caption">
                                    {obj.caption}
                                </div>
                                <div className="notif-text">
                                    {obj.text}
                                </div>
                            </div>
                            )}
                        {!this.props.available &&
                            <div className="appbar-notifications-expandable-msg"><div className="notifications-no">Нет уведомлений</div></div>
                        }
                    </div>
                </div>
                <div id="notif-expandable-outer" onClick={this.hideNotifications} className="appbar-notifications-outer"></div>
            </div>
        );
    }
}

export default NotificationsBarItem;
