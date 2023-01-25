import React, {Component} from 'react';
import Swal from 'sweetalert2'
import '@sweetalert2/theme-default/default.css';

class AuthBarItem extends Component {
    constructor(props) {
        super(props);
        this.showAuth = this.showAuth.bind(this)
        this.hideAuth = this.hideAuth.bind(this)
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }

    showAuth() {
        document.getElementById('auth-expandable-inner').classList.add('appbar-auth-active');
        document.getElementById('auth-expandable-outer').classList.add('appbar-auth-active');
    }

    hideAuth() {
        document.getElementById('auth-expandable-inner').classList.remove('appbar-auth-active');
        document.getElementById('auth-expandable-outer').classList.remove('appbar-auth-active');
    }

    login() {
        Swal.fire({
            title: 'Вход',
            html: `<input type="text" id="login" class="swal2-input" placeholder="Логин">
                    <input type="password" id="password" class="swal2-input" placeholder="Пароль">`,
            confirmButtonText: 'Войти',
            focusConfirm: false,
            preConfirm: () => {
                const login = Swal.getPopup().querySelector('#login').value
                const password = Swal.getPopup().querySelector('#password').value
                if (!login || !password) {
                    Swal.showValidationMessage(`Введите логин и пароль`)
                }
                return {login: login, password: password}
            }
        }).then((result) => {
            //   Swal.fire(`
            //   Login: ${result.value.login}
            //   Password: ${result.value.password}
            // `.trim())
            this.props.elevateLogin("Артём Акжигитов")
        })
    }

    register() {
        Swal.fire({
            title: 'Регистрация',
            html: `<input type="text" id="login" class="swal2-input" placeholder="Логин">
                    <input type="text" id="password" class="swal2-input" placeholder="Пароль">
                    <input type="text" id="name" class="swal2-input" placeholder="Эл. почта">
                    `,
            confirmButtonText: 'Зарегистрироваться',
            focusConfirm: false,
            preConfirm: () => {
                const login = Swal.getPopup().querySelector('#login').value
                const password = Swal.getPopup().querySelector('#password').value
                if (!login || !password) {
                    Swal.showValidationMessage(`Введите логин и пароль`)
                }
                return {login: login, password: password}
            }
        }).then((result) => {
            //   Swal.fire(`
            //   Login: ${result.value.login}
            //   Password: ${result.value.password}
            // `.trim())
            this.props.elevateLogin("Артём Акжигитов")
        })
    }

    render() {
        return (
            <div className="appbar-account">
                <div onClick={this.showAuth} className="appbar-account-inner">
                    <span className="appbar-account-text">&nbsp;Войти</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                        <path
                            d="M2.7567 4.67412C3.15395 5.1155 3.84605 5.1155 4.24329 4.67412L6.49793 2.16897C7.0771 1.52544 6.62041 0.5 5.75464 0.5H1.24536C0.379591 0.5 -0.0771021 1.52544 0.502068 2.16896L2.7567 4.67412Z"
                            fill="#7E7885"/>
                    </svg>
                </div>
                <div id="auth-expandable-inner" className="appbar-auth-expandable">
                    <svg className="appbar-auth-expandable-p" xmlns="http://www.w3.org/2000/svg" width="16"
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
                    <div className="appbar-auth-expandable-text">
                        <div onClick={this.login} className="appbar-auth-expandable-login">Вход</div>
                        <div onClick={this.register} className="appbar-auth-expandable-register">Регистрация</div>
                    </div>
                </div>
                <div id="auth-expandable-outer" onClick={this.hideAuth} className="appbar-auth-outer"></div>
            </div>
        );
    }
}

export default AuthBarItem;
