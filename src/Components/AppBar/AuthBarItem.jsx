import React, {Component} from 'react';
import Swal from 'sweetalert2'
import '@sweetalert2/theme-default/default.css';

class AuthBarItem extends Component {
    constructor(props) {
        super(props);
        this.showAuth = this.showAuth.bind(this)
        this.hideAuth = this.hideAuth.bind(this)
        this.auth_by_credentials = this.auth_by_credentials.bind(this)
        this.auth_by_token = this.auth_by_token.bind(this)
        this.register = this.register.bind(this)
        this.checkEmail = this.checkEmail.bind(this)
        this.checkPassword = this.checkPassword.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.token !== prevProps.token && this.props.token.length > 20) {
            this.auth_by_token(this.props.token);
        }
    }

    showAuth() {
        document.getElementById('auth-expandable-inner').classList.add('appbar-auth-active');
        document.getElementById('auth-expandable-outer').classList.add('appbar-auth-active');
    }

    hideAuth() {
        document.getElementById('auth-expandable-inner').classList.remove('appbar-auth-active');
        document.getElementById('auth-expandable-outer').classList.remove('appbar-auth-active');
    }

    checkEmail(msg) {
        return msg.length > 5 && msg.length < 40 && msg.includes('@');
    }

    checkPassword(msg) {
        return msg.length > 8 && msg.length < 20;
    }

    auth_by_credentials() {
        Swal.fire({
            title: 'Вход',
            html: `<input type="text" id="login" class="swal2-input" placeholder="Логин">
                    <input type="password" id="password" class="swal2-input" placeholder="Пароль">`,
            confirmButtonText: 'Войти',
            focusConfirm: false,
            preConfirm: () => {
                const login = Swal.getPopup().querySelector('#login').value
                const password = Swal.getPopup().querySelector('#password').value
                if (!login) {
                    Swal.showValidationMessage(`Введите логин`)
                }
                if (!password) {
                    Swal.showValidationMessage(`Введите пароль`)
                }
                if (!this.checkEmail(login)) {
                    Swal.showValidationMessage(`Какой-то у вас логин странный`)
                }
                if (!this.checkPassword(password)) {
                    Swal.showValidationMessage(`Какой-то у вас пароль странный`)
                }
                return {login: login, password: password}
            }
        }).then((result) => {
            if (typeof result.value !== 'undefined') {
                fetch("https://api.hxps.ru/argus/login", {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        login: result.value.login.trim(),
                        password: result.value.password.trim()
                    })
                })
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                            if (data['msg'] !== 'accepted') {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Попробуй ещё раз',
                                    text: 'Неверный логин или пароль',
                                    footer: '<a href="https://vk.com/im?sel=-216384572">' +
                                        'Помощь с восстановлением учётных данных</a>'
                                })
                            } else {
                                this.props.elevateLogin(data['username'], data['uuid'], data['token'],
                                    data['new_notifs'], data['notifs'], data['team_status'], data['team_info'])
                            }
                        }
                    )
            }
        })
    }

    auth_by_token(token) {
        fetch("https://api.hxps.ru/argus/login", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                token: token.trim(),
            })
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                    if (data['msg'] !== 'accepted') {
                        this.props.elevateBadToken()
                    } else {
                        this.props.elevateLogin(data['username'], data['uuid'], data['token'],
                            data['new_notifs'], data['notifs'], data['team_status'], data['team_info'])
                    }
                }
            )
    }

    register() {
        Swal.fire({
            title: 'Регистрация',
            html: `<input type="text" id="login" class="swal2-input" placeholder="Эл. почта">
                    <input type="password" id="password" class="swal2-input" placeholder="Пароль">
                    `,
            footer: '<div>Нажимая на кнопку "зарегистрироваться", я даю <a class="app-a" href="https://">согласие на обработку персональных данных.</a></div>',
            confirmButtonText: 'Зарегистрироваться',
            focusConfirm: false,
            preConfirm: () => {
                const login = Swal.getPopup().querySelector('#login').value
                const password = Swal.getPopup().querySelector('#password').value
                if (!login) {
                    Swal.showValidationMessage(`Введите логин`)
                }
                if (!password) {
                    Swal.showValidationMessage(`Введите пароль`)
                }
                if (!this.checkEmail(login)) {
                    Swal.showValidationMessage(`Логин должен быть от 5 до 40 символов в длину и содержать действующий адрес электронной почты`)
                }
                if (!this.checkPassword(password)) {
                    Swal.showValidationMessage(`Пароль должен быть от 8 о 20 символов в длину`)
                }
                return {login: login, password: password}
            }
        }).then((result) => {
            if (typeof result.value !== 'undefined') {
                fetch("https://api.hxps.ru/argus/register", {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        login: result.value.login.trim(),
                        password: result.value.password.trim()
                    })
                })
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                            if (data['msg'] !== 'accepted') {
                                if (data['msg'] === 'rejected') {
                                    if (data['reason']==='duplicate_login'){
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Такой логин уже зарегистрирован',
                                            text: 'Выбери другой адрес электронной почты'
                                        }).then(()=>{
                                            this.register()
                                        })
                                    }else {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Произошла ошибка',
                                            text: 'Попробуй ещё раз позднее',
                                            footer: '<a href="https://memepedia.ru/hackerman/">' +
                                                'Почему это продолжает происходить?</a>'
                                        })
                                    }
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Попробуй ещё раз',
                                        text: 'Вероятно, ошибка на нашей стороне. Мы уже разбираемся...',
                                        footer: '<a href="https://vk.com/im?sel=-216384572">' +
                                            'Помощь с регистрацией</a>'
                                    })
                                }
                            } else {
                                this.props.elevateLogin(data['username'], data['uuid'], data['token'],
                                    data['new_notifs'], data['notifs'], data['team_status'], data['team_info'])
                            }
                        }
                    )
            }
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
                        <div onClick={this.auth_by_credentials} className="appbar-auth-expandable-login">Вход</div>
                        <div onClick={this.register} className="appbar-auth-expandable-register">Регистрация</div>
                    </div>
                </div>
                <div id="auth-expandable-outer" onClick={this.hideAuth} className="appbar-auth-outer"></div>
            </div>
        );
    }
}

export default AuthBarItem;
