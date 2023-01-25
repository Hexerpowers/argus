import React, {Component} from 'react';

import "../Assets/Styles/AppMenu.css"

class AppMenu extends Component {
    render() {
        return (
            <div className="appmenu">
                <ul className="appmenu-inner">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default AppMenu;
