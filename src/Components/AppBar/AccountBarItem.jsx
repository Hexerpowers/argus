import React, {Component} from 'react';

class AccountBarItem extends Component {
    constructor(props) {
        super(props);
        this.showAccount = this.showAccount.bind(this)
        this.hideAccount = this.hideAccount.bind(this)
        this.logout = this.logout.bind(this)
    }

    showAccount() {
        document.getElementById('account-expandable-inner').classList.add('appbar-account-active');
        document.getElementById('account-expandable-outer').classList.add('appbar-account-active');
    }

    hideAccount() {
        document.getElementById('account-expandable-inner').classList.remove('appbar-account-active');
        document.getElementById('account-expandable-outer').classList.remove('appbar-account-active');
    }

    logout(){
        this.props.elevateLogout()
    }

    render() {
        let link = "https://www.gravatar.com/avatar/e78e070e2ee7ef49fc1f88bb636d642a?d=https://ui-avatars.com/api/"+this.props.username+"/128/CC4AF4"
        return (
            <div className="appbar-account">
                <div onClick={this.showAccount}  className="appbar-account-inner">
                    <img src={link}
                        className="appbar-account-img"  alt=""/>
                    <span className="appbar-account-text">{this.props.username}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                        <path d="M2.7567 4.67412C3.15395 5.1155 3.84605 5.1155 4.24329 4.67412L6.49793 2.16897C7.0771 1.52544 6.62041 0.5 5.75464 0.5H1.24536C0.379591 0.5 -0.0771021 1.52544 0.502068 2.16896L2.7567 4.67412Z" fill="#7E7885"/>
                    </svg>
                </div>
                <div id="account-expandable-inner" className="appbar-account-expandable">
                    <svg className="appbar-account-expandable-p" xmlns="http://www.w3.org/2000/svg" width="16"
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
                    <div className="appbar-account-expandable-text">
                        <div onClick={this.logout} className="appbar-account-expandable-logout">Выход</div>
                    </div>
                </div>
                <div id="account-expandable-outer" onClick={this.hideAccount} className="appbar-account-outer"></div>
            </div>
        );
    }
}

export default AccountBarItem;
