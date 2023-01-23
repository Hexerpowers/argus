import React, {Component} from 'react';
import Logo_img from "../../Assets/Img/logo.jpg"

class Logo extends Component {
    render() {
        return (
            <div className="appbar-logo">
                <a className="appbar-logo-a" href="https://vk.com/polyrobotech">
                    <img src={Logo_img} className="appbar-logo-img" alt="logo"/>
                </a>
                &nbsp;Аргус
            </div>
        );
    }
}

export default Logo;
